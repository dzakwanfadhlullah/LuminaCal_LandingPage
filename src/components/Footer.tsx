"use client";

export const Footer = () => {
    return (
        <footer className="pb-20 relative bg-transparent flex justify-center">
            <div className="px-8 py-4 rounded-full glass-card border-white/5 bg-black/40 flex items-center gap-6 shadow-2xl">
                <button className="text-sm font-medium text-white/50 hover:text-white transition-colors">
                    Privacy Policy
                </button>
                <div className="w-[1px] h-4 bg-white/10" />
                <button className="text-sm font-medium text-white/50 hover:text-white transition-colors">
                    Terms & Conditions
                </button>
                <div className="w-[1px] h-4 bg-white/10" />
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-magenta-500 shadow-[0_0_8px_#ec4899]" />
                    <span className="text-sm font-bold text-white/70">Build v1.0.0 (Beta)</span>
                </div>
            </div>
        </footer>
    );
};
