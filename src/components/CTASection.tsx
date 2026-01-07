"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Sparkles as SparkleIcon } from "lucide-react";

const Sparkle = ({ size, top, left, right, delay }: { size: number; top: string; left?: string; right?: string; delay: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay }}
        className="absolute pointer-events-none text-orange-400"
        style={{ top, left, right }}
    >
        <SparkleIcon size={size} fill="currentColor" />
    </motion.div>
);

export const CTASection = () => {
    return (
        <section id="download" className="py-40 relative overflow-hidden bg-transparent">
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-black text-gray-900 mb-16 tracking-tight"
                >
                    Start Your Journey Today.
                </motion.h2>

                <div className="relative inline-block group">
                    {/* Concentric Rings */}
                    {[1, 2, 3, 4].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.1, 0.25, 0.1]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: "easeInOut"
                            }}
                            className="absolute inset-0 rounded-full border border-orange-300/30 pointer-events-none"
                            style={{
                                margin: `-${i * 20}px`,
                                boxShadow: i === 1 ? '0 0 40px rgba(249, 115, 22, 0.15)' : 'none'
                            }}
                        />
                    ))}

                    {/* Sparkles around the button */}
                    <Sparkle size={20} top="-20px" left="-30px" delay={0} />
                    <Sparkle size={14} top="40px" left="-50px" delay={1} />
                    <Sparkle size={16} top="-10px" right="-40px" delay={0.5} />
                    <Sparkle size={12} top="50px" right="-30px" delay={1.5} />

                    {/* Orange CTA Button */}
                    <motion.a
                        href="/LuminaCALV1.apk"
                        download="LuminaCALV1.apk"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative"
                    >
                        <Button
                            size="lg"
                            className="relative z-10 px-12 h-16 text-lg rounded-full font-bold bg-gradient-to-b from-orange-400 to-orange-500 text-white shadow-[0_8px_32px_rgba(249,115,22,0.35)] border border-orange-300/30 overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
                            Download Beta v1 (APK)
                        </Button>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};
