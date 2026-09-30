import {
    ArrowDown,
    ArrowUpRight,
    Sparkles,
} from "lucide-react";

import Navbar from "../components/Navbar";
import JewelryScene from "../components/JewelryScene";
import ProductCard from "../components/ProductCard";

const products = [
    {
        image:
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
        name: "Celeste Solitaire",
        category: "Rings",
        price: "₹1,85,000",
    },
    {
        image:
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
        name: "Élan Necklace",
        category: "Necklaces",
        price: "₹2,40,000",
    },
    {
        image:
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
        name: "Lumière Earrings",
        category: "Earrings",
        price: "₹1,65,000",
    },
];

export default function Home() {
    return (
        <main className="bg-[#090909] text-white">

            <Navbar />

            {/* ================= HERO ================= */}

            <section className="relative min-h-screen overflow-hidden">

                {/* Background */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=2200&q=90"
                        alt=""
                        className="h-full w-full object-cover opacity-30"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-black/40" />
                </div>

                {/* 3D */}
                <div className="absolute right-[-12%] top-[12%] h-[75vh] w-[65vw] md:right-[-5%] md:w-[58vw] lg:right-0 lg:w-[50vw] xl:w-[45vw]">
                    <JewelryScene />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-end px-6 pb-20 md:px-10 md:pb-28 lg:px-16 xl:px-24">

                    <div className="max-w-3xl">

                        <div className="mb-8 flex items-center gap-4">
                            <div className="h-px w-12 bg-[#c8a96b]" />

                            <span className="text-[10px] uppercase tracking-[0.45em] text-[#d6bb7d]">
                                The New Collection · 2026
                            </span>
                        </div>

                        <h1 className="font-serif text-[18vw] font-light leading-[0.78] tracking-[-0.06em] md:text-[9rem] lg:text-[10rem] xl:text-[11rem]">
                            Made
                            <br />

                            <span className="ml-[8vw] italic text-[#d7bc7b] md:ml-28">
                                Eternal.
                            </span>
                        </h1>

                        <p className="mt-10 max-w-md text-sm font-light leading-7 text-white/60 md:text-base lg:max-w-lg lg:text-lg">
                            Sculptural forms, exceptional stones and generations
                            of craftsmanship. Jewellery created not for a moment,
                            but for everything that follows.
                        </p>

                        <div className="mt-10 flex items-center gap-8">
                            <button className="group flex items-center gap-5 border border-[#c8a96b] px-7 py-4 text-[10px] uppercase tracking-[0.3em] transition hover:bg-[#c8a96b] hover:text-black">
                                Explore Collection

                                <ArrowUpRight
                                    size={15}
                                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </button>

                            <button className="hidden text-[10px] uppercase tracking-[0.3em] text-white/50 transition hover:text-white md:block lg:text-[12px]">
                                Discover Our Story
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scroll */}
                <div className="absolute bottom-8 right-8 hidden items-center gap-3 md:flex lg:bottom-12 lg:right-12">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">
                        Scroll to explore
                    </span>

                    <ArrowDown
                        size={14}
                        className="animate-bounce text-[#c8a96b]"
                    />
                </div>
            </section>

            {/* ================= INTRO ================= */}

            <section className="bg-[#f3efe7] px-6 py-32 text-[#171614] md:px-10 md:py-44 lg:px-16 lg:py-52 xl:px-24">
                <div className="mx-auto max-w-[1200px] text-center">

                    <Sparkles
                        size={20}
                        strokeWidth={1}
                        className="mx-auto mb-8 text-[#a88b4d]"
                    />

                    <p className="mb-8 text-[10px] uppercase tracking-[0.4em] text-[#927846]">
                        A House of Fine Jewellery
                    </p>

                    <h2 className="font-serif text-5xl font-light leading-tight md:text-7xl lg:text-8xl">
                        Jewellery should
                        <br />

                        <span className="italic text-[#a88b4d]">
                            outlive the moment.
                        </span>
                    </h2>

                    <p className="mx-auto mt-10 max-w-xl text-sm leading-8 text-neutral-600 lg:max-w-2xl lg:text-base xl:max-w-3xl">
                        Aurelia brings together rare stones, sculptural design and
                        meticulous craftsmanship to create pieces with a life of
                        their own.
                    </p>

                </div>
            </section>

            {/* ================= COLLECTION ================= */}

            <section className="bg-[#f3efe7] px-6 pb-32 text-[#171614] md:px-10 md:pb-44 lg:px-16 lg:pb-52 xl:px-24">

                <div className="mx-auto max-w-[1500px]">

                    <div className="mb-16 flex items-end justify-between">

                        <div>
                            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#927846]">
                                The Edit
                            </p>

                            <h2 className="font-serif text-5xl font-light md:text-6xl lg:text-7xl">
                                Signature Pieces
                            </h2>
                        </div>

                        <button className="hidden items-center gap-3 text-[10px] uppercase tracking-[0.3em] md:flex">
                            View All
                            <ArrowUpRight size={15} />
                        </button>

                    </div>

                    <div className="grid gap-8 md:grid-cols-3 lg:gap-12 xl:gap-16">
                        {products.map((product) => (
                            <ProductCard
                                key={product.name}
                                {...product}
                            />
                        ))}
                    </div>

                </div>
            </section>

            {/* ================= EDITORIAL ================= */}

            <section className="relative min-h-[85vh] overflow-hidden lg:min-h-screen">

                <img
                    src="https://images.unsplash.com/photo-1598560912005-59a0f8a859e2?auto=format&fit=crop&w=2200&q=90"
                    alt="Jewellery craftsmanship"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/45" />

                <div className="relative z-10 flex min-h-[85vh] items-center px-6 md:px-20 lg:min-h-screen lg:px-32 xl:px-40">

                    <div className="max-w-xl">

                        <p className="mb-8 text-[10px] uppercase tracking-[0.4em] text-[#d6bb7d]">
                            The Art of Craft
                        </p>

                        <h2 className="font-serif text-6xl font-light leading-[0.9] md:text-8xl lg:text-9xl">
                            Crafted
                            <br />
                            <span className="italic text-[#d6bb7d]">
                                by hand.
                            </span>
                        </h2>

                        <p className="mt-10 max-w-md text-sm leading-7 text-white/70 lg:max-w-lg lg:text-base xl:max-w-xl">
                            Every Aurelia piece begins as an idea, becomes a sketch,
                            and is patiently transformed by master artisans into
                            something meant to become part of your story.
                        </p>

                        <button className="mt-10 flex items-center gap-5 border-b border-[#d6bb7d] pb-3 text-[10px] uppercase tracking-[0.3em] text-white">
                            Discover Our Craft
                            <ArrowUpRight size={15} />
                        </button>

                    </div>
                </div>
            </section>

            {/* ================= CATEGORIES ================= */}

            <section className="bg-[#0b0b0b] px-6 py-32 md:px-10 md:py-44 lg:px-16 lg:py-52 xl:px-24">

                <div className="mx-auto max-w-[1500px]">

                    <div className="mb-20 text-center">

                        <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-[#c8a96b]">
                            Explore
                        </p>

                        <h2 className="font-serif text-5xl font-light md:text-7xl lg:text-8xl">
                            Find Your Signature
                        </h2>

                    </div>

                    <div className="grid gap-4 md:grid-cols-4 lg:gap-6 xl:gap-8">

                        {[
                            {
                                title: "Rings",
                                image:
                                    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80",
                            },
                            {
                                title: "Necklaces",
                                image:
                                    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80",
                            },
                            {
                                title: "Earrings",
                                image:
                                    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80",
                            },
                            {
                                title: "Bridal",
                                image:
                                    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="group relative aspect-[3/4] overflow-hidden"
                            >

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover grayscale transition duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                <div className="absolute bottom-8 left-8">
                                    <h3 className="font-serif text-3xl lg:text-4xl">
                                        {item.title}
                                    </h3>

                                    <span className="mt-3 block text-[9px] uppercase tracking-[0.3em] text-white/60">
                                        Explore
                                    </span>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section>

            {/* ================= NEWSLETTER ================= */}

            <section className="bg-[#f3efe7] px-6 py-28 text-center text-[#171614] lg:py-40">

                <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-[#927846]">
                    Private Correspondence
                </p>

                <h2 className="font-serif text-5xl font-light md:text-6xl lg:text-7xl">
                    Enter the world of Aurelia.
                </h2>

                <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-neutral-500 lg:max-w-lg lg:text-base">
                    Receive invitations to private previews, new collections
                    and stories from the house.
                </p>

                <div className="mx-auto mt-10 flex max-w-md border-b border-black/30 lg:max-w-lg">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="flex-1 bg-transparent px-2 py-4 text-sm outline-none placeholder:text-neutral-400"
                    />

                    <button className="px-3 text-[10px] uppercase tracking-[0.25em]">
                        Subscribe
                    </button>
                </div>

            </section>

            {/* ================= FOOTER ================= */}

            <footer className="bg-[#080808] px-6 py-20 md:px-10 lg:px-16 lg:py-28 xl:px-24">

                <div className="mx-auto max-w-[1500px]">

                    <div className="grid gap-12 border-b border-white/10 pb-16 md:grid-cols-4">

                        <div className="md:col-span-2">

                            <h2 className="font-serif text-4xl tracking-[0.15em] lg:text-5xl">
                                AURELIA
                            </h2>

                            <p className="mt-6 max-w-sm text-sm leading-7 text-white/40 lg:text-base">
                                Fine jewellery shaped by light, craftsmanship and
                                timeless design.
                            </p>

                        </div>

                        <div>
                            <p className="mb-5 text-[9px] uppercase tracking-[0.3em] text-white/40">
                                Explore
                            </p>

                            <div className="flex flex-col gap-3 text-sm text-white/70">
                                <a href="#">Collections</a>
                                <a href="#">New Arrivals</a>
                                <a href="#">Bridal</a>
                                <a href="#">Journal</a>
                            </div>
                        </div>

                        <div>
                            <p className="mb-5 text-[9px] uppercase tracking-[0.3em] text-white/40">
                                House
                            </p>

                            <div className="flex flex-col gap-3 text-sm text-white/70">
                                <a href="#">Our Story</a>
                                <a href="#">Craftsmanship</a>
                                <a href="#">Contact</a>
                                <a href="#">Appointments</a>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col justify-between gap-5 pt-8 text-[9px] uppercase tracking-[0.25em] text-white/30 md:flex-row">
                        <span>© 2026 Aurelia Fine Jewellery</span>
                        <span>Made with intention</span>
                    </div>

                </div>

            </footer>

        </main>
    );
}