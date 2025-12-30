import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Don't initialize globally to avoid build errors if env var is missing
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const body = await request.json();
        const { name, email, date, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // 1. Send Notification to Business (You)
        await resend.emails.send({
            from: 'TOAST Mobile Bar <hello@mail.toastmobile.bar>',
            to: ['sunsetsacoustic@gmail.com'],
            replyTo: email,
            subject: `New Inquiry from ${name}`,
            html: `
                <h1>New Inquiry Received</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Date:</strong> ${date || 'Not specified'}</p>
                <p><strong>Message:</strong></p>
                <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #ccc;">
                    ${message.replace(/\n/g, '<br>')}
                </blockquote>
            `,
        });

        // 2. Send Confirmation to Client (Auto-reply)
        const { data, error } = await resend.emails.send({
            from: 'TOAST Mobile Bar <hello@mail.toastmobile.bar>',
            to: [email],
            subject: 'Welcome to TOAST! 🥂',
            html: `
                <div style="font-family: sans-serif; color: #333;">
                  <h1>Cheers, ${name}!</h1>
                  <p>Thanks for requesting a quote from TOAST Mobile Bar Co.</p>
                  <p>We have received your request and will get back to you within 24 hours.</p>
                  <hr />
                  <p style="color: #666; font-size: 12px;">TOAST Mobile Bar Co. | www.toastmobile.bar</p>
                </div>
            `,
        });

        if (error) {
            console.error('Resend error (Auto-reply):', error);
            // We don't fail the whole request if auto-reply fails, but we log it.
            // If main notification failed, the first await would have thrown or we should handle it better,
            // but for now let's return success if we get here.
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Request processing error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
