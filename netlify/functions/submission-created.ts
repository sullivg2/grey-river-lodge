import { Handler } from '@netlify/functions';
import { Resend } from 'resend';
import jwt from 'jsonwebtoken';

const resend = new Resend(process.env.RESEND_API_KEY);
const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'secret-outfitter-key';
const SITE_URL = process.env.URL || 'https://greyriverlodge.com';

export const handler: Handler = async (event) => {
  try {
    const { payload } = JSON.parse(event.body || '{}');
    const { 
      name, 
      email, 
      phone, 
      partySize, 
      seasonWindow, 
      experience, 
      notes 
    } = payload.data;

    // Generate a secure, 7-day signed approval token
    const token = jwt.sign(
      {
        name,
        email,
        partySize,
        seasonWindow,
        refCode: `GRL-${Math.floor(100000 + Math.random() * 900000)}`
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    const approvalUrl = `${SITE_URL}/.netlify/functions/approve-booking?token=${token}`;

    // Send email to Outfitter / Management
    await resend.emails.send({
      from: 'Grey River Reservations <reservations@greyriverlodge.com>',
      to: ['info@greyriverlodge.com'], // Outfitter email
      subject: `[New Inquiry] ${name} - ${partySize} (${seasonWindow})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #11191F; margin-bottom: 4px;">New Booking Inquiry</h2>
          <p style="color: #D97746; font-weight: bold; margin-top: 0;">Grey River Lodge Outfitting</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #64748b;">Guest Name:</td><td style="font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Phone:</td><td>${phone || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Party Size:</td><td style="font-weight: 600;">${partySize}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Target Season:</td><td style="font-weight: 600;">${seasonWindow}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Experience:</td><td>${experience}</td></tr>
          </table>

          <div style="background-color: #f8fafc; padding: 12px; border-radius: 6px; margin-bottom: 24px; font-size: 13px; color: #334155;">
            <strong>Guest Notes:</strong><br/>
            ${notes || 'No special requirements noted.'}
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a href="${approvalUrl}" style="background-color: #D97746; color: white; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 6px; display: inline-block;">
              Approve & Send 50% Deposit Link
            </a>
          </div>

          <p style="font-size: 11px; color: #94a3b8; text-align: center;">
            Clicking approve will generate a Stripe Checkout session and email the guest payment instructions automatically.
          </p>
        </div>
      `,
    });

    return { statusCode: 200, body: JSON.stringify({ message: 'Notification sent' }) };
  } catch (error: any) {
    console.error('Error in submission-created:', error);
    return { statusCode: 500, body: error.message };
  }
};