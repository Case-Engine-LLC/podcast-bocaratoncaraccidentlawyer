import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { formConfig } from '@/data/siteData'

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = await req.json()
    const { name, email, phone, message, caseType } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const notifyEmails = formConfig.notifyEmails
      .split(',')
      .map((e: string) => e.trim())
      .filter(Boolean)

    await resend.emails.send({
      from: 'Podcast Contact Form <noreply@caseengine.com>',
      to: notifyEmails,
      replyTo: email,
      subject: `New Contact Form Submission – ${caseType || 'General Inquiry'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Case Type:</strong> ${caseType || 'Not specified'}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr />
        <p><em>Source: ${formConfig.source} | Campaign: ${formConfig.campaign}</em></p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message.' },
      { status: 500 }
    )
  }
}
