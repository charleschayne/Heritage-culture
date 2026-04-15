import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowUpRight, MapPin, Users, Globe, TrendingUp } from "lucide-react";
import AboutValues from "@/components/AboutValues";

export const metadata: Metadata = {
  title: "About | Heritage & Culture Africa",
  description: "Heritage & Culture Africa is a cultural organization created to promote, protect and globalize African heritage through experiences, festivals, storytelling, and tourism.",
};

const teamEvents = [
  "Essence Fest — United States",
  "Afronation — Portugal",
  "Foodies Festival — United Kingdom",
  "Rema Live at The O2 — London",
  "Omah Lay Live in London",
  "Flytime Concert Series — Nigeria",
];

const partners = [
  "GIZ", "UNDP", "Flytime", "UK Aid",
  "Visa", "Bournvita", "Samsung", "Burger King", "Adidas",
];

const pillars = [
  { icon: Globe, label: "Activate International Tourism" },
  { icon: TrendingUp, label: "Elevate Creative Industries" },
  { icon: Users, label: "Facilitate Cross-Continental Exchange" },
  { icon: MapPin, label: "Position Africa as a Premium Cultural Brand" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative h-[90vh] w-full overflow-hidden flex items-end pb-20">
        <Image
          src="/african-narrative.jpg"
          alt="Heritage & Culture Africa"
          fill
          className="object-cover opacity-50"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-hc-sand" />
            <span className="text-hc-sand uppercase tracking-[0.2em] text-xs font-bold font-sans">The Visionary Company Behind Afrikulture</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-[1.05] tracking-tight max-w-4xl">
            Heritage <span className="italic text-hc-sand font-normal">&</span><br />Culture Africa
          </h1>
          <p className="text-xl text-white font-light max-w-2xl leading-relaxed font-sans">
            A cultural organization created to promote, protect and globalize African heritage
            through experiences, festivals, storytelling, and tourism.
          </p>
        </div>
      </section>

      {/* ── WHAT WE BELIEVE ── */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-hc-sand" />
                <span className="text-hc-sand uppercase tracking-[0.2em] text-xs font-bold font-sans">Who We Are</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Africa's Culture is One of the Greatest{" "}
                <span className="italic text-hc-sand font-normal">Resources</span> of This Generation
              </h2>
              <p className="text-lg text-white font-light leading-relaxed mb-6 font-sans">
                We believe Africa's culture is a global asset capable of inspiring economies, attracting tourism, and shaping narratives. Heritage & Culture Africa is a cultural development and event platform dedicated to positioning African culture as a global economic and tourism driver.
              </p>
              <p className="text-lg text-white font-light leading-relaxed font-sans">
                We design and steward large-scale cultural experiences that activate international tourism, elevate creative industries, facilitate cross-continental exchange, and position Africa as a premium cultural brand.
              </p>
            </div>
            {/* Image collage */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image src="/wwa1.png" alt="Cultural Legacy" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" priority />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image src="/wwa2.jpg" alt="Creative Excellence" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image src="/wwa3.jpg" alt="Authentic Storytelling" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image src="/wwa4.png" alt="Global Impact" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="py-24 bg-[#050505] border-b border-white/5">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">

            {/* Vision */}
            <div className="relative overflow-hidden rounded-2xl p-12 border border-white/10 bg-white/5 group hover:bg-white/8 transition-colors">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-10">
                <Image src="/cd12.jpg" alt="Our Vision" fill className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-hc-sand text-xs font-bold tracking-widest uppercase font-sans">Our Vision</span>
                </div>
              </div>
              <h3 className="text-3xl font-serif mb-6 leading-tight">
                Position African Culture on the <span className="italic text-hc-sand font-normal">World Stage</span>
              </h3>
              <p className="text-white font-light leading-relaxed font-sans">
                To create world-class experiences that celebrate our roots, export our creativity, and unite Africans everywhere — making African culture a defining force in the global conversation.
              </p>
            </div>

            {/* Mission */}
            <div className="relative overflow-hidden rounded-2xl p-12 border border-white/10 bg-white/5 group hover:bg-white/8 transition-colors">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-10">
                <Image src="/visual-storytelling.jpg" alt="Our Mission" fill className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-hc-sand text-xs font-bold tracking-widest uppercase font-sans">Our Mission</span>
                </div>
              </div>
              <h3 className="text-3xl font-serif mb-6 leading-tight">
                Tell Africa's Story <span className="italic text-hc-sand font-normal">Authentically</span>
              </h3>
              <p className="text-white font-light leading-relaxed font-sans">
                To connect cultures globally, empower creative industries, and create iconic festivals that drive tourism — positioning Africa as a symbol of luxury, excellence, and heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORM PILLARS ── */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-hc-sand" />
            <span className="text-hc-sand uppercase tracking-[0.2em] text-xs font-bold font-sans">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-16 max-w-xl leading-tight">
            Platform <span className="italic text-hc-sand font-normal">Pillars</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 hover:border-hc-sand/30 hover:-translate-y-1 transition-all duration-300">
                <p.icon className="w-8 h-8 text-hc-sand mb-5" strokeWidth={1.5} />
                <p className="text-lg font-serif leading-snug text-white">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH QUOTE BANNER ── */}
      <section className="relative h-[50vh] w-full overflow-hidden text-white">
        <Image src="/afculture12.jpg" alt="Africa cultural moment" fill className="object-cover opacity-50" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-12">
            <blockquote className="text-3xl md:text-5xl font-serif italic text-white max-w-2xl leading-tight">
              "Africa's culture is not only heritage — it is an exportable global asset."
            </blockquote>
            <p className="mt-4 text-hc-sand font-sans text-sm tracking-widest uppercase font-bold">— Heritage & Culture Africa</p>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-hc-sand" />
            <span className="text-hc-sand uppercase tracking-[0.2em] text-xs font-bold font-sans">What We Stand For</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-16 max-w-xl leading-tight">
            Core <span className="italic text-hc-sand font-normal">Values</span>
          </h2>
          <AboutValues />
        </div>
      </section>

      {/* ── TEAM EXPERIENCE ── */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-hc-sand" />
                <span className="text-hc-sand uppercase tracking-[0.2em] text-xs font-bold font-sans">Our Team</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Cross-Border <span className="italic text-hc-sand font-normal">Delivery</span>
              </h2>
              <p className="text-lg text-white font-light leading-relaxed mb-8 font-sans">
                The leadership and core team behind Heritage & Culture Africa bring cross-continental experience in cultural programming, large-scale live events, and strategic partnerships across the United States, United Kingdom, Switzerland, and West Africa.
              </p>
              <p className="text-white font-light leading-relaxed font-sans mb-10">
                This experience includes large venue production environments, international artist logistics, ticketed concert operations, crowd and access management structures, and multi-market audience engagement.
              </p>

              {/* Event list */}
              <div className="space-y-3">
                <p className="text-xs font-bold tracking-widest uppercase text-white font-sans mb-4">Live Event Experience</p>
                {teamEvents.map((event, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 border-b border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-hc-sand shrink-0" />
                    <span className="text-white/80 font-sans text-sm">{event}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1600&auto=format&fit=crop"
                alt="Live event experience"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white font-serif text-2xl font-bold mb-1">World-Class Production</p>
                <p className="text-white text-xs uppercase tracking-widest font-sans">Proven across four continents</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-hc-sand" />
              <span className="text-hc-sand uppercase tracking-[0.2em] text-xs font-bold font-sans">Institutional & Corporate Engagement</span>
              <span className="h-px w-8 bg-hc-sand" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Organizations We've <br /><span className="italic text-hc-sand font-normal">Worked With</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 max-w-3xl mx-auto">
            {partners.map((partner, i) => (
              <div key={i} className="flex items-center justify-center px-4 py-5 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 hover:border-hc-sand/30 transition-all duration-300">
                <span className="text-white/70 font-bold text-sm tracking-wider font-sans text-center">{partner}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-white text-sm font-sans mt-10 max-w-xl mx-auto">
            These engagements have equipped our team to align with multinational brands, engage institutional stakeholders, and deliver commercially integrated programming.
          </p>
        </div>
      </section>

      {/* ── MOMENTS IMAGE GRID ── */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-12">
          <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">
            Moments That <span className="italic text-hc-sand font-normal">Matter</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: "/NYMF Drummer guys.jpg", label: "New Yam Music Festival", sub: "Enugu, Nigeria" },
              { src: "/cd12.jpg", label: "Cultural Expression", sub: "Across the Diaspora" },
              { src: "/Qatar Cultural Center.jpg", label: "Afrikulture Festival", sub: "Doha, Qatar — 2026" },
            ].map((item, i) => (
              <div key={i} className="group relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image src={item.src} alt={item.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-serif text-xl font-bold mb-1">{item.label}</p>
                  <p className="text-white text-xs uppercase tracking-widest font-sans">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 md:px-12 text-center">
          <h2 className="text-5xl md:text-7xl font-serif mb-10 tracking-tight">
            Be Part of the <br />
            <span className="italic text-hc-sand font-normal">Movement</span>
          </h2>
          <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 bg-hc-sand text-black font-bold tracking-widest uppercase hover:bg-white transition-all rounded-sm group shadow-2xl font-sans">
            Get in Touch
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
