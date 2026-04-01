// supabase/functions/notify-contact/index.ts
// Deploy with: supabase functions deploy notify-contact
//
// Set these secrets in your Supabase dashboard (Project Settings > Edge Functions > Secrets):
//   NOTIFY_EMAIL    — your email address (where you want to receive notifications)
//   SMTP_HOST       — e.g. smtp.gmail.com
//   SMTP_PORT       — e.g. 587
//   SMTP_USER       — your Gmail address
//   SMTP_PASS       — your Gmail app password (not your account password)

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

serve(async (req: Request) => {
    try {
        const { name, email, subject, message } = await req.json();

        const client = new SmtpClient();
        await client.connectTLS({
            hostname: Deno.env.get("SMTP_HOST")!,
            port: Number(Deno.env.get("SMTP_PORT") ?? 587),
            username: Deno.env.get("SMTP_USER")!,
            password: Deno.env.get("SMTP_PASS")!,
        });

        await client.send({
            from: Deno.env.get("SMTP_USER")!,
            to: Deno.env.get("NOTIFY_EMAIL")!,
            subject: `[H&C Africa] New Contact: ${subject ?? "General Inquiry"}`,
            content: `
New contact form submission on Heritage & Culture Africa:

Name:     ${name}
Email:    ${email}
Subject:  ${subject ?? "—"}
Message:
${message}
            `.trim(),
        });

        await client.close();
        return new Response(JSON.stringify({ ok: true }), { status: 200 });
    } catch (err) {
        console.error("notify-contact error:", err);
        return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
    }
});
