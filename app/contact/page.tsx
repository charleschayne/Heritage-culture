"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Instagram, Linkedin, Twitter, ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", subject: "General Inquiry", message: "" });
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error ?? "Something went wrong.");
            }

            setStatus("success");
            setForm({ name: "", email: "", subject: "General Inquiry", message: "" });
        } catch (err: unknown) {
            setStatus("error");
            setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
        }
    };

    return (
        <main className="min-h-screen bg-black text-white selection:bg-white/20">
            <Navbar />

            <section className="pt-32 pb-24 px-4 md:px-12 container mx-auto">
                {/* Header */}
                <div className="mb-16 md:mb-24">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="h-px w-8 bg-hc-sand" />
                        <span className="text-hc-sand uppercase tracking-[0.2em] text-xs font-bold font-sans">Get In Touch</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] max-w-4xl">
                        Contact <span className="italic text-hc-sand font-normal">H&C Africa</span>
                    </h1>
                </div>

                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Contact Info */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="space-y-5">
                            <h3 className="text-xl font-serif text-white">Our Location</h3>
                            <div className="flex items-start gap-4 text-gray-400 font-light leading-relaxed font-sans">
                                <MapPin className="w-5 h-5 shrink-0 text-hc-sand mt-0.5" />
                                <address className="not-italic">
                                    Heritage & Culture Africa<br />
                                    United Kingdom · Nigeria · Qatar
                                </address>
                            </div>
                        </div>

                        <div className="space-y-5">
                            <h3 className="text-xl font-serif text-white">Contact Info</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-gray-400 font-light font-sans">
                                    <Mail className="w-5 h-5 shrink-0 text-hc-sand" />
                                    <a href="mailto:info@handcafrica.com" className="hover:text-white transition-colors">info@handcafrica.com</a>
                                </div>
                                <div className="flex items-center gap-4 text-gray-400 font-light font-sans">
                                    <Phone className="w-5 h-5 shrink-0 text-hc-sand" />
                                    <a href="tel:+233123456789" className="hover:text-white transition-colors">+233 123 456 789</a>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-5">
                            <h3 className="text-xl font-serif text-white">Follow Us</h3>
                            <div className="flex gap-3">
                                <a href="#" className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black hover:border-white transition-all">
                                    <Instagram className="w-4 h-4" />
                                </a>
                                <a href="#" className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black hover:border-white transition-all">
                                    <Twitter className="w-4 h-4" />
                                </a>
                                <a href="#" className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black hover:border-white transition-all">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Topics */}
                        <div className="space-y-4 pt-4 border-t border-white/5">
                            <p className="text-xs font-bold tracking-widest uppercase text-white/30 font-sans">We'd love to hear about</p>
                            {["Partnership & Sponsorship", "AfriKulture Doha 2026", "NYMF Collaborations", "Press & Media", "General Inquiry"].map((t) => (
                                <div key={t} className="flex items-center gap-3">
                                    <span className="w-1 h-1 rounded-full bg-hc-sand" />
                                    <span className="text-gray-500 font-sans text-sm">{t}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-8 bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
                        {status === "success" ? (
                            <div className="flex flex-col items-center justify-center h-full text-center py-20 gap-6">
                                <CheckCircle className="w-16 h-16 text-hc-sand" />
                                <h2 className="text-3xl font-serif">Message Sent!</h2>
                                <p className="text-gray-400 font-light font-sans max-w-sm">
                                    Thank you for reaching out. We've received your message and will be in touch shortly.
                                </p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-4 text-sm font-bold tracking-widest uppercase text-hc-sand hover:text-white transition-colors font-sans"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs font-bold tracking-widest uppercase text-gray-500 font-sans">Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={form.name}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-hc-sand transition-colors placeholder:text-white/20 font-sans"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs font-bold tracking-widest uppercase text-gray-500 font-sans">Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={form.email}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-hc-sand transition-colors placeholder:text-white/20 font-sans"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-xs font-bold tracking-widest uppercase text-gray-500 font-sans">Subject</label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        className="w-full bg-black border-b border-white/20 py-4 text-white focus:outline-none focus:border-hc-sand transition-colors [&>option]:bg-black font-sans"
                                    >
                                        <option>General Inquiry</option>
                                        <option>Partnership & Sponsorship</option>
                                        <option>AfriKulture Doha 2026</option>
                                        <option>NYMF Collaborations</option>
                                        <option>Press & Media</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs font-bold tracking-widest uppercase text-gray-500 font-sans">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={form.message}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-hc-sand transition-colors resize-none placeholder:text-white/20 font-sans"
                                        placeholder="Tell us about your inquiry, project, or collaboration idea..."
                                    />
                                </div>

                                {status === "error" && (
                                    <div className="flex items-center gap-3 text-red-400 text-sm font-sans bg-red-400/10 px-4 py-3 rounded-lg border border-red-400/20">
                                        <AlertCircle className="w-4 h-4 shrink-0" />
                                        {errorMsg}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="flex items-center gap-3 px-8 py-4 bg-white text-black font-bold tracking-widest uppercase hover:bg-hc-sand transition-colors rounded-sm disabled:opacity-50 disabled:cursor-not-allowed font-sans"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <ArrowRight className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
