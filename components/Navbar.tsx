"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experiences", href: "#experiences" },
    { name: "Talent", href: "#talent" },
    { name: "Partnerships", href: "#partnerships" },
    { name: "News", href: "#news" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Derived classes based on scroll state
    const navBackgroundClass = scrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm border-black/5"
        : "bg-transparent border-transparent";

    // Text colors: Black when scrolled, White when transparent (on Hero)
    const textColorClass = scrolled ? "text-hc-black" : "text-white";
    const linkColorClass = scrolled
        ? "text-hc-black/80 hover:text-hc-black"
        : "text-white/90 hover:text-white";

    // Logo styling: Invert to white when transparent (if logo is black), Normal when scrolled
    // Assuming logo.png is black text/graphics. 
    // when !scrolled (transparent on dark video), we need it white -> invert
    const logoClass = scrolled ? "object-contain h-10 w-auto" : "object-contain h-10 w-auto invert brightness-0";

    // Button styling
    const buttonClass = scrolled
        ? "bg-hc-black text-white hover:bg-gray-800"
        : "bg-white text-hc-black hover:bg-gray-200";

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b py-4",
                navBackgroundClass,
                scrolled ? "py-3" : "py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50">
                    <div className="relative flex items-center">
                        <Image
                            src="/logo.png"
                            alt="H&C Africa Logo"
                            width={120}
                            height={40}
                            className={cn("transition-all duration-300", logoClass)}
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "transition-colors text-xs font-bold tracking-[0.15em] uppercase font-sans",
                                linkColorClass
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-6">

                    <Link
                        href="/contact"
                        className={cn(
                            "px-6 py-3 rounded-sm text-xs font-bold tracking-widest uppercase transition-colors flex items-center gap-2",
                            buttonClass
                        )}
                    >
                        Contact Us
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={cn("lg:hidden z-50", textColorClass)}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Menu Overlay */}
                <div
                    className={cn(
                        "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-opacity duration-300",
                        isOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col gap-8 text-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-2xl text-hc-black font-bold tracking-widest uppercase hover:text-hc-sand transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-6 mt-8 items-center">

                            <Link
                                href="/contact"
                                className="bg-hc-black text-white px-8 py-3 rounded-sm text-sm font-bold tracking-widest uppercase w-full max-w-xs flex items-center justify-center gap-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Us
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
