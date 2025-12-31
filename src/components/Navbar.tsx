"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Data Privacy", href: "#privacy" },
    { name: "Download", href: "#download" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [isDarkMode, setIsDarkMode] = React.useState(true);

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-[1000] py-4 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Pill-shaped Navbar Container */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                        "rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500",
                        "bg-[#0d0d14]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                    )}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative">
                            <img
                                src="/luminacal-logo.png"
                                alt="LuminaCal"
                                className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-orange-400 blur-lg opacity-20" />
                        </div>
                        <span className="text-lg font-semibold tracking-tight text-white">
                            LuminaCal
                        </span>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>




                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </motion.div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden mt-2 mx-auto max-w-5xl"
                    >
                        <div className="rounded-2xl bg-[#0d0d14]/95 backdrop-blur-2xl border border-white/10 p-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-white/70 hover:text-white transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
