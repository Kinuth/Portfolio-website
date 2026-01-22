'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
    try {
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;

        if (!name || !email || !message) {
            return { success: false, error: 'All fields are required' };
        }

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['kinuthiaryan01@gmail.com'],
            subject: `New message from ${name}`,
            text: message,
            // Optional: nice HTML version
            react: (
                <div>
                    <h1>New contact form submission</h1>
                    <p><strong>From:</strong> {name} ({email})</p>
                    <p><strong>Message:</strong></p>
                    <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
                </div>
            ),
        });

        if (error) {
            console.error(error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (err) {
        console.error(err);
        return { success: false, error: 'Failed to send email' };
    }
}
