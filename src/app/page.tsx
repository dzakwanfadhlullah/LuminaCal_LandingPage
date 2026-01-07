"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeatureScanner } from "@/components/FeatureScanner";
import { BentoDashboard } from "@/components/BentoDashboard";
import { PrivacySection } from "@/components/PrivacySection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { PremiumBackground } from "@/components/ui/PremiumBackground";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative min-h-screen selection:bg-orange-500/30 overflow-x-hidden">
      {/* Premium Background with 3D Glass Spheres */}
      <PremiumBackground />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 z-[2000] origin-left"
        style={{ scaleX }}
      />

      <div className="relative">
        <Navbar />

        <div className="relative z-10">
          <Hero />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <FeatureScanner />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <BentoDashboard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <PrivacySection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <CTASection />
          </motion.div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
