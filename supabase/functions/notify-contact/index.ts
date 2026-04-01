// @ts-nocheck
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const NOTIFY_EMAIL = Deno.env.get("NOTIFY_EMAIL");

serve(async (req: Request) => {
    try {
        const { name, email, subject, message } = await req.json();

        if (!RESEND_API_KEY || !NOTIFY_EMAIL) {
            throw new Error("Missing environment variables: RESEND_API_KEY or NOTIFY_EMAIL");
        }

        const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: "H&C Africa <onboarding@resend.dev>",
                to: [NOTIFY_EMAIL],
                subject: `[H&C Africa] New Contact: ${subject ?? "General Inquiry"}`,
                html: `
                    <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
                        <h2 style="color: #000; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Contact Submission</h2>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Subject:</strong> ${subject ?? "General Inquiry"}</p>
                        <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 5px;">
                            <p><strong>Message:</strong></p>
                            <p style="white-space: pre-wrap;">${message}</p>
                        </div>
                        <footer style="margin-top: 30px; font-size: 12px; color: #999;">
                            This email was sent from the Heritage & Culture Africa platform contact form via Resend.
                        </footer>
                    </div>
                `,
            }),
        });

        if (!res.ok) {
            const error = await res.json();
            throw new Error(`Resend API error: ${JSON.stringify(error)}`);
        }

        const data = await res.json();
        return new Response(JSON.stringify({ ok: true, id: data.id }), { 
            status: 200,
            headers: { "Content-Type": "application/json" }
        });

    } catch (err) {
        console.error("notify-contact error:", err.message);
        return new Response(JSON.stringify({ 
            error: "Failed to send notification",
            details: err.message,
            timestamp: new Date().toISOString()
        }), { 
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
});
