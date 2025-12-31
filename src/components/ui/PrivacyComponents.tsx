"use client";

import { motion } from "framer-motion";
import { Folder as FolderIcon, FileText, Lock, Download } from "lucide-react";

export const Folder = ({ label }: { label: string }) => (
    <div className="flex flex-col items-center gap-2">
        <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-20 h-16 md:w-24 md:h-20 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl flex items-center justify-center relative z-10 overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-1/2 h-2 bg-white/10 rounded-br-lg" />
                <FolderIcon className="w-8 h-8 md:w-10 md:h-10 text-blue-400/80" />
                <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                </div>
            </div>
        </div>
        <span className="text-xs font-bold text-white/60 tracking-tight">{label}</span>
    </div>
);

export const FileCard = () => (
    <div className="glass-card bg-white/[0.03] border-white/10 p-4 flex items-center gap-4 min-w-[280px] shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="w-12 h-14 bg-gradient-to-br from-white/15 to-white/5 border border-white/10 rounded-lg flex items-center justify-center relative">
            <FileText className="w-6 h-6 text-white/60" />
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-t-white/10 border-l-[12px] border-l-transparent" />
        </div>
        <div className="flex-1">
            <div className="text-sm font-bold text-white/90">2024-09-22_Log.json</div>
            <div className="text-[10px] text-white/40 font-medium">16MB, 7:15 PM</div>
        </div>
        <div className="flex flex-col gap-2">
            <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Lock size={10} className="text-white/40" />
            </div>
            <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Download size={10} className="text-white/40" />
            </div>
        </div>
    </div>
);
