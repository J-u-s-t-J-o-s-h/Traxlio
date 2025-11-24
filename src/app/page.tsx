"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { ArrowRight, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LandingPage() {
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/dashboard");
    };

    return (
        <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md relative">
            {/* Sparkles Background */}
            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center w-full max-w-md px-4">
                <h1 className="md:text-7xl text-5xl lg:text-8xl font-bold text-center text-white relative z-20 tracking-tighter">
                    Traxlio
                </h1>
                <p className="mt-4 text-zinc-400 text-center max-w-sm">
                    The strict, neutral, and secure way to manage your physical inventory.
                </p>

                {/* Login Form */}
                <div className="mt-8 w-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm p-6 rounded-2xl">
                    <form onSubmit={handleLogin} className="flex flex-col gap-4">
                        <div>
                            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                                Email
                            </label>
                            <input
                                type="email"
                                defaultValue="demo@tote.app"
                                className="mt-1 block w-full rounded-lg border border-zinc-800 bg-black/50 px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                                Password
                            </label>
                            <input
                                type="password"
                                defaultValue="password"
                                className="mt-1 block w-full rounded-lg border border-zinc-800 bg-black/50 px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200 transition-colors"
                        >
                            <Lock className="h-4 w-4" />
                            Sign In
                        </button>
                    </form>

                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-500">
                        <span>Sample Credentials:</span>
                        <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-300">
                            demo@tote.app
                        </code>
                    </div>
                </div>
            </div>
        </div>
    );
}
