"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-12 pt-40 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-12 tracking-tight">Cookie <span className="text-hc-sand italic">Policy</span></h1>
          
          <div className="max-w-4xl space-y-12 text-gray-400 font-light leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl text-white font-serif mb-4">1. What are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you visit a website. They are used to enhance your experience, remember your preferences, and provide analytical data to website owners. In compliance with the **General Application and Implementation Directive (GAID) 2025** of Nigeria, we provide this clear disclosure of our cookie usage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white font-serif mb-4">2. Types of Cookies We Use</h2>
              <p className="mb-4">
                We use the following categories of cookies to provide a seamless experience on our platform:
              </p>
              <ul className="space-y-6">
                <li className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-6 border-b border-white/10">
                  <span className="text-white font-bold uppercase text-xs tracking-widest mt-1">Essential</span>
                  <span className="md:col-span-3 text-sm font-light">Necessary for the basic functionality of the platform. These ensure core features like page navigation and security work as intended and cannot be disabled.</span>
                </li>
                <li className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-6 border-b border-white/10">
                  <span className="text-white font-bold uppercase text-xs tracking-widest mt-1">Performance</span>
                  <span className="md:col-span-3 text-sm font-light">Help us understand how users interact with our site by collecting and reporting information anonymously. This allows us to improve the overall cultural experience we offer.</span>
                </li>
                <li className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <span className="text-white font-bold uppercase text-xs tracking-widest mt-1">Functional</span>
                  <span className="md:col-span-3 text-sm font-light">Allow the platform to remember choices you make (such as display preferences) and provide enhanced, more personal features suited to your interests.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white font-serif mb-4">3. Consent & Control</h2>
              <p>
                We require your opt-in consent for non-essential cookies. You can update your preferences at any time through our on-site settings or by managing your browser's cookie configuration. Please note that disabling certain cookies may impact the quality of your experience on our platform.
              </p>
            </section>

            <section className="pt-12 border-t border-white/10">
              <p className="text-sm text-gray-500 italic text-center">Last Updated: March 31, 2026</p>
            </section>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </main>
  );
}
