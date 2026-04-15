import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowUpRight, Globe, Users, TrendingUp, Award, Zap, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Sponsorship & Partnerships | Heritage & Culture Africa",
    description: "Partner with Heritage & Culture Africa to elevate the African narrative and reach a global audience through premium cultural experiences.",
};

const stats = [
    { label: "Global Impressions", value: "1.2M+", icon: Globe },
    { label: "Operating Markets", value: "10+", icon: ShieldCheck },
    { label: "Flagship Events", value: "5+", icon: Zap },
    { label: "Audience Trust", value: "100%", icon: Users },
];

const tiers = [
    {
        name: "Visionary Partner",
        level: "Level 01 — Headline",
        description: "The highest level of integration. Reserved for brand partners who wish to lead the cultural conversation and receive exclusive naming rights across our flagship festivals.",
        features: ["Naming Rights for Afrikulture", "Global Media Integration", "VIP Hospitality Suites", "Category Exclusivity"],
        color: "text-hc-sand"
    },
    {
        name: "Cultural Steward",
        level: "Level 02 — Programmatic",
        description: "Deeply integrated partnerships focused on specific programmatic areas like the NYMF or the Artisan Village.",
        features: ["Bespoke Brand Activations", "Digital Content Series", "Speaking Opportunities", "Product Integration"],
        color: "text-white"
    },
    {
        name: "Heritage Founder",
        level: "Level 03 — Strategic",
        description: "For institutions and organizations focused on the impact, sustainability, and educational aspects of our mission.",
        features: ["Impact Reporting", "Community Engagement", "Branding at Local Venues", "Employee Volunteering"],
        color: "text-gray-400"
    }
];

const partners = [
    "GIZ", "UNDP", "Flytime", "UK Aid",
    "Visa", "Bournvita", "Samsung", "Burger King", "Adidas",
];

export default function SponsorshipPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            {/* ── HERO ── */}
            <section className="relative h-[80vh] w-full overflow-hidden flex items-center">
                <Image
                    src="/african-narrative.jpg"
                    alt="Invest in the African Narrative"
                    fill
                    className="object-cover opacity-60"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
                <div className="container mx-auto px-4 md:px-12 relative z-10">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-8 bg-hc-sand" />
                            <span className="text-hc-sand uppercase tracking-[0.2em] text-xs font-bold font-sans">Institutional & Corporate Partnerships</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-[1.05] tracking-tight">
                            Invest in the <br />
                            <span className="italic text-hc-sand font-normal">African Narrative</span>
                        </h1>
                        <p className="text-xl text-white font-light leading-relaxed font-sans max-w-xl">
                            Join Heritage & Culture Africa in positioning African heritage as a global economic and tourism driver.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── STATS / IMPACT ── */}
            <section className="py-24 bg-[#050505] border-b border-white/5">
                <div className="container mx-auto px-4 md:px-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center group">
                                <stat.icon className="w-8 h-8 text-hc-sand mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                                <div className="text-4xl md:text-5xl font-serif font-bold mb-2 tabular-nums">{stat.value}</div>
                                <div className="text-xs uppercase tracking-[0.2em] text-white font-bold font-sans">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── THE PROPOSITION ── */}
            <section className="py-32">
                <div className="container mx-auto px-4 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-px w-8 bg-hc-sand" />
                                <span className="text-hc-sand uppercase tracking-[0.2em] text-xs font-bold font-sans">Why Partner With Us?</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif mb-10 leading-tight">
                                Reach the <span className="italic text-hc-sand font-normal">Next Generation</span> of Global Cultural Travelers
                            </h2>
                            <div className="space-y-12">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full border border-hc-sand/30 flex items-center justify-center shrink-0">
                                        <Award className="w-5 h-5 text-hc-sand" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-serif font-medium mb-3">Unmatched Cultural Authority</h4>
                                        <p className="text-white font-light leading-relaxed font-sans">
                                            We are the bridge between deep-rooted traditions and modern global formats. Our activations are celebrated for their authenticity and premium production quality.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full border border-hc-sand/30 flex items-center justify-center shrink-0">
                                        <Globe className="w-5 h-5 text-hc-sand" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-serif font-medium mb-3">Direct Access to the Diaspora</h4>
                                        <p className="text-white font-light leading-relaxed font-sans">
                                            Our data-driven approach allows brands to engage with the highly influential African diaspora across key markets in Europe, Middle East, and North America.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative aspect-square">
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-hc-sand/10 rounded-full blur-[100px] animate-pulse" />
                            <div className="relative h-full w-full rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1600&auto=format&fit=crop"
                                    alt="Global Reach"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SPONSORSHIP TIERS ── */}
            <section className="py-32 bg-[#050505] border-t border-white/5">
                <div className="container mx-auto px-4 md:px-12">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-serif font-medium mb-6">Partnership <span className="italic text-hc-sand font-normal">Levels</span></h2>
                        <p className="text-white font-sans max-w-xl mx-auto">We design bespoke integration packages tailored to your brand's specific marketing and impact objectives.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {tiers.map((tier, i) => (
                            <div key={i} className="relative group p-10 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/8 transition-all duration-500 hover:-translate-y-2">
                                <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white mb-2 font-sans">{tier.level}</div>
                                <h3 className={cn("text-3xl font-serif font-medium mb-6 transition-colors", tier.color)}>{tier.name}</h3>
                                <p className="text-white text-sm font-light leading-relaxed mb-8 font-sans">
                                    {tier.description}
                                </p>
                                <ul className="space-y-4 mb-10">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm text-white font-sans">
                                            <div className="w-1 h-1 rounded-full bg-hc-sand" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link 
                                    href="/contact" 
                                    className="block text-center py-4 bg-white/10 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-hc-sand hover:text-black transition-all font-sans"
                                >
                                    Inquire Directly
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PREVIOUS PARTNERS ── */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-4 md:px-12 text-center">
                    <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-white mb-12 font-sans tracking-widest uppercase">Trusted By Global Organizations</h3>
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                        {partners.map((p, i) => (
                            <span key={i} className="text-2xl md:text-3xl font-serif font-bold text-white/80">{p}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ── */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-hc-sand/5" />
                <div className="container mx-auto px-4 md:px-12 text-center relative z-10">
                    <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">
                        Let's Shape the Narrative <br />
                        <span className="italic text-hc-sand font-normal">Together</span>
                    </h2>
                    <p className="text-white font-light max-w-xl mx-auto mb-12 font-sans">
                        Reach out to our strategic partnerships team for a tailored proposal and data overview.
                    </p>
                    <Link 
                        href="/contact" 
                        className="inline-flex items-center gap-3 px-12 py-5 bg-hc-sand text-black font-bold tracking-widest uppercase hover:bg-white transition-all rounded-sm group font-sans"
                    >
                        Schedule a Consultation
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
