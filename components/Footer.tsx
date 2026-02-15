"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-12">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8 mb-24">

                    {/* Brand Column */}
                    <div className="lg:w-1/3 space-y-8">
                        <Link href="/" className="block relative w-32 h-12">
                            <Image
                                src="/logo.png"
                                alt="H&C Africa Logo"
                                fill
                                className="object-contain object-left invert brightness-0"
                            />
                        </Link>
                        <p className="text-gray-400 font-light max-w-xs">
                            Preserving Heritage, Inspiring Future.
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 w-full">

                        {/* Column 1 */}
                        <div className="space-y-6">
                            <h4 className="font-medium text-white">Platform</h4>
                            <ul className="space-y-4 text-sm text-gray-500">
                                <li><Link href="/#about" className="hover:text-white transition-colors">About</Link></li>
                                <li><Link href="/#experiences" className="hover:text-white transition-colors">Experiences</Link></li>
                            </ul>
                        </div>



                        {/* Column 3 */}
                        <div className="space-y-6">
                            <h4 className="font-medium text-white">Connect</h4>
                            <ul className="space-y-4 text-sm text-gray-500">
                                <li><Link href="#" className="hover:text-white transition-colors">Instagram</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Twitter / X</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">LinkedIn</Link></li>
                                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Column 4 */}
                        <div className="space-y-6">
                            <h4 className="font-medium text-white">Legal</h4>
                            <ul className="space-y-4 text-sm text-gray-500">
                                <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
                    <p>© 2026 Heritage & Culture Africa. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
