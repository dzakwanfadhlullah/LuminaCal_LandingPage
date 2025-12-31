"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { Folder, FileCard } from "./ui/PrivacyComponents";
import { GlowingOrb } from "./ui/GlowingOrb";

export const PrivacySection = () => {
    return (
        <section id="privacy" className="section-premium relative overflow-hidden bg-transparent">
            {/* Background Orbs */}
            <GlowingOrb color="#3b82f6" size="500px" className="bottom-[-10%] right-[-10%] opacity-10" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-20 items-center relative z-10">

                {/* Left Column: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                        <ShieldCheck className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Privacy First</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-[1.1]">
                        Your Rules.<br />
                        <span className="gradient-text">Local Storage.</span>
                    </h2>

                    <p className="text-lg text-white/60 leading-relaxed max-w-sm mb-8">
                        Your data stays yours. Securely stored on your device, not in the cloud.
                    </p>
                </motion.div>

                {/* Right Column: Visual Container */}
                <div className="relative">
                    {/* Orbital Trails */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-500/5 rounded-[40%] scale-y-50"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-magenta-500/5 rounded-[45%] scale-y-50"
                        />
                    </div>

                    {/* Main Glass Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card p-10 md:p-16 border-white/5 bg-white/[0.01] shadow-[0_0_80px_rgba(59,130,246,0.05)] relative z-10"
                    >
                        <div className="grid grid-cols-3 gap-8 md:gap-12 mb-16">
                            <Folder label="Daily Logs" />
                            <Folder label="Meal History" />
                            <Folder label="Health Trends" />
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 pl-4">
                            <Folder label="Scans" />

                            <div className="flex-1 flex items-center justify-center relative">
                                {/* Connecting Animated Arrow */}
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    whileInView={{ width: "100%", opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 1 }}
                                    className="hidden md:block h-[2px] bg-gradient-to-r from-blue-500/50 to-transparent relative"
                                >
                                    <motion.div
                                        animate={{ x: ["0%", "100%"], opacity: [0, 1, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute top-1/2 -translate-y-1/2 right-0"
                                    >
                                        <ArrowRight className="w-4 h-4 text-blue-400" />
                                    </motion.div>
                                </motion.div>

                                {/* Mobile Arrow */}
                                <div className="md:hidden">
                                    <ArrowRight className="w-6 h-6 text-blue-400/50 rotate-90 my-4" />
                                </div>
                            </div>

                            <FileCard />
                        </div>

                        {/* Light Sweeps */}
                        <motion.div
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent skew-x-12 -z-10"
                        />
                    </motion.div>

                    {/* Glowing Trails (Visual only) */}
                    <div className="absolute -inset-4 border border-blue-500/10 rounded-[2rem] -z-10 blur-sm" />
                </div>
            </div>
        </section>
    );
};
