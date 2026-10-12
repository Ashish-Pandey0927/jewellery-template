import { useLayoutEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrackingExpand, FadeUp } from "./animations/TextAnimations";

gsap.registerPlugin(ScrollTrigger);

export default function EditorialSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const sparklesRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Sparkles icon spin & scale pulse
            if (sparklesRef.current) {
                gsap.fromTo(
                    sparklesRef.current,
                    { scale: 0, rotate: -180, opacity: 0 },
                    {
                        scale: 1,
                        rotate: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 75%",
                            once: true,
                        },
                    }
                );
            }

            // Word-by-word kinetic slide up
            gsap.fromTo(
                ".editorial-word",
                { yPercent: 120, rotateZ: 3, opacity: 0 },
                {
                    yPercent: 0,
                    rotateZ: 0,
                    opacity: 1,
                    duration: 1.1,
                    stagger: 0.06,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: "#editorial-heading",
                        start: "top 80%",
                        once: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="intro"
            ref={sectionRef}
            className="relative z-0 bg-[#f3efe7] px-6 py-32 text-[#171614] md:px-10 md:py-44 lg:px-16 lg:py-52 xl:px-24"
        >
            <div className="mx-auto max-w-[1200px] text-left md:text-center pointer-events-auto">
                <div ref={sparklesRef} className="mb-8 inline-block md:mx-auto">
                    <Sparkles size={22} strokeWidth={1} className="text-[#a88b4d] slow-pulse" />
                </div>

                <div className="flex items-center justify-start md:justify-center gap-4 mb-8">
                    <span className="hidden md:block h-px w-8 bg-[#927846]/40" />
                    <TrackingExpand className="text-[10px] uppercase tracking-[0.4em] text-[#927846]" threshold="top 80%">
                        A House of Fine Jewellery
                    </TrackingExpand>
                    <span className="hidden md:block h-px w-8 bg-[#927846]/40" />
                </div>

                <h2
                    id="editorial-heading"
                    className="font-serif text-5xl font-light leading-tight md:text-7xl lg:text-8xl perspective-[1000px]"
                >
                    <div className="overflow-hidden pb-2">
                        <span className="editorial-word inline-block mr-3 will-change-transform">Jewellery</span>
                        <span className="editorial-word inline-block will-change-transform">should</span>
                    </div>
                    <div className="overflow-hidden pb-3">
                        <span className="editorial-word italic text-[#a88b4d] gold-shimmer-text inline-block mr-3 will-change-transform">
                            outlive
                        </span>
                        <span className="editorial-word italic text-[#a88b4d] gold-shimmer-text inline-block mr-3 will-change-transform">
                            the
                        </span>
                        <span className="editorial-word italic text-[#a88b4d] gold-shimmer-text inline-block will-change-transform">
                            moment.
                        </span>
                    </div>
                </h2>

                <FadeUp
                    className="mt-10 max-w-xl text-sm leading-8 text-neutral-600 md:mx-auto lg:max-w-2xl lg:text-base xl:max-w-3xl"
                    delay={0.3}
                    threshold="top 75%"
                >
                    Aurelia brings together rare stones, sculptural design and meticulous craftsmanship to create pieces with a life of their own.
                </FadeUp>
            </div>
        </section>
    );
}
