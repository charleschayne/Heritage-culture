"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center">
            {/* Background Image */}
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/herovid.mp4" type="video/mp4" />
                </video>
                {/* Stronger overlay for high contrast */}
                <div className="absolute inset-0 bg-hc-black/60 bg-gradient-to-r from-hc-black/90 via-hc-black/50 to-transparent" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    {/* Label */}
                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-px w-8 bg-hc-sand"></span>
                        <span className="text-hc-sand uppercase tracking-[0.2em] text-xs font-bold">EST. 2025</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-white leading-[1.1] tracking-tight mb-6">
                        HERITAGE <span className="text-hc-sand italic">&</span> <br />
                        CULTURE
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl mb-10 border-l-2 border-hc-terracotta pl-6">
                        A cultural organization created to promote, protect and globalize African heritage through experiences, festivals, storytelling, and tourism — positioning Africa as a symbol of luxury, excellence, and heritage.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white text-hc-black font-bold text-xs tracking-widest uppercase hover:bg-hc-sand transition-colors flex items-center justify-center gap-2 rounded-sm"
                        >
                            Get In Touch
                            <ArrowRight className="w-4 h-4" />
                        </Link>

                        <Link
                            href="#experiences"
                            className="px-8 py-4 border border-white/30 text-white font-bold text-xs tracking-widest uppercase hover:bg-white/10 transition-colors flex items-center justify-center gap-2 rounded-sm"
                        >
                            View Experiences
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
