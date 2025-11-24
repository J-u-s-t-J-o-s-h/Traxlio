"use client";
import React, { useId } from "react";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";
import { cn } from "@/lib/utils";

type SparklesProps = {
    id?: string;
    className?: string;
    background?: string;
    minSize?: number;
    maxSize?: number;
    particleDensity?: number;
    particleColor?: string;
};

export const SparklesCore = (props: SparklesProps) => {
    const {
        id,
        className,
        background,
        minSize,
        maxSize,
        particleDensity,
        particleColor,
    } = props;
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);
    const controls = useId();

    const options: ISourceOptions = {
        background: {
            color: {
                value: background || "transparent",
            },
        },
        fullScreen: {
            enable: false,
            zIndex: 1,
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: false,
                    mode: "repulse",
                },
                resize: {
                    enable: true,
                },
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            bounce: {
                horizontal: {
                    value: 1,
                },
                vertical: {
                    value: 1,
                },
            },
            color: {
                value: particleColor || "#ffffff",
            },
            links: {
                color: particleColor || "#ffffff",
                distance: 150,
                enable: false,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 0.6,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    width: 400,
                    height: 400,
                },
                value: particleDensity || 100,
            },
            opacity: {
                value: {
                    min: 0.1,
                    max: 0.5,
                },
            },
            shape: {
                type: "circle",
            },
            size: {
                value: {
                    min: minSize || 1,
                    max: maxSize || 3,
                },
            },
        },
        detectRetina: true,
    };

    return (
        <div className={cn("opacity-0 transition-opacity duration-1000", init && "opacity-100", className)}>
            {init && (
                <Particles
                    id={id || controls}
                    className={cn("h-full w-full")}
                    options={options}
                />
            )}
        </div>
    );
};
