"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export const PremiumBackground = () => {
    const { scrollYProgress } = useScroll();

    // Parallax transforms for floating spheres
    const sphere1Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const sphere2Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const sphere3Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const sphere4Y = useTransform(scrollYProgress, [0, 1], [0, -120]);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Base Gradient - Soft Peach to Sky Blue */}
            <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(135deg, 
                        #fef7ed 0%, 
                        #fef3e8 20%,
                        #f5f0eb 40%,
                        #eef6fc 70%,
                        #e8f4fe 100%
                    )`
                }}
            />

            {/* Subtle Noise Texture Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* 3D Floating Glass Spheres */}

            {/* Sphere 1 - Large, Top Right */}
            <motion.div
                style={{ y: sphere1Y }}
                className="absolute -top-20 -right-20 w-[500px] h-[500px]"
            >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-white/40 via-white/20 to-transparent backdrop-blur-sm border border-white/30 shadow-[inset_0_4px_30px_rgba(255,255,255,0.4),0_8px_32px_rgba(0,0,0,0.05)]" />
            </motion.div>

            {/* Sphere 2 - Medium, Bottom Left */}
            <motion.div
                style={{ y: sphere2Y }}
                className="absolute bottom-[10%] -left-32 w-[400px] h-[400px]"
            >
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-white/30 via-orange-50/20 to-transparent backdrop-blur-sm border border-white/20 shadow-[inset_0_4px_30px_rgba(255,255,255,0.3),0_8px_32px_rgba(0,0,0,0.03)]" />
            </motion.div>

            {/* Sphere 3 - Small, Center-ish */}
            <motion.div
                style={{ y: sphere3Y }}
                className="absolute top-[40%] right-[15%] w-[200px] h-[200px]"
            >
                <div className="w-full h-full rounded-full bg-gradient-to-bl from-white/50 via-sky-50/30 to-transparent backdrop-blur-sm border border-white/40 shadow-[inset_0_2px_20px_rgba(255,255,255,0.5),0_4px_20px_rgba(0,0,0,0.04)]" />
            </motion.div>

            {/* Sphere 4 - Tiny accent, left side */}
            <motion.div
                style={{ y: sphere4Y }}
                className="absolute top-[60%] left-[10%] w-[120px] h-[120px]"
            >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-100/40 via-white/20 to-transparent backdrop-blur-sm border border-orange-100/30 shadow-[inset_0_2px_15px_rgba(255,255,255,0.4),0_4px_16px_rgba(249,115,22,0.05)]" />
            </motion.div>

            {/* Subtle ambient glow spots */}
            <div className="absolute top-[20%] left-[30%] w-[600px] h-[600px] rounded-full bg-orange-200/10 blur-[120px]" />
            <div className="absolute bottom-[30%] right-[20%] w-[500px] h-[500px] rounded-full bg-sky-200/10 blur-[100px]" />
        </div>
    );
};
