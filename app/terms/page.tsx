"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-12 pt-40 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-12 tracking-tight">Terms of <span className="text-hc-sand italic">Service</span></h1>
          
          <div className="max-w-4xl space-y-12 text-gray-400 font-light leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl text-white font-serif mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using the Heritage & Culture Africa platform, you agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you and Heritage & Culture Africa, governed by the laws of the **Federal Republic of Nigeria**, including the **Federal Competition and Consumer Protection Act (FCCPA) 2018**.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white font-serif mb-4">2. Governing Law & Jurisdiction</h2>
              <p className="mb-4">
                These Terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. 
              </p>
              <div className="p-6 bg-hc-sand/5 rounded-xl border border-hc-sand/20">
                <p className="text-hc-sand font-medium">
                  IMPORTANT: Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of the Federal Republic of Nigeria.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl text-white font-serif mb-4">3. Consumer Protection Rights</h2>
              <p className="mb-4">
                In compliance with the FCCPA 2018, Heritage & Culture Africa respects the mandatory rights of consumers in Nigeria.
              </p>
              <ul className="space-y-4 border-l border-hc-sand/20 pl-6">
                <li><strong className="text-white">Transparency:</strong> All contractual terms are presented in clear, plain, and understandable language.</li>
                <li><strong className="text-white">Right to Redress:</strong> Consumers have the right to seek redress for any grievances or unfair trade practices through our support channels or the Federal Competition and Consumer Protection Commission (FCCPC).</li>
                <li><strong className="text-white">Fair Dealing:</strong> Heritage & Culture Africa ensures that all business practices are conducted fairly and ethically.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white font-serif mb-4">4. Intellectual Property</h2>
              <p>
                The content, trademarks, and heritage materials on this platform are protected under the Copyright Act and other Nigerian intellectual property laws. Unauthorized use or reproduction is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white font-serif mb-4">5. User Conduct</h2>
              <p>
                Users agree not to use the platform for any unlawful purpose or in any way that violates the cultural integrity of the heritage shared on this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white font-serif mb-4">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by Nigerian law, Heritage & Culture Africa shall not be liable for any indirect, incidental, or consequential damages. This clause does not exclude liability for gross negligence or statutory breaches as prohibited by the FCCPA.
              </p>
            </section>

            <section className="pt-12 border-t border-white/10">
              <p className="text-sm text-gray-500 italic">Last Modified: March 31, 2026</p>
            </section>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </main>
  );
}
