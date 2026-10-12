import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrackingExpand, FadeUp } from "./animations/TextAnimations";

gsap.registerPlugin(ScrollTrigger);

const callouts = [
    {
        number: "01",
        title: "The precious metal",
        copy: "A carefully chosen precious-metal alloy is shaped for strength, then polished to bring out its natural warmth.",
        className: "left-[7%] top-[36%] text-left",
    },
    {
        number: "02",
        title: "The setting",
        copy: "Each setting is refined by hand to hold its stone securely while allowing light to reach every facet.",
        className: "right-[7%] top-[38%] text-right",
    },
    {
        number: "03",
        title: "The finishing",
        copy: "Edges are smoothed, surfaces are brought to a soft sheen, and every detail is checked before a piece is worn.",
        className: "left-[10%] top-[68%] text-left",
    },
    {
        number: "04",
        title: "The stone",
        copy: "Stones are selected for their cut, clarity and character, then set to reveal their natural brilliance.",
        className: "right-[8%] top-[68%] text-right",
    },
];

export default function RingStorySection() {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Header title word masked reveal
            gsap.fromTo(
                ".ring-title-word",
                { yPercent: 115, rotateX: -30, opacity: 0 },
                {
                    yPercent: 0,
                    rotateX: 0,
                    opacity: 1,
                    duration: 1.15,
                    stagger: 0.08,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: "#ring-story-header",
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            // Callouts staggered reveal
            gsap.fromTo(
                ".callout-item",
                { y: 35, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.1,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 55%",
                        once: true,
                    },
                }
            );

            // Callout numbers scale down from 1.4
            gsap.fromTo(
                ".callout-num",
                { scale: 1.4, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.9,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 55%",
                        once: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="ring-story"
            ref={sectionRef}
            aria-labelledby="ring-story-title"
            className="relative z-20 bg-[#f4f3ee] text-[#171614]
                min-h-[250svh]
                sm:min-h-[210svh]
                md:min-h-[170svh]"
        >
            <div className="sticky top-0 flex min-h-[100svh] items-center overflow-hidden">

                {/* ─── SECTION HEADER (centred at top) ─── */}
                <div
                    id="ring-story-header"
                    className="absolute z-10 text-center
                        left-4 right-4 top-[6%]
                        sm:left-10 sm:right-10 sm:top-[10%]
                        lg:top-[10%]"
                >
                    <TrackingExpand
                        className="mb-3 text-[9px] uppercase tracking-[0.35em] text-[#927846] sm:mb-4"
                        threshold="top 80%"
                    >
                        From material to heirloom
                    </TrackingExpand>

                    <h2
                        id="ring-story-title"
                        className="font-serif font-light leading-tight perspective-[1000px]
                            text-3xl
                            sm:text-4xl md:text-5xl lg:text-6xl"
                    >
                        <span className="inline-block overflow-hidden align-top mr-2 pb-[0.1em]">
                            <span className="ring-title-word inline-block will-change-transform">Made</span>
                        </span>
                        <span className="inline-block overflow-hidden align-top mr-2 pb-[0.1em]">
                            <span className="ring-title-word inline-block will-change-transform">to</span>
                        </span>
                        <span className="inline-block overflow-hidden align-top mr-2 pb-[0.1em] sm:mr-3">
                            <span className="ring-title-word inline-block will-change-transform">be</span>
                        </span>
                        <span className="inline-block overflow-hidden align-top pb-[0.1em]">
                            <span className="ring-title-word italic text-[#a88b4d] gold-shimmer-text inline-block will-change-transform">kept.</span>
                        </span>
                    </h2>

                    <FadeUp
                        className="mx-auto mt-3 max-w-xs text-xs leading-6 text-black/55 sm:mt-4 sm:max-w-md sm:text-sm"
                        delay={0.25}
                        threshold="top 80%"
                    >
                        A closer look at the materials and considered craft behind a piece of fine jewellery.
                    </FadeUp>
                </div>

                {/* ─── SVG CALLOUT LINES (tablet/desktop only) ─── */}
                <svg
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
                    viewBox="0 0 1000 700"
                    preserveAspectRatio="none"
                    fill="none"
                >
                    <defs>
                        <marker
                            id="ring-callout-arrow"
                            markerWidth="8"
                            markerHeight="8"
                            refX="6"
                            refY="4"
                            orient="auto"
                        >
                            <path d="M1 1 L6 4 L1 7" stroke="#a88b4d" strokeWidth="1" />
                        </marker>
                    </defs>
                    <g stroke="#a88b4d" strokeOpacity=".72" strokeWidth="1">
                        <path d="M250 270 L370 270 L435 325" markerEnd="url(#ring-callout-arrow)" />
                        <path d="M750 285 L650 285 L575 335" markerEnd="url(#ring-callout-arrow)" />
                        <path d="M260 485 L365 485 L430 410" markerEnd="url(#ring-callout-arrow)" />
                        <path d="M745 490 L650 490 L575 415" markerEnd="url(#ring-callout-arrow)" />
                    </g>
                    <g fill="#a88b4d">
                        <circle cx="435" cy="325" r="3" />
                        <circle cx="575" cy="335" r="3" />
                        <circle cx="430" cy="410" r="3" />
                        <circle cx="575" cy="415" r="3" />
                    </g>
                </svg>

                {/* ─── CALLOUT ARTICLES (tablet/desktop absolute layout) ─── */}
                {callouts.map((callout) => (
                    <article
                        key={callout.number}
                        className={`callout-item absolute z-10 hidden w-[19%] max-w-[240px] will-change-transform md:block ${callout.className}`}
                    >
                        <p className="callout-num mb-3 text-[9px] tracking-[0.2em] text-[#a88b4d] origin-left">
                            {callout.number}
                        </p>
                        <h3 className="font-serif text-2xl font-medium lg:text-3xl">
                            {callout.title}
                        </h3>
                        <p className="mt-3 text-[11px] leading-6 text-black/55 lg:text-xs">
                            {callout.copy}
                        </p>
                    </article>
                ))}

                {/* ─── MOBILE / SMALL-TABLET CALLOUT GRID ───
                    Shown below the ring (which is positioned by Hero's GSAP in this scroll range).
                    We push it down with a top-% so it sits below the 3D ring on smaller screens.
                */}
                <div className="absolute left-4 right-4 z-10 grid grid-cols-2 gap-x-4 gap-y-5 md:hidden
                    bottom-[4%]
                    sm:bottom-[5%] sm:left-8 sm:right-8">
                    {callouts.map((callout) => (
                        <article key={callout.number} className="callout-item border-t border-black/15 pt-3">
                            <p className="callout-num mb-1 text-[8px] tracking-[0.18em] text-[#a88b4d]">
                                {callout.number}
                            </p>
                            <h3 className="font-serif text-base sm:text-lg">{callout.title}</h3>
                            <p className="mt-1 text-[9px] leading-[1.5] text-black/55">
                                {callout.copy}
                            </p>
                        </article>
                    ))}
                </div>

                {/* Scroll hint — desktop only */}
                <p className="absolute bottom-[2.5%] left-1/2 z-10 hidden -translate-x-1/2 text-[8px] uppercase tracking-[0.2em] text-black/40 md:block">
                    Scroll to explore the details
                </p>
            </div>
        </section>
    );
}
