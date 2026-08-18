import { Handler } from '@netlify/functions';
import Stripe from 'stripe';
import { Resend } from 'resend';
import jwt from 'jsonwebtoken';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});
const resend = new Resend(process.env.RESEND_API_KEY);
const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'secret-outfitter-key';
const SITE_URL = process.env.URL || 'https://greyriverlodge.com';

// Standard rate table baseline (CAD)
const BASE_RATE_CAD = 8500; // Estimated per rod/week

export const handler: Handler = async (event) => {
  const token = event.queryStringParameters?.token;

  if (!token) {
    return {
      statusCode: 400,
      body: 'Missing approval token.',
    };
  }

  try {
    // 1. Verify signed token from outfitter email
    const decoded = jwt.verify(token, JWT_SECRET) as {
      name: string;
      email: string;
      partySize: string;
      seasonWindow: string;
      refCode: string;
    };

    const { name, email, partySize, seasonWindow, refCode } = decoded;

    // Calculate dynamic pricing based on party size
    let partyMultiplier = 2;
    if (partySize.includes('3-4')) partyMultiplier = 4;
    else if (partySize.includes('5-8') || partySize.includes('buyout')) partyMultiplier = 8;

    const totalTripAmount = BASE_RATE_CAD * partyMultiplier;
    const depositAmountCents = Math.round((totalTripAmount * 0.5) * 100);

    // 2. Generate Stripe 50% Deposit Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: email,
      client_reference_id: refCode,
      line_items: [
        {
          price_data: {
            currency: 'cad',
            product_data: {
              name: `50% Deposit: Grey River Lodge Salmon Expedition`,
              description: `Booking Ref: ${refCode} | Window: ${seasonWindow} | Party: ${partySize}`,
            },
            unit_amount: depositAmountCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      metadata: {
        refCode,
        name,
        email,
        partySize,
        seasonWindow,
        totalTripAmount: totalTripAmount.toString(),
      },
      success_url: `${SITE_URL}/booking-confirmed?ref=${refCode}`,
      cancel_url: `${SITE_URL}/contact`,
    });

    // 3. Send email to the guest containing the payment link
    await resend.emails.send({
      from: 'Grey River Lodge <reservations@greyriverlodge.com>',
      to: [email],
      subject: `Your Grey River Lodge Reservation is Approved (${refCode})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1e293b; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #11191F; margin-top: 0;">Your Expedition is Approved!</h2>
          <p>Hello ${name},</p>
          <p>Our head outfitter has reviewed your request for the <strong>${seasonWindow}</strong> rotation and confirmed lodge and pool availability.</p>
          
          <div style="background-color: #F5F2EB; padding: 16px; border-radius: 8px; margin: 20px 0; border: 1px solid #e2e8f0;">
            <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Expedition Reference:</strong> ${refCode}</p>
            <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Party Size:</strong> ${partySize}</p>
            <p style="margin: 0; font-size: 14px; color: #D97746;"><strong>50% Deposit Due:</strong> $${(depositAmountCents / 100).toLocaleString('en-CA', { minimumFractionDigits: 2 })} CAD</p>
          </div>

          <p>To finalize your reservation and lock in your helicopter transit slots, please submit your 50% deposit using our secure Stripe checkout:</p>

          <div style="text-align: center; margin: 32px 0;">
            <a href="${session.url}" style="background-color: #D97746; color: #ffffff; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 6px; display: inline-block; font-size: 15px;">
              Pay 50% Deposit via Stripe
            </a>
          </div>

          <p style="font-size: 12px; color: #64748b; line-height: 1.5;">
            * The remaining 50% balance is due 60 days prior to departure. Heli-transfers depart directly from the regional gateway in western Newfoundland.
          </p>
        </div>
      `,
    });

    // 4. Return confirmation screen for outfitter in browser
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: `
        <!DOCTYPE html>
        <html>
          <head><title>Reservation Approved</title></head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #F5F2EB;">
            <div style="background: white; padding: 40px; border-radius: 12px; text-align: center; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); max-width: 450px;">
              <h2 style="color: #16a34a; margin-bottom: 8px;">✓ Booking Approved & Invoice Dispatched</h2>
              <p style="color: #475569; font-size: 14px;">Stripe 50% checkout invoice was emailed to <strong>${email}</strong>.</p>
              <p style="color: #94a3b8; font-size: 12px;">Reference: ${refCode}</p>
            </div>
          </body>
        </html>
      `,
    };
  } catch (err: any) {
    console.error('Approval Error:', err);
    return { statusCode: 500, body: `Approval Error: ${err.message}` };
  }
};