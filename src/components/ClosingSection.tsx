import { PerspectiveTilt, FadeUp, TrackingExpand } from "./animations/TextAnimations";

export default function ClosingSection() {
    return (
        <section id="closing" className="relative z-0 bg-[#030303] min-h-screen flex items-center justify-center text-center px-6 py-28">
            <div className="pointer-events-auto max-w-4xl mx-auto">
                <TrackingExpand className="mb-6 text-[10px] uppercase tracking-[0.45em] text-[#d6bb7d]" threshold="top 80%">
                    The Aurelia Legacy
                </TrackingExpand>

                <PerspectiveTilt threshold="top 80%" duration={1.4}>
                    <h2 className="font-serif text-6xl font-light leading-[0.9] md:text-8xl lg:text-9xl mb-8 text-white">
                        Some things<br />
                        <span className="italic text-[#d6bb7d] gold-shimmer-text">become forever.</span>
                    </h2>
                </PerspectiveTilt>

                <FadeUp
                    className="mt-10 max-w-md mx-auto text-sm leading-7 text-white/70 lg:max-w-lg lg:text-base"
                    delay={0.25}
                    threshold="top 80%"
                >
                    Discover jewellery created to mark the moments that matter.
                </FadeUp>

                <FadeUp delay={0.4} threshold="top 80%">
                    <a
                        href="#collection"
                        className="group relative mt-12 inline-block overflow-hidden border border-[#c8a96b] px-9 py-4 text-[10px] uppercase tracking-[0.35em] text-white transition-all duration-500 hover:text-black hover:border-white"
                    >
                        <span className="absolute inset-0 -translate-x-full bg-[#c8a96b] transition-transform duration-500 ease-out group-hover:translate-x-0" />
                        <span className="relative z-10 transition-colors duration-500">
                            EXPLORE AURELIA
                        </span>
                    </a>
                </FadeUp>
            </div>
        </section>
    );
}
