import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: false,
            lerp: 0.08,
        });

        const handleScroll = () => {
            ScrollTrigger.update();
        };

        const update = (time: number) => {
            lenis.raf(time * 1000);
        };

        lenis.on("scroll", handleScroll);

        gsap.ticker.add(update);

        // Prevent GSAP from adding its own lag smoothing
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.off("scroll", handleScroll);
            gsap.ticker.remove(update);
            lenis.destroy();
        };
    }, []);

    return null;
}