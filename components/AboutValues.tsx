"use client";

import { motion } from "framer-motion";
import { ScrollText, Lightbulb, Globe, Sprout } from "lucide-react";

const values = [
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

export default function AboutValues() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:bg-white/10"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-white/5 rounded-lg">
                            <value.icon className="w-7 h-7 text-hc-sand stroke-[1.5]" />
                        </div>
                        <h3 className="text-2xl font-serif font-medium leading-tight text-white">
                            {value.title}
                        </h3>
                    </div>

                    <p className="text-white font-light leading-relaxed text-lg font-sans">
                        {value.description}
                    </p>
                </motion.div>
            ))}
        </div>
    );
}
