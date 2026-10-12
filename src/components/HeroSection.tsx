import { Suspense, useLayoutEffect, useMemo, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

const detailImage =
    "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=500&q=85";
const accentImage =
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=85";

interface RingAnimState {
    scale: number;
    rotX: number;
    rotY: number;
    rotZ: number;
}

function HeroRingModel({ animRef }: { animRef: { current: RingAnimState } }) {
    const spinRef = useRef<THREE.Group>(null);
    const animGroupRef = useRef<THREE.Group>(null);
    const { scene } = useGLTF("/ring_02/scene.gltf");
    const ringScene = useMemo(() => {
        const clone = scene.clone(true);
        clone.traverse((object) => {
            if (!(object instanceof THREE.Mesh)) return;

            const updateMaterial = (material: THREE.Material) => {
                const copy = material.clone();
                if (copy instanceof THREE.MeshStandardMaterial && copy.name === "Mat2") {
                    copy.color.set("#d2ac61");
                    copy.metalness = 0.1;
                    copy.roughness = 0.3;
                }
                return copy;
            };

            object.material = Array.isArray(object.material)
                ? object.material.map(updateMaterial)
                : updateMaterial(object.material);
        });
        return clone;
    }, [scene]);

    useFrame((_, delta) => {
        // Continuous luxury idle spin around Z
        if (spinRef.current) {
            spinRef.current.rotation.z += delta * 0.25;
        }

        // Scroll-driven rotation and scale (20% smaller in section 2)
        if (animGroupRef.current && animRef.current) {
            const currentAnim = animRef.current;
            animGroupRef.current.rotation.y = THREE.MathUtils.lerp(
                animGroupRef.current.rotation.y,
                Math.PI / 4 + currentAnim.rotY,
                0.1
            );
            animGroupRef.current.rotation.x = THREE.MathUtils.lerp(
                animGroupRef.current.rotation.x,
                currentAnim.rotX,
                0.1
            );
            animGroupRef.current.rotation.z = THREE.MathUtils.lerp(
                animGroupRef.current.rotation.z,
                currentAnim.rotZ,
                0.1
            );

            // Hero section base scale is 0.7. In section 2, scale is 0.8 (20% smaller: 0.7 * 0.8 = 0.56)
            const targetScale = 0.7 * currentAnim.scale;
            const currentScale = animGroupRef.current.scale.x;
            const nextScale = THREE.MathUtils.lerp(currentScale, targetScale, 0.1);
            animGroupRef.current.scale.setScalar(nextScale);
        }
    });

    return (
        <group ref={animGroupRef} rotation={[0, Math.PI / 4, 0]} scale={0.7}>
            <group ref={spinRef}>
                <primitive object={ringScene} />
            </group>
        </group>
    );
}

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const ringCanvasRef = useRef<HTMLDivElement>(null);
    const animRef = useRef<RingAnimState>({
        scale: 1,
        rotX: 0,
        rotY: 0,
        rotZ: 0,
    });

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const ringStorySection = document.getElementById("ring-story");

            // Hero typography reveal: monumental masked horizon rise
            gsap.fromTo(
                "[data-hero-title]",
                { yPercent: 115, rotateZ: 1.5, opacity: 0 },
                { yPercent: 0, rotateZ: 0, opacity: 1, duration: 1.35, ease: "power4.out" }
            );
            gsap.fromTo(
                "[data-hero-subtitle]",
                { yPercent: 115, rotateZ: -1.5, opacity: 0 },
                { yPercent: 0, rotateZ: 0, opacity: 1, duration: 1.35, delay: 0.12, ease: "power4.out" }
            );
            gsap.fromTo(
                "[data-hero-reveal]",
                { y: 22, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.08, delay: 0.3, ease: "power3.out" }
            );

            if (ringStorySection && ringCanvasRef.current) {
                const isMobile = window.innerWidth < 640;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ringStorySection,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.2,
                        invalidateOnRefresh: true,
                    },
                });

                // Phase 1 (0 -> 100): Transition from Hero to RingStory
                tl.fromTo(
                    ringCanvasRef.current,
                    {
                        x: () => (window.innerWidth < 640 ? 0 : window.innerWidth < 1024 ? 40 : 80),
                        y: 0,
                    },
                    {
                        x: 0,
                        y: isMobile ? -10 : -18,
                        ease: "power1.inOut",
                        duration: 100,
                    },
                    0
                );

                tl.to(
                    animRef.current,
                    {
                        scale: 0.8, // 20% smaller in section 2
                        rotY: Math.PI * 2, // Full 360-degree showcase rotation
                        rotX: 0.28, // Subtle 3D tilt showing the ring head & stone
                        rotZ: 0.12, // Subtle dynamic roll
                        ease: "power1.inOut",
                        duration: 100,
                    },
                    0
                );

                // Phase 2 (100 -> 170): RingStory section sticky hold
                // Phase 3 (170 -> 270): Exit lockstep with Section 2
                tl.to(
                    ringCanvasRef.current,
                    {
                        y: () => -(window.innerHeight + 18),
                        ease: "none",
                        duration: 100,
                    },
                    170
                );
            }
        }, sectionRef);

        return () => context.revert();
    }, []);

    return (
        <section
            id="hero"
            ref={sectionRef}
            className="relative z-30 min-h-screen bg-[#f4f3ee] text-[#141414]"
        >
            <div className="relative mx-auto min-h-screen max-w-[1800px] px-5 pb-8 pt-20 sm:px-9 sm:pt-24 lg:px-12 lg:pt-24">

                {/* White bottom strip — only on desktop */}
                <div className="absolute inset-x-0 bottom-0 z-0 hidden h-[21%] bg-white lg:block" />

                {/* ─── BIG DISPLAY TYPOGRAPHY ─── */}
                <div className="pointer-events-none absolute inset-x-0 z-0 select-none
                    top-[10%]
                    sm:top-[14%]"
                >
                    {/* "Aurelia" — always visible, scales from 26vw on phone to 18vw on desktop */}
                    <div className="overflow-hidden pb-2 sm:pb-3">
                        <h1
                            data-hero-title
                            className="whitespace-nowrap font-medium leading-[0.72] will-change-transform
                                tracking-[-0.09em] text-[26vw]
                                sm:tracking-[-0.105em] sm:text-[21vw]
                                lg:text-[18vw]"
                        >
                            Aurelia
                        </h1>
                    </div>
                    {/* "atelier" — always visible */}
                    <div className="overflow-hidden pb-2 sm:pb-3">
                        <p
                            data-hero-subtitle
                            className="text-right font-medium leading-[0.72] will-change-transform
                                tracking-[-0.09em] text-[21vw]
                                mt-[7vh] sm:mt-[13vh] sm:tracking-[-0.105em] sm:text-[17vw]
                                lg:mt-[7vh] lg:text-[14vw]"
                        >
                            atelier
                        </p>
                    </div>
                </div>

                {/* ─── ACCENT IMAGES (hidden on mobile) ─── */}
                <div className="absolute right-[5%] top-[16%] z-10 hidden w-[15%] max-w-[220px] overflow-hidden sm:block">
                    <img
                        src={accentImage}
                        alt="Close-up of fine jewellery"
                        className="aspect-[1.45] w-full object-cover"
                        loading="eager"
                    />
                </div>

                <div className="absolute bottom-[19%] left-[5%] z-10 hidden w-[14%] max-w-[190px] overflow-hidden sm:block lg:block">
                    <img
                        src={detailImage}
                        alt="Gold jewellery detail"
                        className="aspect-[0.78] w-full object-cover object-[center_65%]"
                        loading="eager"
                    />
                </div>

                {/* ─── RING 3D CANVAS ───
                    Mobile  : centered, narrow, lower on page so "Aurelia/atelier" text shows cleanly above
                    Tablet  : left-offset like desktop but slightly less
                    Desktop : original fixed positioning
                */}
                <div
                    ref={ringCanvasRef}
                    className="pointer-events-none fixed z-20
                        /* mobile */
                        left-[5%] top-[28vh] h-[44vh] w-[90vw]
                        /* sm / tablet */
                        sm:left-[25%] sm:top-[17vh] sm:h-[68vh] sm:w-[52vw]
                        /* lg / desktop */
                        lg:left-[28%] lg:top-[14vh] lg:h-[83vh] lg:w-[46vw]"
                >
                    <Canvas
                        camera={{ position: [0, 0, 29], fov: 40 }}
                        dpr={[1, 1.5]}
                        gl={{ alpha: true, antialias: true }}
                    >
                        <ambientLight intensity={1.5} />
                        <directionalLight position={[5, 8, 10]} intensity={3} />
                        <pointLight position={[-6, 3, 5]} intensity={35} color="#f4d79a" />
                        <Suspense fallback={null}>
                            <Environment preset="studio" />
                            <HeroRingModel animRef={animRef} />
                        </Suspense>
                    </Canvas>
                </div>

                {/* ─── SIDE COPY (hidden on mobile) ─── */}
                <p data-hero-reveal className="absolute left-[5%] top-[46%] z-30 hidden max-w-28 text-[9px] uppercase leading-[1.45] tracking-[0.12em] text-black/60 sm:block">
                    Jewellery that becomes part of your story
                </p>

                <div data-hero-reveal className="absolute right-[23%] top-[28%] z-30 hidden items-start gap-3 sm:flex">
                    <span className="mt-1 h-10 w-px -rotate-[15deg] bg-black/30" />
                    <p className="text-[9px] uppercase tracking-[0.08em] text-black/65">
                        18K gold · heirloom diamonds
                    </p>
                </div>

                <p data-hero-reveal className="absolute bottom-[20%] left-[22%] z-30 hidden max-w-44 text-[10px] leading-[1.6] text-black/55 md:block lg:left-[20%]">
                    Designed with intention. Crafted to endure beyond time and trends.
                    Each piece reflects the quiet elegance of modern luxury.
                </p>

                {/* ─── BOTTOM BAR ─── */}
                <div className="absolute bottom-6 left-5 right-5 z-30 flex items-end justify-between sm:bottom-8 sm:left-9 sm:right-9 lg:bottom-12 lg:left-12 lg:right-12">

                    {/* Mobile only CTA */}
                    <div data-hero-reveal className="sm:hidden">
                        <p className="mb-2 text-[9px] uppercase tracking-[0.16em] text-black/50">
                            Fine jewellery, made to last
                        </p>
                        <a
                            href="#collection"
                            className="inline-flex items-center gap-2 border-b border-black/50 pb-1 text-[10px] uppercase tracking-[0.12em]"
                        >
                            Explore collection <ArrowUpRight size={13} />
                        </a>
                    </div>

                    {/* Desktop left label */}
                    <span className="hidden text-[9px] uppercase tracking-[0.12em] text-black/55 sm:block">
                        VVS / 01
                    </span>

                    {/* Attribution — hidden on mobile */}
                    <span className="absolute bottom-3 left-0 hidden text-[7px] text-black/40 sm:block">
                        <a
                            href="https://sketchfab.com/3d-models/ring-02-21060700d6454147849f33d1d1d740d0"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-black/70"
                        >
                            "Ring 02"
                        </a>{" "}
                        by{" "}
                        <a
                            href="https://sketchfab.com/busanello"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-black/70"
                        >
                            Busanello
                        </a>{" "}
                        ·{" "}
                        <a
                            href="https://creativecommons.org/licenses/by/4.0/"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-black/70"
                        >
                            CC BY 4.0
                        </a>
                    </span>

                    {/* Desktop right CTA */}
                    <a
                        href="#collection"
                        className="hidden items-center gap-2 border-b border-black/40 pb-1 text-[9px] uppercase tracking-[0.12em] transition-colors hover:border-black sm:inline-flex"
                    >
                        Explore collection <ArrowUpRight size={13} />
                    </a>

                    {/* Mobile scroll nudge */}
                    <a
                        href="#intro"
                        aria-label="Scroll to discover"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-black/45 transition-colors hover:text-black sm:hidden"
                    >
                        <ArrowDown size={15} />
                    </a>
                </div>
            </div>
        </section>
    );
}
