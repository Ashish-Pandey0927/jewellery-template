import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Safe layout effect for browser environments
const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : React.useEffect;

/**
 * 1. MASKED WORD REVEAL
 * Splits text into words, wraps each in an overflow-hidden container,
 * and slides each word up smoothly with subtle 3D rotation.
 */
interface MaskedWordsProps {
    text?: string;
    children?: React.ReactNode;
    className?: string;
    stagger?: number;
    delay?: number;
    duration?: number;
    threshold?: string;
}

export function MaskedWords({
    text,
    children,
    className = "",
    stagger = 0.045,
    delay = 0,
    duration = 1.1,
    threshold = "top 88%",
}: MaskedWordsProps) {
    const containerRef = useRef<HTMLHeadingElement | HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const words = el.querySelectorAll(".masked-word-inner");
        if (!words.length) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                words,
                {
                    yPercent: 115,
                    rotateX: -25,
                    opacity: 0,
                },
                {
                    yPercent: 0,
                    rotateX: 0,
                    opacity: 1,
                    duration,
                    delay,
                    stagger,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: threshold,
                        once: true,
                    },
                }
            );
        }, el);

        return () => ctx.revert();
    }, [delay, duration, stagger, threshold]);

    if (text) {
        const words = text.split(" ");
        return (
            <div ref={containerRef as React.RefObject<HTMLDivElement>} className={`perspective-[1000px] ${className}`}>
                {words.map((word, i) => (
                    <span key={i} className="inline-block overflow-hidden pb-[0.12em] mr-[0.28em] align-top">
                        <span className="masked-word-inner inline-block will-change-transform">
                            {word}
                        </span>
                    </span>
                ))}
            </div>
        );
    }

    return (
        <div ref={containerRef as React.RefObject<HTMLDivElement>} className={`perspective-[1000px] ${className}`}>
            {children}
        </div>
    );
}

/**
 * 2. CHAR WAVE (Letter by Letter Staggered Wave)
 * Elegant sliding letters for high-impact titles like "Objects of desire."
 */
interface CharWaveProps {
    text: string;
    className?: string;
    stagger?: number;
    delay?: number;
    duration?: number;
    threshold?: string;
}

export function CharWave({
    text,
    className = "",
    stagger = 0.025,
    delay = 0,
    duration = 0.95,
    threshold = "top 85%",
}: CharWaveProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const chars = el.querySelectorAll(".char-inner");
        if (!chars.length) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                chars,
                {
                    yPercent: 125,
                    rotateZ: 4,
                    opacity: 0,
                },
                {
                    yPercent: 0,
                    rotateZ: 0,
                    opacity: 1,
                    duration,
                    delay,
                    stagger,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: el,
                        start: threshold,
                        once: true,
                    },
                }
            );
        }, el);

        return () => ctx.revert();
    }, [delay, duration, stagger, threshold]);

    // Split words first to prevent breaking words across lines
    const words = text.split(" ");

    return (
        <div ref={containerRef} className={`inline-block ${className}`}>
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.28em]">
                    {word.split("").map((char, charIndex) => (
                        <span key={charIndex} className="inline-block overflow-hidden pb-[0.12em]">
                            <span className="char-inner inline-block will-change-transform">
                                {char}
                            </span>
                        </span>
                    ))}
                </span>
            ))}
        </div>
    );
}

/**
 * 3. 3D PERSPECTIVE HORIZON TILT
 * Monumental 3D horizon tilt for display titles like "Crafted by hand."
 */
interface PerspectiveTiltProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    threshold?: string;
}

export function PerspectiveTilt({
    children,
    className = "",
    delay = 0,
    duration = 1.3,
    threshold = "top 85%",
}: PerspectiveTiltProps) {
    const elRef = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => {
        const el = elRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                el,
                {
                    rotateX: -45,
                    y: 60,
                    opacity: 0,
                    transformPerspective: 1000,
                    transformOrigin: "50% 100%",
                },
                {
                    rotateX: 0,
                    y: 0,
                    opacity: 1,
                    duration,
                    delay,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: threshold,
                        once: true,
                    },
                }
            );
        }, el);

        return () => ctx.revert();
    }, [delay, duration, threshold]);

    return (
        <div ref={elRef} className={`transform-gpu ${className}`}>
            {children}
        </div>
    );
}

/**
 * 4. EDITORIAL BLUR REVEAL
 * High-fashion optical blur into crystal-clear sharpness.
 */
interface BlurRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    blurAmount?: number;
    threshold?: string;
}

export function BlurReveal({
    children,
    className = "",
    delay = 0,
    duration = 1.25,
    blurAmount = 14,
    threshold = "top 88%",
}: BlurRevealProps) {
    const elRef = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => {
        const el = elRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                el,
                {
                    filter: `blur(${blurAmount}px)`,
                    scale: 1.07,
                    opacity: 0,
                    y: 20,
                },
                {
                    filter: "blur(0px)",
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration,
                    delay,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: threshold,
                        once: true,
                    },
                }
            );
        }, el);

        return () => ctx.revert();
    }, [blurAmount, delay, duration, threshold]);

    return (
        <div ref={elRef} className={`will-change-[filter,transform] ${className}`}>
            {children}
        </div>
    );
}

/**
 * 5. TRACKING EXPAND (Luxury Eyebrow Bloom)
 * Animates letter-spacing outward with a delicate golden fade.
 */
interface TrackingExpandProps {
    children: React.ReactNode;
    className?: string;
    targetTracking?: string;
    delay?: number;
    duration?: number;
    threshold?: string;
}

export function TrackingExpand({
    children,
    className = "",
    targetTracking = "0.38em",
    delay = 0,
    duration = 1.15,
    threshold = "top 90%",
}: TrackingExpandProps) {
    const elRef = useRef<HTMLParagraphElement>(null);

    useIsomorphicLayoutEffect(() => {
        const el = elRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                el,
                {
                    letterSpacing: "0.08em",
                    opacity: 0,
                    y: 12,
                },
                {
                    letterSpacing: targetTracking,
                    opacity: 1,
                    y: 0,
                    duration,
                    delay,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: threshold,
                        once: true,
                    },
                }
            );
        }, el);

        return () => ctx.revert();
    }, [delay, duration, targetTracking, threshold]);

    return (
        <p ref={elRef} className={`will-change-[letter-spacing,opacity] ${className}`}>
            {children}
        </p>
    );
}

/**
 * 6. PRISMATIC LIGHT WIPE
 * Creates a diamond-facet light reflection wipe across text.
 */
interface PrismaticWipeProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    threshold?: string;
}

export function PrismaticWipe({
    children,
    className = "",
    delay = 0,
    duration = 1.35,
    threshold = "top 85%",
}: PrismaticWipeProps) {
    const elRef = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => {
        const el = elRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                el,
                {
                    opacity: 0,
                    x: -30,
                    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
                },
                {
                    opacity: 1,
                    x: 0,
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    duration,
                    delay,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: threshold,
                        once: true,
                    },
                }
            );
        }, el);

        return () => ctx.revert();
    }, [delay, duration, threshold]);

    return (
        <div ref={elRef} className={`will-change-transform ${className}`}>
            {children}
        </div>
    );
}

/**
 * 7. SMOOTH FADE UP
 * Silky vertical glide with opacity for paragraphs, cards, and subtext.
 */
interface FadeUpProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    yOffset?: number;
    threshold?: string;
}

export function FadeUp({
    children,
    className = "",
    delay = 0.15,
    duration = 1,
    yOffset = 24,
    threshold = "top 88%",
}: FadeUpProps) {
    const elRef = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => {
        const el = elRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                el,
                {
                    y: yOffset,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration,
                    delay,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: threshold,
                        once: true,
                    },
                }
            );
        }, el);

        return () => ctx.revert();
    }, [delay, duration, threshold, yOffset]);

    return (
        <div ref={elRef} className={`will-change-[transform,opacity] ${className}`}>
            {children}
        </div>
    );
}

/**
 * 8. EXPANDING DIVIDER LINE
 * Scales a gold or subtle line from 0 to 100% width.
 */
interface ExpandLineProps {
    className?: string;
    origin?: "left" | "right" | "center";
    delay?: number;
    duration?: number;
    threshold?: string;
}

export function ExpandLine({
    className = "h-px w-full bg-white/20",
    origin = "left",
    delay = 0,
    duration = 1.1,
    threshold = "top 90%",
}: ExpandLineProps) {
    const lineRef = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => {
        const el = lineRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                el,
                {
                    scaleX: 0,
                    transformOrigin: origin,
                },
                {
                    scaleX: 1,
                    duration,
                    delay,
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: el,
                        start: threshold,
                        once: true,
                    },
                }
            );
        }, el);

        return () => ctx.revert();
    }, [delay, duration, origin, threshold]);

    return <div ref={lineRef} className={`will-change-transform ${className}`} />;
}
