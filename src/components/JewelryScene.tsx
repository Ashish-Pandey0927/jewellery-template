import { Canvas, useFrame } from "@react-three/fiber";
import {
    Environment,
    Float,
    ContactShadows,
    OrbitControls,
    MeshTransmissionMaterial,
} from "@react-three/drei";
import { useRef } from "react";

function Ring() {
    const ring = useRef<any>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        ring.current.rotation.y = t * 0.35;
        ring.current.rotation.x = Math.sin(t * 0.4) * 0.12;
    });

    return (
        <Float
            speed={1.5}
            rotationIntensity={0.25}
            floatIntensity={0.7}
        >
            <group ref={ring} rotation={[0.2, 0, 0]}>
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
        </Float>
    );
}

export default function JewelryScene() {
    return (
        <div className="absolute inset-0">
            <Canvas
                camera={{
                    position: [0, 0, 5.8],
                    fov: 42,
                }}
                dpr={[1, 2]}
            >
                <ambientLight intensity={0.6} />

                <directionalLight
                    position={[4, 5, 4]}
                    intensity={4}
                />

                <pointLight
                    position={[-4, 2, 3]}
                    intensity={3}
                    color="#d7b56d"
                />

                <pointLight
                    position={[4, -2, 2]}
                    intensity={2}
                    color="#ffffff"
                />

                <Ring />

                <Environment preset="studio" />

                <ContactShadows
                    position={[0, -2.1, 0]}
                    opacity={0.35}
                    scale={8}
                    blur={3}
                    far={4}
                />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.4}
                />
            </Canvas>
        </div>
    );
}