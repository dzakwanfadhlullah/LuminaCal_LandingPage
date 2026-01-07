"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import Image from "next/image";

export const Hero = () => {
    return (
        <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center relative z-10">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-gray-900 mb-8">
                        Precision Nutrition.<br />
                        <span className="gradient-text">Powered by Vision.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed mb-10">
                        Your personal AI dietitian that recognizes your plate and calculates your macros in seconds.
                        Experience calorie tracking redefined in glass.
                    </p>

                    {/* Orange CTA Button */}
                    <motion.a
                        href="/LuminaCALV1.apk"
                        download="LuminaCALV1.apk"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-block"
                    >
                        <Button
                            size="lg"
                            className="h-16 px-10 text-lg rounded-full font-bold bg-gradient-to-b from-orange-400 to-orange-500 text-white shadow-[0_8px_32px_rgba(249,115,22,0.35)] border border-orange-300/30 overflow-hidden group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
                            Download Beta v1 (APK)
                        </Button>
                    </motion.a>
                </motion.div>

                {/* Right: Premium iPhone Mockup with Real Dashboard Screenshot */}
                <motion.div
                    initial={{ opacity: 0, x: 60, rotateY: -10 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="relative hidden lg:flex justify-center"
                >
                    <motion.div
                        animate={{ y: [-8, 8, -8] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative"
                    >
                        {/* Glow Effect Behind Phone */}
                        <div className="absolute -inset-8 bg-gradient-to-br from-orange-200/40 via-pink-100/30 to-blue-200/40 rounded-[60px] blur-3xl opacity-70" />

                        {/* iPhone Frame */}
                        <div className="relative w-[280px] rounded-[48px] bg-gradient-to-b from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] p-[10px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4),0_30px_60px_-30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]">

                            {/* Side Buttons - Volume */}
                            <div className="absolute left-[-2px] top-[100px] w-[3px] h-[30px] bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a] rounded-l-sm" />
                            <div className="absolute left-[-2px] top-[140px] w-[3px] h-[50px] bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a] rounded-l-sm" />
                            <div className="absolute left-[-2px] top-[200px] w-[3px] h-[50px] bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a] rounded-l-sm" />

                            {/* Side Button - Power */}
                            <div className="absolute right-[-2px] top-[150px] w-[3px] h-[70px] bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a] rounded-r-sm" />

                            {/* Inner Bezel */}
                            <div className="relative rounded-[40px] overflow-hidden bg-black">
                                {/* Screen Container */}
                                <div className="relative aspect-[9/19.5] overflow-hidden">

                                    {/* Actual Dashboard Screenshot */}
                                    <Image
                                        src="/dashboard-home.png"
                                        alt="LuminaCal Dashboard Home"
                                        fill
                                        className="object-cover object-top"
                                        priority
                                    />

                                    {/* Screen Reflection Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

                                    {/* Dynamic Island */}
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-20 flex items-center justify-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#1a1a1a] ring-1 ring-gray-800" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#252525]" />
                                    </div>

                                </div>
                            </div>

                            {/* Bottom Indicator Bar */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-white/20 rounded-full" />
                        </div>

                        {/* Floating Elements for Visual Interest */}
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, 5, 0]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -top-4 -right-8 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl shadow-lg flex items-center justify-center"
                        >
                            <span className="text-white text-2xl">🔥</span>
                        </motion.div>

                        <motion.div
                            animate={{
                                y: [0, 10, 0],
                                rotate: [0, -5, 0]
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl shadow-lg flex items-center justify-center"
                        >
                            <span className="text-white text-xl">💧</span>
                        </motion.div>

                        <motion.div
                            animate={{
                                y: [0, -12, 0],
                                x: [0, 5, 0]
                            }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                            className="absolute top-1/3 -left-10 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl shadow-lg flex items-center justify-center"
                        >
                            <span className="text-white text-lg">🥗</span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
