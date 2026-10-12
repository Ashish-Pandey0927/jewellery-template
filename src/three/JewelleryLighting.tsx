import { Environment } from "@react-three/drei";

export function JewelleryLighting() {
    return (
        <>
            <ambientLight intensity={0.6} />
            <directionalLight position={[4, 5, 4]} intensity={4} />
            <pointLight position={[-4, 2, 3]} intensity={3} color="#d7b56d" />
            <pointLight position={[4, -2, 2]} intensity={2} color="#ffffff" />
            <Environment preset="studio" />
        </>
    );
}
