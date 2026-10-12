type ProductCardProps = {
    image: string;
    name: string;
    price: string;
    category: string;
};

export default function ProductCard({
    image,
    name,
    price,
    category,
}: ProductCardProps) {
    return (
        <div className="group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#e9e5dc]">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/80 p-4 backdrop-blur-md transition duration-500 group-hover:translate-y-0">
                    <button className="w-full border border-white/30 py-3 text-[10px] uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-black">
                        Discover Piece
                    </button>
                </div>
            </div>

            <div className="mt-5 flex items-start justify-between lg:mt-6">
                <div>
                    <p className="mb-1 text-[9px] uppercase tracking-[0.25em] text-neutral-500 transition-colors duration-300 group-hover:text-[#927846] lg:text-[10px]">
                        {category}
                    </p>

                    <h3 className="font-serif text-xl text-[#171614] transition-all duration-300 group-hover:translate-x-1 lg:text-2xl">
                        {name}
                    </h3>
                </div>

                <p className="text-sm text-neutral-600 transition-colors duration-300 group-hover:text-[#171614] lg:text-base font-medium">
                    {price}
                </p>
            </div>
        </div>
    );
}