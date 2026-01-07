"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { MoreVertical } from "lucide-react";

// Gradient Ring Component
const GradientRing = ({
    size = 150,
    strokeWidth = 12,
    value = 75,
    colors,
    children,
}: {
    size?: number;
    strokeWidth?: number;
    value?: number;
    colors: string[];
    children?: React.ReactNode;
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (value / 100) * circumference;
    const gradientId = `gradient-${colors[0].replace("#", "")}`;

    return (
        <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
            <svg viewBox={`0 0 ${size} ${size}`} className="rotate-[-90deg] w-full h-full relative z-10">
                <defs>
                    <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={colors[0]} />
                        <stop offset="100%" stopColor={colors[1]} />
                    </linearGradient>
                </defs>
                {/* Background Circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="rgba(0,0,0,0.05)"
                    strokeWidth={strokeWidth}
                />
                {/* Progress Circle */}
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
                    style={{ filter: `drop-shadow(0 2px 4px ${colors[0]}40)` }}
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
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Your Health, <span className="gradient-text">At a Glance.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Card 1: Calories & Macros */}
                    <div className="lg:col-span-8 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-lg">
                        {/* Left: Calorie Ring */}
                        <div className="flex-shrink-0">
                            <span className="text-sm font-medium text-gray-500 mb-4 block text-center">Calories Burned</span>
                            <GradientRing
                                size={180}
                                strokeWidth={14}
                                value={85}
                                colors={["#f97316", "#ef4444"]}
                            >
                                <span className="text-5xl font-black text-gray-900">2150</span>
                                <span className="text-sm font-medium text-gray-500">kcal</span>
                            </GradientRing>
                        </div>

                        {/* Right: Macro Rings */}
                        <div className="flex-1 flex items-center justify-center gap-6 md:gap-10">
                            <div className="flex flex-col items-center">
                                <span className="text-xs font-medium text-gray-500 mb-2">Protein</span>
                                <GradientRing size={100} strokeWidth={10} value={85} colors={["#22c55e", "#10b981"]}>
                                    <span className="text-xl font-bold text-gray-900">85%</span>
                                </GradientRing>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-xs font-medium text-gray-500 mb-2">Carbs</span>
                                <GradientRing size={100} strokeWidth={10} value={60} colors={["#3b82f6", "#06b6d4"]}>
                                    <span className="text-xl font-bold text-gray-900">60%</span>
                                </GradientRing>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-xs font-medium text-gray-500 mb-2">Fats</span>
                                <GradientRing size={100} strokeWidth={10} value={40} colors={["#f97316", "#eab308"]}>
                                    <span className="text-xl font-bold text-gray-900">40%</span>
                                </GradientRing>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Water Intake */}
                    <div className="lg:col-span-4 p-6 flex flex-col items-center bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-lg">
                        <div className="flex justify-between items-center w-full mb-6">
                            <span className="text-sm font-medium text-gray-500">Water Intake</span>
                            <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                <MoreVertical size={18} />
                            </button>
                        </div>

                        {/* Water Glass Visualization */}
                        <div className="relative w-40 h-52 flex-1">
                            {/* Glass Body */}
                            <div className="absolute inset-0 rounded-b-[2rem] border-2 border-gray-200 bg-gradient-to-br from-white/80 to-white/40 overflow-hidden shadow-inner">
                                {/* Glass Rim Highlight */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent" />

                                {/* Water Fill */}
                                <motion.div
                                    initial={{ height: "0%" }}
                                    whileInView={{ height: "70%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                    className="absolute bottom-0 left-0 right-0"
                                >
                                    {/* Water Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500 via-blue-400 to-sky-300" />

                                    {/* Water Shine */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
                                    <div className="absolute right-2 top-4 bottom-4 w-3 bg-gradient-to-b from-white/40 via-white/20 to-transparent rounded-full blur-sm" />

                                    {/* Bubbles */}
                                    <motion.div
                                        animate={{ y: [0, -60], opacity: [1, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0 }}
                                        className="absolute bottom-4 left-6 w-2 h-2 rounded-full bg-white/50"
                                    />
                                    <motion.div
                                        animate={{ y: [0, -80], opacity: [1, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 1 }}
                                        className="absolute bottom-8 left-10 w-1.5 h-1.5 rounded-full bg-white/40"
                                    />

                                    {/* Wave Animation */}
                                    <motion.div
                                        animate={{ x: ["-50%", "0%"] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        className="absolute top-0 left-0 w-[200%] h-6 -scale-y-100"
                                    >
                                        <svg viewBox="0 0 100 20" className="w-full h-full fill-sky-200">
                                            <path d="M0 10 Q 12 5 25 10 T 50 10 T 75 10 T 100 10 V 20 H 0 Z" />
                                        </svg>
                                    </motion.div>
                                </motion.div>

                                {/* Glass Reflection */}
                                <div className="absolute left-1 top-4 bottom-4 w-2 bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-full" />
                            </div>

                            {/* Text Overlay */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                                <span className="text-3xl font-bold text-gray-900 drop-shadow-sm">2.1L</span>
                                <span className="text-sm text-gray-500">/ 3L</span>
                            </div>
                        </div>

                        <Button size="sm" className="w-full mt-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-md">
                            Drink More
                        </Button>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${i === 0 ? "bg-orange-500" : "bg-gray-300"}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
