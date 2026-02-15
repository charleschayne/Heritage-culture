
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    title: string;
    location: string;
    year: string;
    imageUrl: string;
    href?: string;
}

export default function ProjectCard({
    title,
    location,
    year,
    imageUrl,
    href = "#",
}: ProjectCardProps) {
    return (
        <Link href={href} className="group block">
            <div className="relative overflow-hidden mb-4 bg-gray-100 aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white text-black p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <ArrowUpRight className="w-6 h-6" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <h3 className="font-bold text-lg leading-tight group-hover:text-tmg-green transition-colors">
                    {title}
                </h3>
                <p className="text-gray-500 text-xs uppercase tracking-wide">
                    {location}, {year}
                </p>
            </div>
        </Link>
    );
}
