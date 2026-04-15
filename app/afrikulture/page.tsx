"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, Calendar, Music, Palette, Utensils, Globe, Users, Instagram, ChevronLeft, ChevronRight } from "lucide-react";

// Metadata removed from client component, moving title to a dummy tag or handling in layout

const highlights = [
    {
        icon: Music,
        title: "Live Performances",
        description: "From traditional drum ensembles to modern Afrobeats — live performances celebrating the full sonic spectrum of the continent, featuring world-class African artists.",
        image: "/Made-Kuti.jpg"
    },
    {
        icon: Palette,
        title: "Visual Storytelling",
        description: "Curated exhibitions, contemporary galleries, and immersive installations by leading African and diaspora artists sharing their visions of identity, heritage, and innovation.",
        image: "/visual-storytelling.jpg"
    },
    {
        icon: Utensils,
        title: "Culinary Journey",
        description: "A curated pan-African culinary experience featuring authentic regional dishes and modern fusion from world-class chefs. Taste the continent in one place.",
        image: "/culinary.jpg"
    },
    {
        icon: Globe,
        title: "Cultural Tourism",
        description: "A destination-integrated experience that positions Doha as a crossroads of African and Middle Eastern culture, driving international tourism and cross-continental exchange.",
        image: "/cultural tourism.jpg"
    },
    {
        icon: Users,
        title: "Community & Diaspora",
        description: "A space for the African diaspora to gather, celebrate, and reconnect — uniting communities across borders through shared cultural pride and creative expression.",
        image: "/community&diaspora.jpg"
    },
    {
        icon: MapPin,
        title: "Doha, Qatar",
        description: "Hosted in one of the world's most international cities, Afrikulture Doha 2026 brings the African continent to the global stage from the heart of the Middle East.",
        image: "/doha11.jpg"
    },
];

export default function AfriKulturePage() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev === highlights.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(timer);
    }, [activeIndex]); // Reset timer on slide change

    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            {/* ── HERO ── */}
            <section className="relative h-[90vh] w-full overflow-hidden flex items-end pb-20">
                <Image
                    src="/afculture12.jpg"
                    alt="Afrikulture Festival Doha 2026"
                    fill
                    className="object-cover opacity-40"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

                <div className="container mx-auto px-4 md:px-12 relative z-10">
                    <div className="max-w-5xl">
                        <div className="flex items-center gap-6 mb-10">
                            <div className="relative w-20 h-20 md:w-28 md:h-28 bg-black/40 backdrop-blur-sm rounded-full border border-white/10 shadow-2xl">
                                <Image src="/Afrilogo.png" alt="AfriKulture Logo" fill className="object-contain p-3" />
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="h-px w-8 bg-hc-sand" />
                                    <span className="text-hc-sand uppercase tracking-[0.2em] text-xs font-bold font-sans">Flagship International Activation</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.05] tracking-tight">
                                    Afrikulture <br />
                                    <span className="italic text-hc-sand font-normal">Doha 2026</span>
                                </h1>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-8 text-sm uppercase tracking-widest text-white font-sans">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-hc-sand" />
                                Doha, Qatar
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-hc-sand" />
                                2026 — Coming Soon
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4 text-hc-sand" />
                                Heritage & Culture Africa
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT IS AFRIKULTURE ── */}
            <section className="py-24 border-b border-white/5">
                <div className="container mx-auto px-4 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-px w-8 bg-hc-sand" />
                                <span className="text-hc-sand uppercase tracking-[0.2em] text-xs font-bold font-sans">The Mandate</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                                Africa's Culture, <br />
                                <span className="italic text-hc-sand font-normal">On the World Stage</span>
                            </h2>
                            <p className="text-xl text-white font-light leading-relaxed mb-8 font-sans">
                                Afrikulture Doha represents the flagship international activation of the Heritage & Culture Africa mandate — a world-class, multi-day cultural festival designed to position Africa as a symbol of luxury, creativity, and heritage on a global stage.
                            </p>
                            <p className="text-lg text-white font-light leading-relaxed font-sans">
                                We believe Africa's culture is not only heritage — it is an exportable global asset capable of generating economic growth, attracting international visitors, and shaping global narratives. Afrikulture Doha is that vision made real.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="relative aspect-square rounded-xl overflow-hidden">
                                    <Image src="/African Souk.jpeg" alt="African Souk" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="relative aspect-square rounded-xl overflow-hidden">
                                    <Image src="/Made-Kuti.jpg" alt="Made Kuti" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="relative aspect-square rounded-xl overflow-hidden">
                                    <Image src="/Male fashion model.jpg" alt="African Fashion" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="relative aspect-square rounded-xl overflow-hidden">
                                    <Image src="/Morrocan drum.jpg" alt="Moroccan Drum" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── QUOTE BANNER ── */}
            <section className="relative h-[45vh] w-full overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2600&auto=format&fit=crop" alt="Live event" fill className="object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4 md:px-12">
                        <p className="text-hc-sand text-xs font-bold tracking-widest uppercase font-sans mb-4">Afrikulture Doha 2026</p>
                        <blockquote className="text-3xl md:text-5xl font-serif italic text-white max-w-2xl leading-tight">
                            "A destination-integrated platform built on proven event frameworks."
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* ── IMPACT PILLARS (Why Doha) ── */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-4 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                            <Image src="/Qatar Cultural Center.jpg" alt="Qatar Cultural Center" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-px w-8 bg-hc-sand" />
                                <span className="text-hc-sand uppercase tracking-[0.2em] text-xs font-bold font-sans">Why Doha</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif mb-10 leading-tight">
                                A City Built for <br />
                                <span className="italic text-hc-sand font-normal">Global Impact</span>
                            </h2>
                            <div className="space-y-6">
                                {[
                                    { title: "Activate International Tourism", desc: "Doha's position as a world-class travel hub ensures maximum global reach and audience diversity." },
                                    { title: "Elevate Creative Industries", desc: "Connecting African creatives with Middle Eastern markets, investors, and global media platforms." },
                                    { title: "Cross-Continental Exchange", desc: "Bridging Africa and the Gulf — two regions with deep historical and cultural connections ready to be celebrated." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5 items-start">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-hc-sand shrink-0" />
                                        <div>
                                            <p className="font-semibold text-white font-sans mb-1">{item.title}</p>
                                            <p className="text-white text-sm font-light font-sans leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FESTIVAL HIGHLIGHTS (Carousel) ── */}
            <section className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="h-px w-8 bg-hc-sand" />
                                <span className="text-hc-sand uppercase tracking-[0.2em] text-xs font-bold font-sans">The Experience</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                                Festival <span className="italic text-hc-sand font-normal">Highlights</span>
                            </h2>
                        </div>
                        
                        {/* Navigation Controls */}
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={() => setActiveIndex((prev) => (prev === 0 ? highlights.length - 1 : prev - 1))}
                                className="p-4 rounded-full border border-white/10 hover:border-hc-sand/50 hover:bg-white/5 transition-all text-white group"
                            >
                                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button 
                                onClick={() => setActiveIndex((prev) => (prev === highlights.length - 1 ? 0 : prev + 1))}
                                className="p-4 rounded-full border border-white/10 hover:border-hc-sand/50 hover:bg-white/5 transition-all text-white group"
                            >
                                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    <div className="relative h-[600px] md:h-[500px] w-full bg-white/5 rounded-3xl overflow-hidden border border-white/10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="absolute inset-0 grid md:grid-cols-2"
                            >
                                {/* Image Half */}
                                <div className="relative h-64 md:h-full overflow-hidden">
                                    <Image 
                                        src={highlights[activeIndex].image} 
                                        alt={highlights[activeIndex].title}
                                        fill
                                        className="object-cover"
                                        priority
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        quality={85}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20" />
                                </div>

                                {/* Content Half */}
                                <div className="p-8 md:p-16 flex flex-col justify-center bg-black/40 backdrop-blur-sm border-l border-white/5">
                                    {(() => {
                                        const HighlightIcon = highlights[activeIndex].icon;
                                        return <HighlightIcon className="w-12 h-12 text-hc-sand mb-8" strokeWidth={1.5} />;
                                    })()}
                                    <h3 className="text-3xl md:text-4xl font-serif mb-6 text-white">{highlights[activeIndex].title}</h3>
                                    <p className="text-white font-light leading-relaxed text-lg max-w-md">
                                        {highlights[activeIndex].description}
                                    </p>
                                    
                                    {/* Slide Indicators */}
                                    <div className="flex gap-2 mt-12">
                                        {highlights.map((_, i) => (
                                            <div 
                                                key={i}
                                                className={`h-1 transition-all duration-300 rounded-full ${i === activeIndex ? "w-8 bg-hc-sand" : "w-4 bg-white/20"}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-32 relative overflow-hidden bg-black border-t border-white/5">
                <div className="container mx-auto px-4 md:px-12 relative z-10 text-center">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="h-px w-8 bg-hc-sand" />
                        <span className="text-hc-sand uppercase tracking-[0.2em] text-xs font-bold font-sans">Afrikulture Doha 2026</span>
                        <span className="h-px w-8 bg-hc-sand" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-serif mb-6 max-w-4xl mx-auto tracking-tight">
                        Be Part of the <br />
                        <span className="italic text-hc-sand font-normal">Next Chapter</span>
                    </h2>
                    <p className="text-white font-light font-sans max-w-xl mx-auto mb-12">
                        Register your interest to receive updates on Afrikulture Doha 2026 — tickets, artist announcements, partnerships, and more.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-3 px-12 py-5 bg-hc-sand text-hc-black font-bold tracking-widest uppercase hover:bg-white transition-all rounded-sm group shadow-2xl font-sans"
                        >
                            Register Interest
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                        <a
                            href="https://instagram.com/afrikulturefestival"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-12 py-5 border border-white/20 text-white font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all rounded-sm group font-sans"
                        >
                            Follow @afrikulturefestival
                            <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Hidden Preloader for Carousel Images to eliminate lag during transitions */}
            <div className="hidden pointer-events-none w-0 h-0 overflow-hidden">
                {highlights.map((h, i) => (
                    <Image 
                        key={i}
                        src={h.image}
                        alt="Preload"
                        width={10}
                        height={10}
                        priority
                    />
                ))}
            </div>

            <Footer />
        </main>
    );
}
