import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import {
  getCustomerConfirmationEmail,
  getSalonNotificationEmail,
} from '@/lib/email-templates';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { bookingData, config, bookingId } = await req.json();

    const customerEmail = getCustomerConfirmationEmail(bookingData, config, bookingId);
    const salonEmail = getSalonNotificationEmail(bookingData, config, bookingId);

    // 1. Email do klienta
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: bookingData.customerEmail,
      subject: customerEmail.subject,
      html: customerEmail.html,
    });

    // 2. Email do Ciebie (salon notification)
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'freekickerspolska@gmail.com',
      subject: salonEmail.subject,
      html: salonEmail.html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json(
      { error: 'Failed to send emails' },
      { status: 500 }
    );
  }
}
