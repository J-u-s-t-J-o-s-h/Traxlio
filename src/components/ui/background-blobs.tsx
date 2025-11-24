"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBlobs = ({ className }: { className?: string }) => {
    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-500/40 blur-[120px]"
            />
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.5, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-yellow-500/40 blur-[120px]"
            />
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="absolute top-[20%] right-[20%] h-[400px] w-[400px] rounded-full bg-cyan-400/30 blur-[100px]"
            />
        </div>
    );
};
