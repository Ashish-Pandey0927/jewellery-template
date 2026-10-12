import { BlurReveal, TrackingExpand, FadeUp } from "./animations/TextAnimations";

const categories = [
    { title: "Rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80" },
    { title: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80" },
    { title: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80" },
    { title: "Bridal", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80" },
];

export default function CategorySection() {
    return (
        <section id="categories" className="relative z-0 bg-[#0b0b0b] px-6 py-32 md:px-10 md:py-44 lg:px-16 lg:py-52 xl:px-24">
            <div className="mx-auto max-w-[1500px] pointer-events-auto">
                <div className="mb-20 text-center">
                    <div className="flex items-center justify-center gap-3 mb-5">
                        <span className="h-px w-6 bg-[#c8a96b]/40" />
                        <TrackingExpand className="text-[10px] uppercase tracking-[0.4em] text-[#c8a96b]" threshold="top 85%">
                            Explore
                        </TrackingExpand>
                        <span className="h-px w-6 bg-[#c8a96b]/40" />
                    </div>
                    <BlurReveal threshold="top 85%">
                        <h2 className="font-serif text-5xl font-light md:text-7xl lg:text-8xl text-white">
                            Find Your Signature
                        </h2>
                    </BlurReveal>
                </div>
                <div className="grid gap-4 md:grid-cols-4 lg:gap-6 xl:gap-8">
                    {categories.map((item, i) => (
                        <FadeUp key={item.title} delay={i * 0.12} threshold="top 85%">
                            <div className="group relative aspect-[3/4] overflow-hidden cursor-pointer">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover grayscale transition duration-1000 group-hover:scale-108 group-hover:grayscale-0 will-change-transform"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/90" />
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="overflow-hidden pb-1">
                                        <h3 className="font-serif text-3xl lg:text-4xl text-white transition-transform duration-500 group-hover:-translate-y-1">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <span className="mt-2 block text-[9px] uppercase tracking-[0.3em] text-[#d6bb7d] transition-all duration-300 group-hover:tracking-[0.4em] group-hover:text-white">
                                        Explore Collection →
                                    </span>
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}
