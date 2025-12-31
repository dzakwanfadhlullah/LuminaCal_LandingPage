"use client";

import { motion } from "framer-motion";
import { Camera, CheckCircle2 } from "lucide-react";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { GlowingOrb } from "./ui/GlowingOrb";
import { cn } from "@/lib/utils";

const badges = [
    { label: "Protein", value: "33g", variant: "purple" as const, pos: "top-[-20px] left-[10%]" },
    { label: "Carbs", value: "25g", variant: "cyan" as const, pos: "top-[10%] right-[-30px]" },
    { label: "Fat", value: "28g", variant: "orange" as const, pos: "bottom-[20%] left-[-40px]" },
    { label: "Fiber", value: "8g", variant: "green" as const, pos: "bottom-[-10px] right-[10%]" },
];

export const FeatureScanner = () => {
    return (
        <section id="features" className="section-premium relative bg-transparent overflow-hidden">
            {/* Background Glow */}
            <GlowingOrb color="#8b5cf6" size="500px" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Instant Recognition,<br />
                        <span className="gradient-text">Unmatched Accuracy.</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Our vision AI analyzes your plate in real-time, identifying ingredients
                        and portion sizes with professional-grade precision.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Landscape Device Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-[16/10] bg-[#1a1a1f] rounded-[40px] p-4 border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
                    >
                        <div className="w-full h-full bg-[#0a0a0f] rounded-[32px] overflow-hidden relative border border-white/5">
                            {/* Camera Viewfinder */}
                            <div className="absolute inset-0 p-8">
                                {/* Viewfinder Brackets */}
                                <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-white/20 rounded-tl-xl" />
                                <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-white/20 rounded-tr-xl" />
                                <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-white/20 rounded-bl-xl" />
                                <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-white/20 rounded-br-xl" />

                                {/* Pulsing AI Indicator */}
                                <motion.div
                                    animate={{ opacity: [0.4, 1, 0.4] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute top-12 left-12 flex items-center gap-2"
                                >
                                    <div className="w-2 h-2 rounded-full bg-magenta-500 shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-magenta-500">Scanning AI Active</span>
                                </motion.div>

                                {/* Scan Results Card */}
                                <div className="absolute inset-0 flex items-center justify-center p-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="glass-card max-w-[320px] w-full p-4 flex flex-col gap-4 shadow-2xl border-white/20"
                                    >
                                        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/5 relative">
                                            <img
                                                src="/salmon_bowl.png"
                                                alt="Salmon Avocado Bowl"
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                            <motion.div
                                                animate={{ y: [0, 240, 0] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-magenta-500 to-transparent shadow-[0_0_15px_rgba(236,72,153,1)] z-10"
                                            />
                                        </div>

                                        <div className="flex justify-between items-start">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <Badge variant="green" className="py-0 px-2 text-[10px]">92% Match</Badge>
                                                    <span className="text-[10px] text-white/40">Healthy Choice</span>
                                                </div>
                                                <h3 className="text-lg font-bold">Salmon Avocado Bowl</h3>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-xl font-bold">450</span>
                                                <span className="text-xs block text-white/40">kcal</span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-3 gap-2 py-2 border-t border-white/5">
                                            <div className="text-center">
                                                <div className="text-sm font-bold text-purple-400">33g</div>
                                                <div className="text-[8px] uppercase text-white/40">Protein</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-sm font-bold text-cyan-400">25g</div>
                                                <div className="text-[8px] uppercase text-white/40">Carbs</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-sm font-bold text-orange-400">28g</div>
                                                <div className="text-[8px] uppercase text-white/40">Fat</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Nutrition Badges - Desktop Only (Hidden on small mobile) */}
                        <div className="hidden md:block">
                            {badges.map((badge, i) => (
                                <motion.div
                                    key={badge.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.8 + (i * 0.1) }}
                                    className={cn("absolute z-20", badge.pos)}
                                >
                                    <div className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-2xl glass-card backdrop-blur-xl border-white/20 shadow-xl min-w-[120px]",
                                        "hover:scale-105 transition-transform cursor-default group"
                                    )}>
                                        <div className={cn(
                                            "w-2 h-2 rounded-full",
                                            badge.variant === "purple" && "bg-magenta-500",
                                            badge.variant === "cyan" && "bg-cyan-500",
                                            badge.variant === "orange" && "bg-orange-500",
                                            badge.variant === "green" && "bg-success",
                                        )} />
                                        <div>
                                            <div className="text-[10px] uppercase tracking-wider text-white/40 font-bold">{badge.label}</div>
                                            <div className="text-lg font-bold group-hover:scale-110 transition-transform">{badge.value}</div>
                                        </div>
                                    </div>
                                    {/* Connecting Line (Dotted) */}
                                    <svg className="absolute top-1/2 left-full w-20 h-[1px] pointer-events-none opacity-20">
                                        <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeDasharray="4 4" />
                                    </svg>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Badges Grid */}
                        <div className="md:hidden grid grid-cols-2 gap-2 p-4 pt-0">
                            {badges.map((badge) => (
                                <div key={badge.label} className="p-3 rounded-xl glass-card bg-white/5 border-white/10">
                                    <div className="text-[8px] uppercase tracking-wider text-white/40 font-bold">{badge.label}</div>
                                    <div className="text-sm font-bold text-white">{badge.value}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
