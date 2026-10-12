import { MaskedWords, TrackingExpand, FadeUp, ExpandLine } from "./animations/TextAnimations";

export default function Newsletter() {
    return (
        <section id="newsletter" className="relative z-0 bg-[#f3efe7] px-6 py-28 text-center text-[#171614] lg:py-40">
            <div className="pointer-events-auto max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-5">
                    <span className="h-px w-6 bg-[#927846]/40" />
                    <TrackingExpand className="text-[10px] uppercase tracking-[0.4em] text-[#927846]" threshold="top 85%">
                        Private Correspondence
                    </TrackingExpand>
                    <span className="h-px w-6 bg-[#927846]/40" />
                </div>

                <h2 className="font-serif text-5xl font-light md:text-6xl lg:text-7xl">
                    <MaskedWords threshold="top 85%">
                        <span className="inline-block overflow-hidden pb-1 align-top mr-3">
                            <span className="masked-word-inner inline-block">Enter</span>
                        </span>
                        <span className="inline-block overflow-hidden pb-1 align-top mr-3">
                            <span className="masked-word-inner inline-block">the</span>
                        </span>
                        <span className="inline-block overflow-hidden pb-1 align-top mr-3">
                            <span className="masked-word-inner inline-block">world</span>
                        </span>
                        <span className="inline-block overflow-hidden pb-1 align-top mr-3">
                            <span className="masked-word-inner inline-block">of</span>
                        </span>
                        <span className="inline-block overflow-hidden pb-1 align-top">
                            <span className="masked-word-inner italic text-[#927846] gold-shimmer-text inline-block">Aurelia.</span>
                        </span>
                    </MaskedWords>
                </h2>

                <FadeUp className="mx-auto mt-6 max-w-md text-sm leading-7 text-neutral-500 lg:max-w-lg lg:text-base" delay={0.2} threshold="top 85%">
                    Receive invitations to private previews, new collections and stories from the house.
                </FadeUp>

                <FadeUp delay={0.35} threshold="top 85%">
                    <div className="relative mx-auto mt-10 max-w-md lg:max-w-lg">
                        <div className="flex items-center">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 bg-transparent px-2 py-4 text-sm outline-none placeholder:text-neutral-400 transition-colors focus:placeholder:text-neutral-600"
                            />
                            <button className="px-4 py-2 text-[10px] uppercase tracking-[0.25em] transition-all hover:tracking-[0.35em] hover:text-[#927846]">
                                Subscribe →
                            </button>
                        </div>
                        <ExpandLine origin="center" delay={0.4} threshold="top 85%" className="h-px w-full bg-black/40" />
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}
