"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const values = [
    {
        id: "authenticity",
        title: "Authenticity",
        subtitle: "Rooted in heritage",
        description: "We stay true to African heritage while presenting it in ways that feel authentically relevant to a global audience.",
        color: "bg-[#A0522D]", // Terracotta
        shape: "rounded-full", // Circle
    },
    {
        id: "profitability",
        title: "Profitability",
        subtitle: "Purpose-driven ventures",
        description: "Building sustainable, revenue-generating ventures that leave a lasting cultural and social impact.",
        color: "bg-[#242B62]", // Indigo
        shape: "rounded-full rounded-tl-none", // Teardrop/Leaf
    },
    {
        id: "relevance",
        title: "Global Relevance",
        subtitle: "Beyond borders",
        description: "Positioning African culture as not just regional, but a competitive, celebrated global export.",
        color: "bg-[#1C651B]", // Green
        shape: "rounded-none rotate-45 scale-75", // Diamond (simulated)
    },
    {
        id: "innovation",
        title: "Innovation",
        subtitle: "Future forward",
        description: "Reimagining culture through modern formats, technology, and fresh expressions.",
        color: "bg-[#CBB89D]", // Sand
        shape: "rounded-t-full", // Semi-circle/Arch
    },
];

export default function BrandValues() {
    return (
        <section className="py-24 md:py-32 bg-[#050505] text-white relative overflow-hidden">
            {/* Subtle Gradient Noise Texture could be added here */}

            <div className="container mx-auto px-4 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

                    {/* Left Column - Header */}
                    <div className="lg:col-span-5 relative">
                        <div className="lg:sticky lg:top-32">
                            <h4 className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-6">
                                // Our Ethos
                            </h4>
                            <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.9] tracking-tight text-white mb-8">
                                Our Core <br />
                                <span className="text-white/80">Values</span>
                            </h2>
                            <p className="text-gray-400 max-w-sm leading-relaxed text-lg">
                                Guiding principles that define how we preserve the past while building the future.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Grid */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative group group-hover:bg-white/5 transition-colors duration-500 rounded-xl p-4 -m-4"
                                >
                                    {/* Top Line */}
                                    <div className="w-full h-px bg-white/10 mb-8" />

                                    {/* Icon & Title */}
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={cn("w-8 h-8 flex-shrink-0 mt-1", value.color, value.shape)} />
                                        <h3 className="text-3xl font-serif font-medium text-white">
                                            {value.title}
                                        </h3>
                                    </div>

                                    {/* Subtitle */}
                                    <h4 className="text-md font-bold text-white/90 mb-4 block">
                                        {value.subtitle}
                                    </h4>

                                    {/* Description */}
                                    <p className="text-gray-400 leading-relaxed text-base font-light">
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
