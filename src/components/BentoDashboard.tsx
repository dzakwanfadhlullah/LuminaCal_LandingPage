"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { MoreVertical } from "lucide-react";

// Gradient Ring Component with Glow
const GradientRing = ({
    size = 150,
    strokeWidth = 12,
    value = 75,
    colors,
    glowColor,
    children,
}: {
    size?: number;
    strokeWidth?: number;
    value?: number;
    colors: string[];
    glowColor: string;
    children?: React.ReactNode;
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (value / 100) * circumference;
    const gradientId = `gradient-${colors[0].replace("#", "")}`;
    const glowId = `glow-${colors[0].replace("#", "")}`;

    return (
        <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
            {/* Outer Glow Layer */}
            <div
                className="absolute inset-0 rounded-full blur-xl opacity-40"
                style={{ background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)` }}
            />

            <svg viewBox={`0 0 ${size} ${size}`} className="rotate-[-90deg] w-full h-full relative z-10">
                <defs>
                    <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={colors[0]} />
                        <stop offset="100%" stopColor={colors[1]} />
                    </linearGradient>
                    <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                {/* Background Circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="rgba(255,255,255,0.03)"
                    strokeWidth={strokeWidth}
                />
                {/* Progress Circle with Glow */}
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={`url(#${gradientId})`}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset: offset }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    filter={`url(#${glowId})`}
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                {children}
            </div>
        </div>
    );
};

export const BentoDashboard = () => {
    return (
        <section id="dashboard" className="section-premium relative bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Your Health, <span className="text-white">At a Glance.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Card 1: Calories & Macros */}
                    <Card className="lg:col-span-8 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        {/* Left: Calorie Ring */}
                        <div className="flex-shrink-0">
                            <span className="text-sm font-medium text-white/50 mb-4 block text-center">Calories Burned</span>
                            <GradientRing
                                size={180}
                                strokeWidth={14}
                                value={85}
                                colors={["#f97316", "#ef4444"]}
                                glowColor="#ef4444"
                            >
                                <span className="text-5xl font-black text-white">2150</span>
                                <span className="text-sm font-medium text-white/40">kcal</span>
                            </GradientRing>
                        </div>

                        {/* Right: Macro Rings */}
                        <div className="flex-1 flex items-center justify-center gap-6 md:gap-10">
                            <div className="flex flex-col items-center">
                                <span className="text-xs font-medium text-white/40 mb-2">Protein</span>
                                <GradientRing size={100} strokeWidth={10} value={85} colors={["#a855f7", "#ec4899"]} glowColor="#a855f7">
                                    <span className="text-xl font-bold text-white">85%</span>
                                </GradientRing>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-xs font-medium text-white/40 mb-2">Carbs</span>
                                <GradientRing size={100} strokeWidth={10} value={60} colors={["#22c55e", "#06b6d4"]} glowColor="#22c55e">
                                    <span className="text-xl font-bold text-white">60%</span>
                                </GradientRing>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-xs font-medium text-white/40 mb-2">Fats</span>
                                <GradientRing size={100} strokeWidth={10} value={40} colors={["#f97316", "#eab308"]} glowColor="#f97316">
                                    <span className="text-xl font-bold text-white">40%</span>
                                </GradientRing>
                            </div>
                        </div>
                    </Card>

                    {/* Card 2: Water Intake */}
                    <Card className="lg:col-span-4 p-6 flex flex-col items-center">
                        <div className="flex justify-between items-center w-full mb-6">
                            <span className="text-sm font-medium text-white/50">Water Intake</span>
                            <button className="text-white/30 hover:text-white transition-colors">
                                <MoreVertical size={18} />
                            </button>
                        </div>

                        {/* Realistic Glass with Improved Water */}
                        <div className="relative w-40 h-52 flex-1">
                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-blue-600/20 rounded-[2rem] blur-2xl" />

                            {/* Glass Body */}
                            <div className="absolute inset-0 rounded-b-[2rem] border-2 border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] overflow-hidden shadow-[inset_0_0_30px_rgba(255,255,255,0.03)]">
                                {/* Glass Rim Highlight */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                {/* Water Fill */}
                                <motion.div
                                    initial={{ height: "0%" }}
                                    whileInView={{ height: "70%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                    className="absolute bottom-0 left-0 right-0"
                                >
                                    {/* Water Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 via-cyan-500/80 to-cyan-400/70" />

                                    {/* Water Shine/Reflection */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
                                    <div className="absolute right-2 top-4 bottom-4 w-3 bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-full blur-sm" />

                                    {/* Bubbles */}
                                    <motion.div
                                        animate={{ y: [0, -60], opacity: [1, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0 }}
                                        className="absolute bottom-4 left-6 w-2 h-2 rounded-full bg-white/30"
                                    />
                                    <motion.div
                                        animate={{ y: [0, -80], opacity: [1, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 1 }}
                                        className="absolute bottom-8 left-10 w-1.5 h-1.5 rounded-full bg-white/20"
                                    />
                                    <motion.div
                                        animate={{ y: [0, -50], opacity: [1, 0] }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                                        className="absolute bottom-2 right-8 w-1 h-1 rounded-full bg-white/40"
                                    />

                                    {/* Wave Animation */}
                                    <motion.div
                                        animate={{ x: ["-50%", "0%"] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        className="absolute top-0 left-0 w-[200%] h-6 -scale-y-100"
                                    >
                                        <svg viewBox="0 0 100 20" className="w-full h-full fill-cyan-300/80">
                                            <path d="M0 10 Q 12 5 25 10 T 50 10 T 75 10 T 100 10 V 20 H 0 Z" />
                                        </svg>
                                    </motion.div>
                                    <motion.div
                                        animate={{ x: ["0%", "-50%"] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                        className="absolute top-1 left-0 w-[200%] h-4 -scale-y-100 opacity-50"
                                    >
                                        <svg viewBox="0 0 100 20" className="w-full h-full fill-white/20">
                                            <path d="M0 10 Q 15 5 30 10 T 60 10 T 90 10 T 100 10 V 20 H 0 Z" />
                                        </svg>
                                    </motion.div>
                                </motion.div>

                                {/* Glass Reflection (left edge) */}
                                <div className="absolute left-1 top-4 bottom-4 w-2 bg-gradient-to-b from-white/10 via-white/5 to-transparent rounded-full" />
                            </div>

                            {/* Text Overlay */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                                <span className="text-3xl font-bold text-white drop-shadow-lg">2.1L</span>
                                <span className="text-sm text-white/60 drop-shadow">/ 3L</span>
                            </div>
                        </div>

                        <Button variant="cyan" size="sm" className="w-full mt-6 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                            Drink More
                        </Button>
                    </Card>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${i === 0 ? "bg-white" : "bg-white/20"}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
