import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    await resend.emails.send({
      from: 'NEXARA <onboarding@resend.dev>',
      to: 'nexara@writerswebproduction.com',
      subject: 'New Newsletter Subscriber',
      html: `<p>New subscriber: <strong>${email}</strong></p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}