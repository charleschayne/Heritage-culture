import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        // Validate
        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
        }

        // 1. Save to Supabase
        const { error: dbError } = await supabase
            .from("contact_submissions")
            .insert({ name, email, subject, message });

        if (dbError) {
            console.error("Supabase insert error:", dbError);
            return NextResponse.json({ error: "Failed to save submission." }, { status: 500 });
        }

        // 2. Trigger Edge Function to notify you by email
        const edgeFnUrl = process.env.SUPABASE_EDGE_FUNCTION_URL;
        if (edgeFnUrl) {
            await fetch(edgeFnUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
                },
                body: JSON.stringify({ name, email, subject, message }),
            }).catch((e) => console.error("Edge function notify failed:", e));
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Contact route error:", err);
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
}
