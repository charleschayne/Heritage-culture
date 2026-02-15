"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-white/20">
            <Navbar />

            <section className="pt-32 pb-24 px-4 md:px-12 container mx-auto">
                {/* Header */}
                <div className="mb-16 md:mb-24">
                    <p className="text-gray-500 font-mono text-sm tracking-widest mb-6 lowercase">
                        // GET IN TOUCH
                    </p>
                    <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] max-w-4xl text-gray-500">
                        Contact <span className="text-white">H&C Africa</span>
                    </h1>
                </div>

                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Contact Info - Left Column */}
                    <div className="lg:col-span-4 space-y-12">

                        <div className="space-y-6">
                            <h3 className="text-2xl font-serif text-white">Visit Us</h3>
                            <div className="flex items-start gap-4 text-gray-400 font-light leading-relaxed">
                                <MapPin className="w-6 h-6 shrink-0 text-white/50" />
                                <address className="not-italic">
                                    123 Heritage Lane,<br />
                                    Creative District,<br />
                                    Accra, Ghana
                                </address>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-serif text-white">Contact Info</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-gray-400 font-light">
                                    <Mail className="w-6 h-6 shrink-0 text-white/50" />
                                    <a href="mailto:hello@hc-africa.com" className="hover:text-white transition-colors">hello@hc-africa.com</a>
                                </div>
                                <div className="flex items-center gap-4 text-gray-400 font-light">
                                    <Phone className="w-6 h-6 shrink-0 text-white/50" />
                                    <a href="tel:+233123456789" className="hover:text-white transition-colors">+233 123 456 789</a>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-serif text-white">Follow Us</h3>
                            <div className="flex gap-4">
                                <a href="#" className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black hover:border-white transition-all">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black hover:border-white transition-all">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black hover:border-white transition-all">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Contact Form - Right Column */}
                    <div className="lg:col-span-8 bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
                        <form className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold tracking-widest uppercase text-gray-500">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold tracking-widest uppercase text-gray-500">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-bold tracking-widest uppercase text-gray-500">Subject</label>
                                <select
                                    id="subject"
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors [&>option]:bg-black"
                                >
                                    <option>General Inquiry</option>
                                    <option>Partnership</option>
                                    <option>Press</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold tracking-widest uppercase text-gray-500">Message</label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors resize-none"
                                    placeholder="Tell us about your project or inquiry..."
                                />
                            </div>

                            <button type="submit" className="px-8 py-4 bg-white text-black font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors rounded-sm w-full md:w-auto">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
