import { PrismaticWipe, FadeUp, ExpandLine } from "./animations/TextAnimations";

const pillars = [
    { title: "Precision", desc: "Crafted within fractions of a millimeter" },
    { title: "Material", desc: "18K solid gold & certified gemstones" },
    { title: "Light", desc: "Cut for maximum fire and facet brilliance" },
    { title: "Form", desc: "Sculpted for enduring balance and comfort" },
];

export default function MaterialsSection() {
    return (
        <section
            id="materials"
            className="relative z-0 bg-[#060606] px-6 py-32 text-white overflow-hidden min-h-screen flex items-center md:px-10 md:py-44 lg:px-16 lg:py-52 xl:px-24"
        >
            <div className="mx-auto max-w-[1200px] w-full flex flex-col md:flex-row justify-between items-center pointer-events-auto gap-12">
                <div className="md:w-1/2">
                    <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-[#d6bb7d]">
                        Architectural Integrity
                    </p>
                    <PrismaticWipe threshold="top 75%">
                        <h2 className="font-serif text-5xl font-light leading-tight md:text-7xl lg:text-8xl mb-8">
                            Beauty,<br />
                            <span className="italic text-[#d6bb7d] gold-shimmer-text">in every facet.</span>
                        </h2>
                    </PrismaticWipe>
                    <FadeUp
                        className="max-w-md text-sm leading-7 text-white/70 lg:text-base"
                        delay={0.2}
                        threshold="top 75%"
                    >
                        Every reflection reveals another detail. Every curve is a study in proportion, light, and the art of precision.
                    </FadeUp>
                </div>

                <div className="w-full md:w-5/12 flex flex-col gap-8 text-right">
                    {pillars.map((pillar, i) => (
                        <div key={pillar.title} className="group cursor-default">
                            <div className="flex items-baseline justify-end gap-3 mb-2">
                                <span className="text-[9px] text-[#d6bb7d]/50 font-mono tracking-widest">
                                    0{i + 1}
                                </span>
                                <h4 className="text-[#c8a96b] text-[11px] uppercase tracking-[0.3em] font-medium transition-colors duration-300 group-hover:text-white">
                                    {pillar.title}
                                </h4>
                            </div>
                            <p className="text-[10px] text-white/45 tracking-wider mb-3 transition-colors duration-300 group-hover:text-white/70">
                                {pillar.desc}
                            </p>
                            <ExpandLine
                                origin="right"
                                delay={i * 0.12}
                                threshold="top 80%"
                                className="h-px w-full bg-gradient-to-l from-white/30 via-white/10 to-transparent transition-all duration-300 group-hover:from-[#d6bb7d]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
