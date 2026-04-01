"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Small delay so it doesn't flash immediately on load
        const timer = setTimeout(() => {
            const consent = localStorage.getItem("hc-cookie-consent");
            if (!consent) {
                setVisible(true);
            }
        }, 1200);
        return () => clearTimeout(timer);
    }, []);

    const accept = () => {
        localStorage.setItem("hc-cookie-consent", "accepted");
        setVisible(false);
    };

    const decline = () => {
        localStorage.setItem("hc-cookie-consent", "declined");
        setVisible(false);
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-2xl"
                >
                    <div className="bg-black border border-white/10 rounded-xl shadow-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                        {/* Icon */}
                        <div className="shrink-0 w-10 h-10 bg-hc-sand/10 rounded-full flex items-center justify-center">
                            <Cookie className="w-5 h-5 text-hc-sand" />
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                            <p className="text-white text-sm font-semibold font-sans mb-1">
                                We use cookies
                            </p>
                            <p className="text-white/50 text-xs font-sans leading-relaxed">
                                We use cookies to personalise content and analyse our traffic. By clicking "Accept", you consent to our{" "}
                                <Link href="/cookies" className="text-hc-sand hover:underline">
                                    Cookie Policy
                                </Link>
                                .
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                            <button
                                onClick={decline}
                                className="flex-1 sm:flex-none px-4 py-2 border border-white/15 text-white/60 hover:text-white hover:border-white/30 text-xs font-bold tracking-widest uppercase rounded-sm transition-colors font-sans"
                            >
                                Decline
                            </button>
                            <button
                                onClick={accept}
                                className="flex-1 sm:flex-none px-5 py-2 bg-hc-sand text-black text-xs font-bold tracking-widest uppercase rounded-sm hover:bg-white transition-colors font-sans"
                            >
                                Accept
                            </button>
                        </div>

                        {/* Close */}
                        <button
                            onClick={decline}
                            className="absolute top-3 right-3 text-white/30 hover:text-white transition-colors sm:hidden"
                            aria-label="Close"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
