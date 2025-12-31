"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { GlowingOrb } from "./ui/GlowingOrb";
import { Sparkles, Zap, Flame, Droplets, Home, Camera, BarChart3, User } from "lucide-react";

// Sparkle Component
const FloatingSparkle = ({ className, size = 24, delay = 0 }: { className?: string; size?: number; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 0.5, 1], scale: [0, 1, 0.9, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay }}
        className={className}
    >
        <Sparkles size={size} className="text-cyan-400" fill="currentColor" />
    </motion.div>
);

// Activity Ring for Phone Mockup
const ActivityRing = ({
    size,
    strokeWidth,
    value,
    color,
    icon: Icon,
    delay = 0,
}: {
    size: number;
    strokeWidth: number;
    value: number;
    color: string;
    icon: React.ElementType;
    delay?: number;
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (value / 100) * circumference;

    return (
        <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
            <svg viewBox={`0 0 ${size} ${size}`} className="rotate-[-90deg] w-full h-full">
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth={strokeWidth}
                />
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 1.5, delay, ease: "easeOut" }}
                    style={{ filter: `drop-shadow(0 0 6px ${color})` }}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <Icon size={size * 0.3} style={{ color }} />
            </div>
        </div>
    );
};

export const Hero = () => {
    return (
        <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
            {/* Wavy Background Mesh */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <svg className="absolute bottom-0 left-0 w-full h-[400px] opacity-30" viewBox="0 0 1440 400" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                        </linearGradient>
                    </defs>
                    <motion.path
                        d="M0,300 C300,350 600,250 900,300 C1200,350 1440,280 1440,280 L1440,400 L0,400 Z"
                        fill="url(#waveGradient)"
                        animate={{
                            d: [
                                "M0,300 C300,350 600,250 900,300 C1200,350 1440,280 1440,280 L1440,400 L0,400 Z",
                                "M0,280 C300,250 600,350 900,280 C1200,250 1440,320 1440,320 L1440,400 L0,400 Z",
                                "M0,300 C300,350 600,250 900,300 C1200,350 1440,280 1440,280 L1440,400 L0,400 Z",
                            ],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />
                </svg>
                {/* Grid Lines */}
                <div className="absolute bottom-0 left-0 w-full h-[300px] opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
                        backgroundSize: '60px 60px',
                        transform: 'perspective(500px) rotateX(60deg)',
                        transformOrigin: 'bottom center',
                    }} />
                </div>
            </div>

            {/* Background Orbs */}
            <GlowingOrb color="#a855f7" size="600px" className="top-[-10%] left-[-10%] opacity-15" />
            <GlowingOrb color="#06b6d4" size="500px" className="top-[-5%] right-[-5%] opacity-10" />

            {/* Floating Sparkles */}
            <FloatingSparkle className="absolute top-[30%] right-[40%]" size={20} delay={0} />
            <FloatingSparkle className="absolute top-[50%] right-[25%]" size={16} delay={0.5} />
            <FloatingSparkle className="absolute bottom-[30%] right-[35%]" size={24} delay={1} />
            <FloatingSparkle className="absolute top-[60%] left-[45%]" size={14} delay={1.5} />

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center relative z-10">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-8">
                        Precision Nutrition.<br />
                        <span className="text-white">Powered by Vision.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed mb-10">
                        Your personal AI dietitian that recognizes your plate and calculates your macros in seconds.
                        Experience calorie tracking redefined in glass.
                    </p>

                    {/* Glossy Blue Button */}
                    <motion.a
                        href="/LuminaCALV1.apk"
                        download="LuminaCALV1.apk"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-block"
                    >
                        <Button
                            size="lg"
                            className="h-16 px-10 text-lg rounded-full font-bold bg-gradient-to-b from-blue-400 to-blue-600 shadow-[0_8px_32px_rgba(59,130,246,0.4)] border border-blue-300/30 overflow-hidden group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
                            Download Beta v1 (APK)
                        </Button>
                    </motion.a>
                </motion.div>

                {/* Right: Phone Mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 60, rotateY: -10 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="relative hidden lg:block"
                >
                    <motion.div
                        animate={{ y: [-8, 8, -8] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative mx-auto w-[300px]"
                    >
                        {/* Phone Frame */}
                        <div className="relative bg-gradient-to-b from-[#1a1a24] to-[#0d0d14] rounded-[40px] p-3 shadow-[0_50px_100px_rgba(0,0,0,0.8)] border border-white/10">
                            {/* Screen */}
                            <div className="w-full aspect-[9/19] bg-[#0a0a0f] rounded-[32px] overflow-hidden relative">
                                {/* Status Bar & Notch */}
                                <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-center">
                                    <div className="w-24 h-6 bg-black rounded-b-2xl" />
                                </div>

                                {/* App Content */}
                                <div className="p-5 pt-10 h-full flex flex-col">
                                    {/* App Header */}
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-lg font-bold text-white">LuminaCal</span>
                                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                                            <div className="w-3 h-3 rounded-full border border-white/30" />
                                        </div>
                                    </div>

                                    {/* Activity Rings Grid */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="glass-card p-4 rounded-2xl flex flex-col items-center gap-2">
                                            <ActivityRing size={70} strokeWidth={8} value={85} color="#ef4444" icon={Zap} delay={0.5} />
                                            <span className="text-[10px] text-white/50">Calories Burned</span>
                                        </div>
                                        <div className="glass-card p-4 rounded-2xl flex flex-col items-center gap-2">
                                            <ActivityRing size={70} strokeWidth={8} value={70} color="#22c55e" icon={Flame} delay={0.7} />
                                            <span className="text-[10px] text-white/50">Protein Intake</span>
                                        </div>
                                        <div className="glass-card p-4 rounded-2xl flex flex-col items-center gap-2">
                                            <ActivityRing size={70} strokeWidth={8} value={60} color="#f97316" icon={Droplets} delay={0.9} />
                                            <span className="text-[10px] text-white/50">Water Track</span>
                                        </div>
                                        <div className="glass-card p-4 rounded-2xl flex flex-col items-center gap-2">
                                            <ActivityRing size={70} strokeWidth={8} value={45} color="#3b82f6" icon={BarChart3} delay={1.1} />
                                            <span className="text-[10px] text-white/50">Fruit Fiber</span>
                                        </div>
                                    </div>

                                    {/* Daily Summary */}
                                    <div className="glass-card p-4 rounded-2xl flex-1">
                                        <span className="text-[10px] text-white/50 block mb-3">Daily Summary</span>
                                        <div className="flex items-center justify-between">
                                            <div className="text-center">
                                                <span className="text-xs text-white/40">goal</span>
                                                <div className="text-lg font-bold text-magenta-400">90%</div>
                                            </div>
                                            <div className="text-center">
                                                <span className="text-xs text-white/40">kcal</span>
                                                <div className="text-2xl font-black text-white">2190</div>
                                            </div>
                                            <div className="text-center">
                                                <span className="text-xs text-white/40">fiber</span>
                                                <div className="text-lg font-bold text-cyan-400">55%</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Navigation */}
                                    <div className="mt-4 flex justify-around items-center py-3 bg-white/5 rounded-2xl">
                                        <Home size={20} className="text-white/40" />
                                        <Camera size={20} className="text-white" />
                                        <BarChart3 size={20} className="text-white/40" />
                                        <User size={20} className="text-white/40" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Sparkles around phone */}
                        <motion.div
                            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -top-6 -right-6 text-cyan-400"
                        >
                            <Sparkles size={32} fill="currentColor" />
                        </motion.div>
                        <motion.div
                            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute top-1/3 -left-8 text-purple-400"
                        >
                            <Sparkles size={24} fill="currentColor" />
                        </motion.div>
                        <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute bottom-1/4 -right-4 text-magenta-400"
                        >
                            <Sparkles size={20} fill="currentColor" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
