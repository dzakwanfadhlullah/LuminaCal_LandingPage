import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "purple" | "cyan" | "green" | "orange" | "default";
}

const Badge = ({ className, variant = "default", ...props }: BadgeProps) => {
    const variants = {
        default: "bg-white/5 border-white/10 text-white/70",
        purple: "bg-purple-500/10 border-purple-500/20 text-purple-400 glow-purple",
        cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400 glow-cyan",
        green: "bg-success/10 border-success/20 text-success-light",
        orange: "bg-warning/10 border-warning/20 text-warning-light",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors duration-300",
                variants[variant],
                className
            )}
            {...props}
        />
    );
};

export { Badge };
