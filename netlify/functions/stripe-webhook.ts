import { Handler } from '@netlify/functions';
import Stripe from 'stripe';
import { google } from 'googleapis';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export const handler: Handler = async (event) => {
  const sig = event.headers['stripe-signature'];

  if (!sig) {
    return { statusCode: 400, body: 'Missing Stripe Signature header.' };
  }

  let stripeEvent: Stripe.Event;

  try {
    stripeEvent = stripe.webhooks.constructEvent(
      event.body!,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error(`Webhook signature verification failed:`, err.message);
    return { statusCode: 400, body: `Webhook Error: ${err.message}` };
  }

  // Handle successful deposit payments
  if (stripeEvent.type === 'checkout.session.completed') {
    const session = stripeEvent.data.object as Stripe.Checkout.Session;
    const { refCode, name, email, seasonWindow, partySize } = session.metadata || {};

    try {
      // Connect to Google Calendar via Service Account
      if (
        process.env.GOOGLE_CLIENT_EMAIL && 
        process.env.GOOGLE_PRIVATE_KEY && 
        process.env.GOOGLE_CALENDAR_ID
      ) {
        const auth = new google.auth.JWT(
          process.env.GOOGLE_CLIENT_EMAIL,
          undefined,
          process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
          ['https://www.googleapis.com/auth/calendar']
        );

        const calendar = google.calendar({ version: 'v3', auth });

        // Calculate a 7-day expedition block on master calendar
        const startDate = new Date();
        const endDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

        await calendar.events.insert({
          calendarId: process.env.GOOGLE_CALENDAR_ID,
          requestBody: {
            summary: `🎣 RESERVED: ${name} (${partySize})`,
            description: `Ref Code: ${refCode}\nGuest: ${name} (${email})\nWindow: ${seasonWindow}\nDeposit: $${((session.amount_total || 0) / 100).toFixed(2)} CAD (PAID via Stripe)`,
            start: { date: startDate.toISOString().split('T')[0] },
            end: { date: endDate.toISOString().split('T')[0] },
          },
        });

        console.log(`[Google Calendar] Blocked dates for Ref: ${refCode}`);
      } else {
        console.warn('Google Calendar environment variables missing. Skipping auto-calendar sync.');
      }
    } catch (calErr: any) {
      console.error('Failed to sync booking to Google Calendar:', calErr.message);
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true }),
  };
};