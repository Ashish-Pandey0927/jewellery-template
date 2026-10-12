import { ArrowUpRight } from "lucide-react";
import { PerspectiveTilt, TrackingExpand, FadeUp } from "./animations/TextAnimations";

export default function CraftsmanshipSection() {
    return (
        <section id="craftsmanship" className="relative z-0 min-h-[85vh] overflow-hidden lg:min-h-screen">
            <img
                src="https://plus.unsplash.com/premium_photo-1661645433820-24c8604e4db5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Jewellery craftsmanship"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/30" />
            <div className="relative z-10 flex min-h-[85vh] items-center px-6 md:px-20 lg:min-h-screen lg:px-32 xl:px-40 pointer-events-auto">
                <div className="max-w-xl">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="h-px w-6 bg-[#d6bb7d]" />
                        <TrackingExpand className="text-[10px] uppercase tracking-[0.4em] text-[#d6bb7d]" threshold="top 80%">
                            THE ART OF CRAFT
                        </TrackingExpand>
                    </div>

                    <PerspectiveTilt threshold="top 80%">
                        <h2 className="font-serif text-6xl font-light leading-[0.9] md:text-8xl lg:text-9xl text-white">
                            Crafted<br />
                            <span className="italic text-[#d6bb7d] gold-shimmer-text">by hand.</span>
                        </h2>
                    </PerspectiveTilt>

                    <FadeUp
                        className="mt-10 max-w-md text-sm leading-7 text-white/75 lg:max-w-lg lg:text-base xl:max-w-xl"
                        delay={0.25}
                        threshold="top 80%"
                    >
                        Every Aurelia piece begins as an idea, becomes a sketch, and is patiently transformed by master artisans into something meant to become part of your story.
                    </FadeUp>

                    <FadeUp delay={0.4} threshold="top 80%">
                        <button className="group mt-10 inline-flex items-center gap-5 border-b border-[#d6bb7d] pb-3 text-[10px] uppercase tracking-[0.3em] text-white transition-all hover:border-white hover:text-[#d6bb7d]">
                            Discover Our Craft
                            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </button>
                    </FadeUp>
                </div>
            </div>
        </section>
    );
}
