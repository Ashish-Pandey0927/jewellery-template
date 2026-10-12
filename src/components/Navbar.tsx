import { useState } from "react";
import {
    Search,
    ShoppingBag,
    Menu,
    X,
} from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="absolute left-0 top-0 z-50 w-full text-[#242321]">
                <div className="mx-auto flex h-16 max-w-[1800px] items-center justify-between px-6 sm:px-9 lg:px-12">
                    <span className="text-[10px] tracking-[0.04em] text-black/65">
                        Est. 2020
                    </span>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        {[
                            { label: "Collections", href: "#collection" },
                            { label: "About", href: "#intro" },
                            { label: "Contacts", href: "#newsletter" },
                        ].map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                className="text-[10px] transition-colors hover:text-black/55"
                            >
                                {label}
                            </a>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden items-center gap-5 md:flex">
                        <button className="flex items-center gap-2 text-[10px] transition-colors hover:text-black/55">
                            Search
                            <Search size={13} strokeWidth={1.4} />
                        </button>
                        <button className="flex items-center gap-2 text-[10px] transition-colors hover:text-black/55">
                            Cart
                            <ShoppingBag size={13} strokeWidth={1.4} />
                        </button>
                    </div>

                    {/* Mobile */}
                    <button
                        onClick={() => setOpen(!open)}
                        aria-label={open ? "Close menu" : "Open menu"}
                        className="text-black md:hidden"
                    >
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {open && (
                <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#f4f3ee] text-[#141414]">
                    <div className="flex flex-col items-center gap-8">
                        {[
                            { label: "Collections", href: "#collection" },
                            { label: "About", href: "#intro" },
                            { label: "Contacts", href: "#newsletter" },
                        ].map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                onClick={() => setOpen(false)}
                                className="font-serif text-3xl"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}