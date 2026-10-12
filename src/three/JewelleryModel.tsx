import { forwardRef } from "react";
import { MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

export const JewelleryModel = forwardRef<THREE.Group, Record<string, unknown>>((props, ref) => {
    return (
        <group ref={ref} {...props}>
            <group rotation={[0.2, 0, 0]}>
                {/* Ring */}
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[1.65, 0.14, 64, 160]} />
                    <MeshTransmissionMaterial
                        backside
                        samples={16}
                        resolution={1024}
                        thickness={0.2}
                        chromaticAberration={0.02}
                        anisotropy={0.5}
                        distortion={0.05}
                        distortionScale={0.2}
                        temporalDistortion={0.05}
                        color="#d5b06a"
                        roughness={0.12}
                        transmission={0.95}
                    />
                </mesh>

                {/* Diamond */}
                <mesh position={[0, 0.45, 0]}>
                    <octahedronGeometry args={[0.55, 2]} />
                    <MeshTransmissionMaterial
                        backside
                        samples={16}
                        resolution={1024}
                        thickness={0.25}
                        chromaticAberration={0.04}
                        anisotropy={0.3}
                        distortion={0.05}
                        color="#ffffff"
                        roughness={0}
                        transmission={1}
                    />
                </mesh>

                {/* Small diamonds */}
                {[
                    [-1.1, 0.2, 0],
                    [1.1, 0.2, 0],
                    [0, -1.1, 0],
                ].map((position, index) => (
                    <mesh key={index} position={position as [number, number, number]}>
                        <octahedronGeometry args={[0.09, 1]} />
                        <meshPhysicalMaterial
                            color="#ffffff"
                            metalness={0.1}
                            roughness={0.02}
                            transmission={0.9}
                            thickness={0.2}
                        />
                    </mesh>
                ))}
            </group>
        </group>
    );
});
