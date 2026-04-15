"use client";

import { motion } from "framer-motion";
import { ScrollText, Lightbulb, Globe, Sprout } from "lucide-react";

const features = [
    {
        title: "Preserving Heritage",
        description: "Documenting and archiving African traditions, stories, and art for future generations. We believe that our past informs our future, and by capturing these narratives, we ensure they are never lost.",
        icon: ScrollText,
    },
    {
        title: "Innovative Products",
        description: "Creating modern educational tools and lifestyle products inspired by African culture. From tech solutions to artisanal goods, we bridge the gap between tradition and modern utility.",
        icon: Lightbulb,
    },
    {
        title: "Cultural Movement",
        description: "Building a global community that celebrates and advocates for African identity. We foster connections across borders to promote the richness and diversity of African cultural expressions.",
        icon: Globe,
    },
    {
        title: "Future Generations",
        description: "Empowering youth with the knowledge and pride of their rich ancestry. Our programs and initiatives are designed to inspire the next leaders through cultural immersion.",
        icon: Sprout,
    },
];

interface AboutProps {
    isTeaser?: boolean;
}

export default function About({ isTeaser = false }: AboutProps) {

    return (
        <section id="about" className="py-24 md:py-32 bg-black text-white relative scroll-mt-24">
            <div className="container mx-auto px-4 md:px-12">

                {/* Header Section - Hidden in teaser mode */}
                {!isTeaser && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-20 text-center"
                    >
                        <h2 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] max-w-4xl mx-auto text-gray-500">
                            About <span className="text-white">H&C Africa</span>
                        </h2>
                    </motion.div>
                )}

                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:bg-white/10"
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-white/5 rounded-lg">
                                        <feature.icon className="w-8 h-8 text-white stroke-[1.5]" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-serif font-medium leading-tight">
                                        {feature.title}
                                    </h3>
                                </div>

                                <p className="text-white font-light leading-relaxed text-lg">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
