"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowingOrbProps {
    className?: string;
    color?: string;
    size?: string;
    delay?: number;
}

export const GlowingOrb = ({ className, color = "#a855f7", size = "300px", delay = 0 }: GlowingOrbProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1],
            }}
            transition={{
                duration: 5,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className={cn("absolute rounded-full blur-[120px] pointer-events-none mix-blend-screen", className)}
            style={{
                backgroundColor: color,
                width: size,
                height: size,
            }}
        />
    );
};
