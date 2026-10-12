import { CharWave, TrackingExpand, FadeUp } from "./animations/TextAnimations";

export default function Footer() {
    return (
        <footer id="footer" className="relative z-0 bg-[#080808] px-6 py-20 md:px-10 lg:px-16 lg:py-28 xl:px-24">
            <div className="mx-auto max-w-[1500px] pointer-events-auto">
                <div className="grid gap-12 border-b border-white/10 pb-16 md:grid-cols-4 text-white">
                    <div className="md:col-span-2">
                        <h2 className="font-serif text-4xl tracking-[0.2em] lg:text-5xl">
                            <CharWave text="AURELIA" threshold="top 90%" />
                        </h2>
                        <FadeUp className="mt-6 max-w-sm text-sm leading-7 text-white/45 lg:text-base" delay={0.2} threshold="top 90%">
                            Fine jewellery shaped by light, craftsmanship and timeless design.
                        </FadeUp>
                    </div>
                    <div>
                        <TrackingExpand className="mb-5 text-[9px] uppercase tracking-[0.3em] text-[#d6bb7d]" threshold="top 90%">
                            Explore
                        </TrackingExpand>
                        <FadeUp delay={0.15} threshold="top 90%">
                            <div className="flex flex-col gap-3 text-sm text-white/70">
                                <a href="#collection" className="transition-colors hover:text-[#d6bb7d]">Collections</a>
                                <a href="#categories" className="transition-colors hover:text-[#d6bb7d]">New Arrivals</a>
                                <a href="#categories" className="transition-colors hover:text-[#d6bb7d]">Bridal</a>
                                <a href="#intro" className="transition-colors hover:text-[#d6bb7d]">Journal</a>
                            </div>
                        </FadeUp>
                    </div>
                    <div>
                        <TrackingExpand className="mb-5 text-[9px] uppercase tracking-[0.3em] text-[#d6bb7d]" threshold="top 90%">
                            House
                        </TrackingExpand>
                        <FadeUp delay={0.25} threshold="top 90%">
                            <div className="flex flex-col gap-3 text-sm text-white/70">
                                <a href="#ring-story" className="transition-colors hover:text-[#d6bb7d]">Our Story</a>
                                <a href="#craftsmanship" className="transition-colors hover:text-[#d6bb7d]">Craftsmanship</a>
                                <a href="#newsletter" className="transition-colors hover:text-[#d6bb7d]">Contact</a>
                                <a href="#closing" className="transition-colors hover:text-[#d6bb7d]">Appointments</a>
                            </div>
                        </FadeUp>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-5 pt-8 text-[9px] uppercase tracking-[0.25em] text-white/30 md:flex-row">
                    <span>© 2026 Aurelia Fine Jewellery</span>
                    <span className="tracking-[0.3em]">Made with intention</span>
                </div>
            </div>
        </footer>
    );
}
