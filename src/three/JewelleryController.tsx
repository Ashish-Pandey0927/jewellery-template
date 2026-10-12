import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export function JewelleryController({ modelRef }: { modelRef: React.RefObject<THREE.Group> }) {
    useEffect(() => {
        if (!modelRef.current) return;

        const model = modelRef.current;
        const mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 1024px)",
            isTablet: "(min-width: 768px) and (max-width: 1023px)",
            isMobile: "(max-width: 767px)"
        }, (context) => {
            const isMobile = context.conditions ? context.conditions.isMobile : false;

            // Reset
            gsap.set(model.position, { 
                x: isMobile ? 0 : 2, 
                y: isMobile ? -1 : 0, 
                z: 0 
            });
            gsap.set(model.scale, { x: 1, y: 1, z: 1 });
            gsap.set(model.rotation, { x: 0, y: 0, z: 0 });

            // Hero -> Intro
            gsap.to(model.position, {
                x: isMobile ? 0 : 1.5,
                y: isMobile ? 1 : 1,
                z: isMobile ? -2 : -1,
                scrollTrigger: { trigger: "#intro", start: "top bottom", end: "top top", scrub: 1 },
            });
            gsap.to(model.scale, {
                x: isMobile ? 0.5 : 0.6,
                y: isMobile ? 0.5 : 0.6,
                z: isMobile ? 0.5 : 0.6,
                scrollTrigger: { trigger: "#intro", start: "top bottom", end: "top top", scrub: 1 },
            });
            gsap.to(model.rotation, {
                y: Math.PI,
                scrollTrigger: { trigger: "#intro", start: "top bottom", end: "top top", scrub: 1 },
            });

            // Intro -> Collection
            gsap.to(model.position, {
                x: isMobile ? 0 : -2,
                y: isMobile ? -1 : 0,
                z: isMobile ? -1 : 0,
                scrollTrigger: { trigger: "#collection", start: "top bottom", end: "top top", scrub: 1 },
            });
            gsap.to(model.rotation, {
                y: Math.PI * 2.5,
                x: Math.PI * 0.2,
                scrollTrigger: { trigger: "#collection", start: "top bottom", end: "top top", scrub: 1 },
            });

            // Collection -> Craftsmanship
            gsap.to(model.position, {
                x: isMobile ? 0 : 2,
                y: isMobile ? 0 : 0.5,
                z: isMobile ? 0 : 1,
                scrollTrigger: { trigger: "#craftsmanship", start: "top bottom", end: "top top", scrub: 1 },
            });
            gsap.to(model.scale, {
                x: isMobile ? 0.6 : 0.8,
                y: isMobile ? 0.6 : 0.8,
                z: isMobile ? 0.6 : 0.8,
                scrollTrigger: { trigger: "#craftsmanship", start: "top bottom", end: "top top", scrub: 1 },
            });

            // Craftsmanship -> Materials
            gsap.to(model.position, {
                x: 0,
                y: 0,
                z: isMobile ? 1 : 3,
                scrollTrigger: { trigger: "#materials", start: "top bottom", end: "top top", scrub: 1 },
            });
            gsap.to(model.scale, {
                x: isMobile ? 1.2 : 1.5,
                y: isMobile ? 1.2 : 1.5,
                z: isMobile ? 1.2 : 1.5,
                scrollTrigger: { trigger: "#materials", start: "top bottom", end: "top top", scrub: 1 },
            });
            gsap.to(model.rotation, {
                y: Math.PI * 4,
                x: 0,
                scrollTrigger: { trigger: "#materials", start: "top bottom", end: "bottom bottom", scrub: 1 },
            });

            // Materials -> Categories
            gsap.to(model.position, {
                x: isMobile ? 0 : -3,
                y: isMobile ? -1 : 1,
                z: isMobile ? -1 : -2,
                scrollTrigger: { trigger: "#categories", start: "top bottom", end: "top top", scrub: 1 },
            });
            gsap.to(model.scale, {
                x: isMobile ? 0.4 : 0.5,
                y: isMobile ? 0.4 : 0.5,
                z: isMobile ? 0.4 : 0.5,
                scrollTrigger: { trigger: "#categories", start: "top bottom", end: "top top", scrub: 1 },
            });

            // Categories -> Closing
            gsap.to(model.position, {
                x: 0,
                y: isMobile ? 1 : 0,
                z: 0,
                scrollTrigger: { trigger: "#closing", start: "top bottom", end: "top top", scrub: 1 },
            });
            gsap.to(model.scale, {
                x: isMobile ? 0.8 : 1,
                y: isMobile ? 0.8 : 1,
                z: isMobile ? 0.8 : 1,
                scrollTrigger: { trigger: "#closing", start: "top bottom", end: "top top", scrub: 1 },
            });
            gsap.to(model.rotation, {
                y: Math.PI * 6,
                scrollTrigger: { trigger: "#closing", start: "top bottom", end: "top top", scrub: 1 },
            });
            
            // Hide on Newsletter/Footer
            gsap.to(model.position, {
                y: 5,
                scrollTrigger: { trigger: "#newsletter", start: "top bottom", end: "top top", scrub: 1 },
            });
        });

        return () => mm.revert();
    }, [modelRef]);

    return null;
}
