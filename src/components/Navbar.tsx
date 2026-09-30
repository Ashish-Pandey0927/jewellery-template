import { useState } from "react";
import {
    Search,
    ShoppingBag,
    Menu,
    X,
    UserRound,
} from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl">
                <div className="mx-auto flex h-24 max-w-[1500px] items-center justify-between px-6 md:px-10 lg:px-16 xl:px-24">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full border border-[#c9aa6a] flex items-center justify-center">
                            <span className="font-serif text-[#d8bc7d]">
                                A
                            </span>
                        </div>

                        <div>
                            <h1 className="font-serif text-xl tracking-[0.25em] text-white">
                                AURELIA
                            </h1>

                            <p className="text-[7px] tracking-[0.45em] text-white/50">
                                FINE JEWELLERY
                            </p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 md:flex lg:gap-12 xl:gap-16">
                        {[
                            "Collections",
                            "New Arrivals",
                            "Bridal",
                            "The House",
                            "Journal",
                        ].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-[11px] uppercase tracking-[0.2em] text-white/70 transition hover:text-[#d5b06a]"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden items-center gap-5 md:flex">
                        <button className="text-white/70 transition hover:text-[#d5b06a]">
                            <Search size={18} strokeWidth={1.3} />
                        </button>

                        <button className="text-white/70 transition hover:text-[#d5b06a]">
                            <UserRound size={18} strokeWidth={1.3} />
                        </button>

                        <button className="relative text-white/70 transition hover:text-[#d5b06a]">
                            <ShoppingBag size={18} strokeWidth={1.3} />

                            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#d5b06a] text-[8px] text-black">
                                0
                            </span>
                        </button>
                    </div>

                    {/* Mobile */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-white md:hidden"
                    >
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {open && (
                <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#090909]">
                    <div className="flex flex-col items-center gap-8">
                        {[
                            "Collections",
                            "New Arrivals",
                            "Bridal",
                            "The House",
                            "Journal",
                        ].map((item) => (
                            <a
                                key={item}
                                href="#"
                                onClick={() => setOpen(false)}
                                className="font-serif text-3xl text-white"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}