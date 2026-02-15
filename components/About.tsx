"use client";

import { motion } from "framer-motion";
import { ArrowRight, ScrollText, Lightbulb, Globe, Sprout } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Preserving Heritage",
        description: "Documenting and archiving African traditions, stories, and art for future generations.",
        icon: ScrollText,
    },
    {
        title: "Innovative Products",
        description: "Creating modern educational tools and lifestyle products inspired by African culture.",
        icon: Lightbulb,
    },
    {
        title: "Cultural Movement",
        description: "Building a global community that celebrates and advocates for African identity.",
        icon: Globe,
    },
    {
        title: "Future Generations",
        description: "Empowering youth with the knowledge and pride of their rich ancestry.",
        icon: Sprout,
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 md:py-32 bg-black text-white relative scroll-mt-24">
            <div className="container mx-auto px-4 md:px-12">

                {/* Header Section */}
                <div className="mb-20">
                    <h2 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] max-w-4xl text-gray-500">
                        About <span className="text-white">H&C Africa</span>
                    </h2>
                </div>

                {/* List/Table Layout */}
                <div className="border-t border-white/10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative border-b border-white/10 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg"
                        >
                            {/* Left: Icon/Color Box & Title */}
                            <div className="flex items-center gap-6 md:w-1/3">
                                <feature.icon className="w-12 h-12 text-white stroke-[1] opacity-80 group-hover:opacity-100 transition-opacity" />
                                <h3 className="text-2xl md:text-3xl font-serif font-medium">
                                    {feature.title}
                                </h3>
                            </div>

                            {/* Middle: Description */}
                            <div className="md:w-1/3">
                                <p className="text-gray-400 font-light leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Right: Action / Status Pill */}
                            <div className="md:w-auto flex justify-end">
                                <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 text-sm font-medium hover:bg-white hover:text-black transition-all group-hover:border-white">
                                    Learn More
                                </button>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
