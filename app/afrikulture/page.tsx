import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowUpRight, MapPin, Calendar, Music, Palette, Utensils, Globe, Users, Instagram } from "lucide-react";

export const metadata: Metadata = {
    title: "AfriKulture Doha 2026 | Heritage & Culture Africa",
    description: "AfriKulture Doha 2026 — Heritage & Culture Africa's flagship international cultural activation. A world-class celebration of African heritage in the heart of Doha, Qatar.",
};

const highlights = [
    {
        icon: Music,
        title: "Live Performances",
        description: "From traditional drum ensembles to modern Afrobeats — live performances celebrating the full sonic spectrum of the continent, featuring world-class African artists.",
    },
    {
        icon: Palette,
        title: "Visual Storytelling",
        description: "Curated exhibitions, contemporary galleries, and immersive installations by leading African and diaspora artists sharing their visions of identity, heritage, and innovation.",
    },
    {
        icon: Utensils,
        title: "Culinary Journey",
        description: "A curated pan-African culinary experience featuring authentic regional dishes and modern fusion from world-class chefs. Taste the continent in one place.",
    },
    {
        icon: Globe,
        title: "Cultural Tourism",
        description: "A destination-integrated experience that positions Doha as a crossroads of African and Middle Eastern culture, driving international tourism and cross-continental exchange.",
    },
    {
        icon: Users,
        title: "Community & Diaspora",
        description: "A space for the African diaspora to gather, celebrate, and reconnect — uniting communities across borders through shared cultural pride and creative expression.",
    },
    {
        icon: MapPin,
        title: "Doha, Qatar",
        description: "Hosted in one of the world's most international cities, AfriKulture Doha 2026 brings the African continent to the global stage from the heart of the Middle East.",
    },
];

export default function AfriKulturePage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            {/* ── HERO ── */}
            <section className="relative h-[90vh] w-full overflow-hidden flex items-end pb-20">
                <Image
                    src="https://images.unsplash.com/photo-1516307365426-bea591f05011?q=80&w=2600&auto=format&fit=crop"
                    alt="AfriKulture Festival Doha 2026"
                    fill
                    className="object-cover opacity-40"
                    priority
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
                                    AfriKulture <br />
                                    <span className="italic text-hc-sand font-normal">Doha 2026</span>
                                </h1>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-8 text-sm uppercase tracking-widest text-white/60 font-sans">
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
                            <p className="text-xl text-gray-400 font-light leading-relaxed mb-8 font-sans">
                                AfriKulture Doha represents the flagship international activation of the Heritage & Culture Africa mandate — a world-class, multi-day cultural festival designed to position Africa as a symbol of luxury, creativity, and heritage on a global stage.
                            </p>
                            <p className="text-lg text-gray-500 font-light leading-relaxed font-sans">
                                We believe Africa's culture is not only heritage — it is an exportable global asset capable of generating economic growth, attracting international visitors, and shaping global narratives. AfriKulture Doha is that vision made real.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1200&auto=format&fit=crop" alt="African culture" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="relative aspect-square rounded-xl overflow-hidden">
                                    <Image src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop" alt="Festival atmosphere" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="relative aspect-square rounded-xl overflow-hidden">
                                    <Image src="https://images.unsplash.com/photo-1614289371518-722f2615943d?q=80&w=800&auto=format&fit=crop" alt="African art" fill className="object-cover hover:scale-105 transition-transform duration-700" />
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
                        <p className="text-hc-sand text-xs font-bold tracking-widest uppercase font-sans mb-4">AfriKulture Doha 2026</p>
                        <blockquote className="text-3xl md:text-5xl font-serif italic text-white max-w-2xl leading-tight">
                            "A destination-integrated platform built on proven event frameworks."
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* ── FESTIVAL HIGHLIGHTS ── */}
            <section className="py-24 bg-[#050505]">
                <div className="container mx-auto px-4 md:px-12">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="h-px w-8 bg-hc-sand" />
                        <span className="text-hc-sand uppercase tracking-[0.2em] text-xs font-bold font-sans">The Experience</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif mb-16 leading-tight">
                        Festival <span className="italic text-hc-sand font-normal">Highlights</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {highlights.map((h, i) => (
                            <div key={i} className="group p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-hc-sand/30 hover:-translate-y-1 transition-all duration-500">
                                <h.icon className="w-9 h-9 text-hc-sand mb-6" strokeWidth={1.5} />
                                <h3 className="text-xl font-serif mb-4 text-white">{h.title}</h3>
                                <p className="text-gray-400 font-light leading-relaxed text-sm font-sans">{h.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── IMPACT PILLARS ── */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-4 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                            <Image src="https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?q=80&w=1600&auto=format&fit=crop" alt="Cultural impact" fill className="object-cover" />
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
                                            <p className="text-gray-500 text-sm font-light font-sans leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-32 relative overflow-hidden bg-black border-t border-white/5">
                <div className="container mx-auto px-4 md:px-12 relative z-10 text-center">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="h-px w-8 bg-hc-sand" />
                        <span className="text-hc-sand uppercase tracking-[0.2em] text-xs font-bold font-sans">AfriKulture Doha 2026</span>
                        <span className="h-px w-8 bg-hc-sand" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-serif mb-6 max-w-4xl mx-auto tracking-tight">
                        Be Part of the <br />
                        <span className="italic text-hc-sand font-normal">Next Chapter</span>
                    </h2>
                    <p className="text-gray-500 font-light font-sans max-w-xl mx-auto mb-12">
                        Register your interest to receive updates on AfriKulture Doha 2026 — tickets, artist announcements, partnerships, and more.
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

            <Footer />
        </main>
    );
}
