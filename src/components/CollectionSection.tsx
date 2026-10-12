import ProductCard from "./ProductCard";
import { ArrowUpRight } from "lucide-react";
import { products } from "../data/products";
import { CharWave, TrackingExpand, FadeUp } from "./animations/TextAnimations";

export default function CollectionSection() {
    return (
        <section
            id="collection"
            className="relative z-0 bg-[#f3efe7] px-6 pb-32 text-[#171614] md:px-10 md:pb-44 lg:px-16 lg:pb-52 xl:px-24"
        >
            <div className="mx-auto max-w-[1500px] pointer-events-auto">
                <div className="mb-16 flex items-end justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#927846] slow-pulse" />
                            <TrackingExpand className="text-[10px] uppercase tracking-[0.35em] text-[#927846]" threshold="top 85%">
                                The Edit
                            </TrackingExpand>
                        </div>
                        <h2 className="font-serif text-5xl font-light md:text-6xl lg:text-7xl">
                            <CharWave text="Objects of desire." threshold="top 85%" />
                        </h2>
                    </div>
                    <FadeUp delay={0.2} threshold="top 85%">
                        <button className="group hidden items-center gap-3 text-[10px] uppercase tracking-[0.3em] transition-colors hover:text-[#927846] md:flex">
                            View All
                            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                    </FadeUp>
                </div>
                <div className="grid gap-8 md:grid-cols-3 lg:gap-12 xl:gap-16">
                    {products.map((product, i) => (
                        <FadeUp key={product.name} delay={i * 0.12} threshold="top 85%">
                            <ProductCard {...product} />
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}
