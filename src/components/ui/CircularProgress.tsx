"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CircularProgressProps {
    value: number;
    size?: number;
    strokeWidth?: number;
    color?: string;
    label?: string;
    className?: string;
}

export const CircularProgress = ({
    value,
    size = 80,
    strokeWidth = 8,
    color = "#a855f7",
    label,
    className
}: CircularProgressProps) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (value / 100) * circumference;

    return (
        <div className={cn("relative flex flex-col items-center justify-center", className)} style={{ width: size }}>
            <svg width={size} height={size} className="rotate-[-90deg]">
                {/* Background Circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth={strokeWidth}
                />
                {/* Progress Circle */}
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
                    whileInView={{ strokeDashoffset: offset }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold">{value}%</span>
            </div>
            {label && <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-white/40">{label}</span>}
        </div>
    );
};
