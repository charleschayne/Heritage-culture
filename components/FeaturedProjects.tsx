"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Map as MapIcon, List as ListIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "AfriKulture Festival, Doha",
        location: "Doha, Qatar",
        year: "2024",
        // Original image failed to load, replacing with a similar vibrant festival image
        imageUrl: "https://images.unsplash.com/photo-1516307365426-bea591f05011?q=80&w=2600&auto=format&fit=crop",
        description: "A vibrant celebration of African heritage, bringing art, music, and cuisine to the heart of Doha."
    },
    {
        title: "New Yam Music Festival (NYMF)",
        location: "Enugu, Nigeria",
        year: "2025",
        imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2600&auto=format&fit=crop",
        description: "Blending ancestral Igbo traditions with contemporary music and art in a spectacular harvest celebration."
    },
    {
        title: "The Ministry",
        location: "London, UK",
        year: "2018-present",
        // Original image failed to load, replacing with a creative workspace image
        imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2600&auto=format&fit=crop",
        description: "A pioneering workspace and private members club for the creative industries, housed in a converted Victorian printworks."
    },
];

export default function FeaturedProjects() {
    // We can keep the view state if we want to toggle map eventually, but for now we focus on the list design
    const [view, setView] = useState<"list" | "map">("list");

    const featuredProject = projects[0];
    const sideProjects = projects.slice(1, 4); // Show next 3

    return (
        <section id="experiences" className="py-24 bg-black text-white relative scroll-mt-24">
            <div className="container mx-auto px-4 md:px-12">

                {/* Header */}
                <div className="flex items-center justify-between mb-16">
                    <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight">
                        Featured Experiences
                    </h2>

                    {/* View Toggle (kept minimal) */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => setView("list")}
                            className={cn("p-2 rounded-full border transition-colors", view === "list" ? "bg-white text-black border-white" : "text-gray-400 border-white/20 hover:border-white")}
                        >
                            <ListIcon className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setView("map")}
                            className={cn("p-2 rounded-full border transition-colors", view === "map" ? "bg-white text-black border-white" : "text-gray-400 border-white/20 hover:border-white")}
                        >
                            <MapIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {view === "list" ? (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                        {/* Main Feature - Left Column */}
                        <div className="lg:col-span-7 group cursor-pointer">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg mb-8">
                                <Image
                                    src={featuredProject.imageUrl}
                                    alt={featuredProject.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-4xl md:text-5xl font-serif leading-tight group-hover:text-gray-300 transition-colors">
                                    {featuredProject.title}
                                </h3>
                                <p className="text-xl text-gray-400 font-light max-w-2xl">
                                    {featuredProject.description}
                                </p>
                                <div className="flex gap-4 text-sm text-gray-500 uppercase tracking-widest mt-4">
                                    <span>{featuredProject.location}</span>
                                    <span>•</span>
                                    <span>{featuredProject.year}</span>
                                </div>
                            </div>
                        </div>

                        {/* Side List - Right Column */}
                        <div className="lg:col-span-5 flex flex-col gap-12 border-l border-white/10 lg:pl-12">
                            {sideProjects.map((project, index) => (
                                <div key={index} className="group cursor-pointer flex flex-col gap-6">
                                    <div className="flex items-start justify-between gap-6">
                                        <div className="space-y-3">
                                            <h4 className="text-2xl font-serif font-bold group-hover:text-gray-300 transition-colors">
                                                {project.title}
                                            </h4>
                                            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                                                {project.description}
                                            </p>
                                            <div className="flex gap-3 text-xs text-gray-500 uppercase tracking-widest">
                                                <span>{project.location}</span>
                                            </div>
                                        </div>

                                        <ArrowUpRight className="w-6 h-6 text-white/50 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                    </div>

                                    {/* Image for context (optional, or we can just keep text like reference) 
                                        Reference image had text first, then maybe image below. 
                                        Let's add a small thumbnail.
                                    */}
                                    <div className="relative aspect-video w-full overflow-hidden rounded-md">
                                        <Image
                                            src={project.imageUrl}
                                            alt={project.title}
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                        />
                                    </div>

                                    {/* Divider unless last */}
                                    {index !== sideProjects.length - 1 && (
                                        <div className="h-px w-full bg-white/10 mt-2" />
                                    )}
                                </div>
                            ))}

                            <Link href="/projects" className="mt-8 inline-flex items-center gap-2 text-white font-bold tracking-widest uppercase text-sm hover:text-gray-300 transition-colors self-start">
                                View All Projects <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>

                    </div>
                ) : (
                    <div className="h-[600px] w-full bg-white/5 rounded-lg flex flex-col items-center justify-center border border-white/10">
                        <MapIcon className="w-12 h-12 text-white/20 mb-4" />
                        <p className="text-gray-500 font-medium">Map View Visualization</p>
                    </div>
                )}

            </div>
        </section>
    );
}
