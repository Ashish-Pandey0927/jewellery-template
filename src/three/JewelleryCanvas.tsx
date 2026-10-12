import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { JewelleryModel } from "./JewelleryModel";
import { JewelleryLighting } from "./JewelleryLighting";
import { JewelleryController } from "./JewelleryController";

function JewelleryScene() {
    const groupRef = useRef<THREE.Group>(null!);
    const innerGroupRef = useRef<THREE.Group>(null!);

    useFrame((state) => {
        if (innerGroupRef.current) {
            const t = state.clock.getElapsedTime();
            innerGroupRef.current.rotation.y = t * 0.15;
            innerGroupRef.current.rotation.x = Math.sin(t * 0.4) * 0.05;
        }
    });

    return (
        <>
            <JewelleryLighting />
            <group ref={groupRef}>
                <group ref={innerGroupRef}>
                    <JewelleryModel />
                </group>
            </group>
            <JewelleryController modelRef={groupRef} />
        </>
    );
}

export function JewelleryCanvas() {
    return (
        <div className="fixed inset-0 z-10 pointer-events-none">
            <Canvas
                camera={{
                    position: [0, 0, 5.8],
                    fov: 42,
                }}
                dpr={[1, 2]}
            >
                <JewelleryScene />
            </Canvas>
        </div>
    );
}
