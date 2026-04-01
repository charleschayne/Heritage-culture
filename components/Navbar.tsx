"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
        name: "Experiences", 
        href: "/#experiences",
        dropdown: [
            { name: "AfriKulture", href: "/afrikulture" },
            { name: "NYMF", href: "https://nymf.africa", isExternal: true },
        ]
    },
];

interface NavbarProps {
    customLogo?: string;
}

export default function Navbar({ customLogo }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navBackgroundClass = isOpen
        ? "bg-black border-white/10"
        : scrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm border-black/5"
        : "bg-transparent border-transparent";

    const textColorClass = (scrolled && !isOpen) ? "text-hc-black" : "text-white";
    const linkColorClass = (scrolled && !isOpen)
        ? "text-hc-black/80 hover:text-hc-black"
        : "text-white/90 hover:text-white";

    const logoClass = scrolled ? "object-contain h-10 w-auto" : "object-contain h-10 w-auto invert brightness-0";

    const buttonClass = scrolled
        ? "bg-hc-black text-white hover:bg-gray-800"
        : "bg-white text-hc-black hover:bg-gray-200";

    return (
        <nav className={cn("fixed top-0 w-full z-50 transition-all duration-300 border-b py-4", navBackgroundClass, scrolled ? "py-3" : "py-4")}>
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50">
                    <Image 
                        src={customLogo || "/logo.png"} 
                        alt={customLogo ? "AfriKulture Logo" : "H&C Africa Logo"} 
                        width={120} 
                        height={40} 
                        className={cn("transition-all duration-300", logoClass)} 
                        priority 
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <div 
                            key={link.name} 
                            className="relative py-2"
                            onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                            onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
                        >
                            {link.dropdown ? (
                                <div className={cn("flex items-center gap-1 transition-colors text-xs font-bold tracking-[0.15em] uppercase font-sans cursor-pointer tabular-nums", linkColorClass)}>
                                    {link.name}
                                    <ChevronDown className={cn("w-3 h-3 transition-transform", activeDropdown === link.name ? "rotate-180" : "")} />
                                </div>
                            ) : (
                                <Link href={link.href} className={cn("transition-colors text-xs font-bold tracking-[0.15em] uppercase font-sans", linkColorClass)}>
                                    {link.name}
                                </Link>
                            )}

                            {link.dropdown && (
                                <AnimatePresence>
                                    {activeDropdown === link.name && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 w-48 bg-black shadow-xl rounded-md border border-white/10 py-2 mt-2 overflow-hidden"
                                        >
                                            {link.dropdown.map((sub) => (
                                                <Link 
                                                    key={sub.name} 
                                                    href={sub.href} 
                                                    target={sub.isExternal ? "_blank" : undefined}
                                                    className="block px-4 py-3 text-[10px] font-bold tracking-widest uppercase text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-6">
                    <Link href="/contact" className={cn("px-6 py-3 rounded-sm text-xs font-bold tracking-widest uppercase transition-colors flex items-center gap-2", buttonClass)}>
                        Contact Us
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className={cn("lg:hidden z-50", textColorClass)} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute top-full left-0 w-full bg-black z-40 border-b border-white/10 overflow-hidden shadow-xl lg:hidden"
                        >
                            <div className="flex flex-col gap-4 p-8">
                                {navLinks.map((link) => (
                                    <div key={link.name} className="flex flex-col gap-2">
                                        {link.dropdown ? (
                                            <div className="flex flex-col gap-2">
                                                <span className="text-[10px] font-bold tracking-widest uppercase text-white/40 mb-1 font-sans">{link.name}</span>
                                                {link.dropdown.map((sub) => (
                                                    <Link 
                                                        key={sub.name} 
                                                        href={sub.href} 
                                                        target={sub.isExternal ? "_blank" : undefined}
                                                        className="text-lg text-white font-semibold hover:text-hc-sand transition-colors py-1 font-sans" 
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        ) : (
                                            <Link 
                                                href={link.href} 
                                                className="text-xl text-white font-bold hover:text-hc-sand transition-colors py-2 font-sans" 
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                                <div className="pt-4 border-t border-white/10 mt-2">
                                    <Link 
                                        href="/contact" 
                                        className="bg-white text-hc-black px-8 py-4 rounded-sm text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2 font-sans" 
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Contact Us
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
