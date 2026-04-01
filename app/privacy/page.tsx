"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-12 pt-40 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-12 tracking-tight">Privacy <span className="text-hc-sand italic">Policy</span></h1>
          
          <div className="max-w-4xl space-y-12 text-gray-400 font-light leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl text-white font-serif mb-4">1. Introduction</h2>
              <p>
                Heritage & Culture Africa ("we", "us", or "our") is committed to protecting the privacy and personal data of our users in compliance with the **Nigeria Data Protection Act (NDPA) 2023**. This Privacy Policy explains how we collect, use, and safeguard your information when you interact with our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white font-serif mb-4">2. Lawful Basis for Processing</h2>
              <p className="mb-4">
                We process personal data based on the following lawful grounds established under Nigerian law:
              </p>
              <ul className="space-y-4 border-l border-hc-sand/20 pl-6">
                <li><strong className="text-white">Consent:</strong> Where you have provided explicit permission for specific processing activities.</li>
                <li><strong className="text-white">Contractual Necessity:</strong> Where processing is required to fulfill our obligations under a contract with you.</li>
                <li><strong className="text-white">Legal Obligation:</strong> Where processing is necessary to comply with relevant laws in the Federal Republic of Nigeria.</li>
                <li><strong className="text-white">Legitimate Interests:</strong> For our internal business purposes, provided they do not override your fundamental privacy rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white font-serif mb-4">3. Data Subject Rights</h2>
              <p className="mb-4">
                As a data subject in Nigeria, you are entitled to specific rights under the NDPA 2023:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-hc-sand font-bold mb-2 uppercase text-xs tracking-widest">Access & Portability</h4>
                  <p className="text-sm">You have the right to request a copy of your data and, where applicable, have it transferred to another controller.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-hc-sand font-bold mb-2 uppercase text-xs tracking-widest">Rectification & Deletion</h4>
                  <p className="text-sm">You can request the correction of inaccurate data or the deletion of your data when it is no longer required.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-hc-sand font-bold mb-2 uppercase text-xs tracking-widest">Objection</h4>
                  <p className="text-sm">You may object to the processing of your data for direct marketing or automated decision-making.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-hc-sand font-bold mb-2 uppercase text-xs tracking-widest">Withdrawal</h4>
                  <p className="text-sm">You can withdraw your consent at any time for any processing activity based on consent.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl text-white font-serif mb-4">4. Data Retention & Security</h2>
              <p>
                We employ industry-standard technical and organizational measures to protect your personal data against unauthorized access, loss, or alteration. We retain data only for the duration necessary to satisfy the purpose of collection or as mandated by Nigerian law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white font-serif mb-4">5. Regulatory Oversight</h2>
              <p>
                Complaints regarding data privacy can be directed to our Data Protection Officer or escalated to the **Nigeria Data Protection Commission (NDPC)**.
              </p>
            </section>

            <section className="pt-12 border-t border-white/10">
              <p className="text-sm text-gray-500 italic">Effective Date: March 31, 2026</p>
            </section>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </main>
  );
}
