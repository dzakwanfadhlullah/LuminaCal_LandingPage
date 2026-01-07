"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { Folder, FileCard } from "./ui/PrivacyComponents";

export const PrivacySection = () => {
    return (
        <section id="privacy" className="section-premium relative overflow-hidden bg-transparent">

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-20 items-center relative z-10">

                {/* Left Column: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 mb-6">
                        <ShieldCheck className="w-4 h-4 text-orange-500" />
                        <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Privacy First</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-[1.1]">
                        Your Rules.<br />
                        <span className="gradient-text">Local Storage.</span>
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed max-w-sm mb-8">
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
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-orange-200/30 rounded-[40%] scale-y-50"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-sky-200/30 rounded-[45%] scale-y-50"
                        />
                    </div>

                    {/* Main Glass Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white/80 backdrop-blur-xl p-10 md:p-16 rounded-3xl border border-white/50 shadow-xl relative z-10"
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
                                    className="hidden md:block h-[2px] bg-gradient-to-r from-orange-400/50 to-transparent relative"
                                >
                                    <motion.div
                                        animate={{ x: ["0%", "100%"], opacity: [0, 1, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute top-1/2 -translate-y-1/2 right-0"
                                    >
                                        <ArrowRight className="w-4 h-4 text-orange-500" />
                                    </motion.div>
                                </motion.div>

                                {/* Mobile Arrow */}
                                <div className="md:hidden">
                                    <ArrowRight className="w-6 h-6 text-orange-400/50 rotate-90 my-4" />
                                </div>
                            </div>

                            <FileCard />
                        </div>

                        {/* Light Sweeps */}
                        <motion.div
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/20 to-transparent skew-x-12 -z-10 rounded-3xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
