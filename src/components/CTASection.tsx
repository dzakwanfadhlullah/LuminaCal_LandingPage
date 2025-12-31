"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Sparkles as SparkleIcon } from "lucide-react";

const Sparkle = ({ size, top, left, right, delay }: { size: number; top: string; left?: string; right?: string; delay: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay }}
        className="absolute pointer-events-none text-magenta-400"
        style={{ top, left, right }}
    >
        <SparkleIcon size={size} fill="currentColor" />
    </motion.div>
);

export const CTASection = () => {
    return (
        <section id="download" className="py-40 relative overflow-hidden bg-transparent">
            {/* Wavy Mesh Background Layer (Simplified SVG) */}
            <div className="absolute bottom-0 left-0 w-full h-[600px] pointer-events-none opacity-30 select-none">
                <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,1000 C200,800 400,900 600,700 C800,500 1000,600 1000,400 L1000,1000 L0,1000 Z"
                        fill="url(#meshGradient)"
                        className="animate-pulse-slow"
                    />
                    {/* Subtle grid lines could be added here if needed */}
                </svg>
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-black text-white mb-16 tracking-tight"
                >
                    Start Your Journey Today.
                </motion.h2>

                <div className="relative inline-block group">
                    {/* Concentric Glowing Rings */}
                    {[1, 2, 3, 4].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.1, 0.2, 0.1]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: "easeInOut"
                            }}
                            className="absolute inset-0 rounded-full border border-blue-500/20 pointer-events-none"
                            style={{
                                margin: `-${i * 20}px`,
                                boxShadow: i === 1 ? '0 0 40px rgba(59, 130, 246, 0.2)' : 'none'
                            }}
                        />
                    ))}

                    {/* Sparkles around the button */}
                    <Sparkle size={20} top="-20px" left="-30px" delay={0} />
                    <Sparkle size={14} top="40px" left="-50px" delay={1} />
                    <Sparkle size={16} top="-10px" right="-40px" delay={0.5} />
                    <Sparkle size={12} top="50px" right="-30px" delay={1.5} />

                    {/* Glossy Blue Button */}
                    <motion.a
                        href="/LuminaCALV1.apk"
                        download="LuminaCALV1.apk"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative"
                    >
                        <Button
                            size="lg"
                            className="relative z-10 px-12 h-16 text-lg rounded-full font-bold bg-gradient-to-b from-blue-400 to-blue-600 shadow-[0_8px_32px_rgba(59,130,246,0.4)] border border-blue-300/30 overflow-hidden group"
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
