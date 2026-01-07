"use client";

export const Footer = () => {
    return (
        <footer className="pb-20 relative bg-transparent flex justify-center">
            <div className="px-8 py-4 rounded-full bg-white/80 backdrop-blur-xl border border-white/50 flex items-center gap-6 shadow-lg">
                <button className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                    Privacy Policy
                </button>
                <div className="w-[1px] h-4 bg-gray-200" />
                <button className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                    Terms & Conditions
                </button>
                <div className="w-[1px] h-4 bg-gray-200" />
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]" />
                    <span className="text-sm font-bold text-gray-700">Build v1.0.0 (Beta)</span>
                </div>
            </div>
        </footer>
    );
};
