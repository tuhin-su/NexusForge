import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

function Box({ position }) {
    return (
        <Float speed={2}>
            <mesh position={position}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#d4a373" />
            </mesh>
        </Float>
    );
}

function Conveyor() {
    return (
        <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -1.5, 0]}
        >
            <boxGeometry args={[10, 3, 0.2]} />
            <meshStandardMaterial color="#20242f" />
        </mesh>
    );
}

function RobotArm() {
    return (
        <group>
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#8c98b3" />
            </mesh>

            <mesh position={[0, 2, 0]}>
                <boxGeometry args={[0.4, 4, 0.4]} />
                <meshStandardMaterial color="#f4b63c" />
            </mesh>

            <mesh
                position={[1.5, 3.5, 0]}
                rotation={[0, 0, Math.sin(Date.now() * 0.001) * 0.5]}
            >
                <boxGeometry args={[3, 0.3, 0.3]} />
                <meshStandardMaterial color="#f4b63c" />
            </mesh>
        </group>
    );
}

function Scene() {
    return (
        <>
            <ambientLight intensity={1.2} />

            <directionalLight
                position={[5, 5, 5]}
                intensity={3}
            />

            <Conveyor />
            <RobotArm />

            <Box position={[-3, 0, 0]} />
            <Box position={[2, 0, 0]} />
            <Box position={[4, 0, 0]} />

            <OrbitControls
                autoRotate
                enableZoom={false}
                enablePan={false}
            />
        </>
    );
}

export default function WarehouseAnimation() {
    return (
        <Canvas camera={{ position: [0, 4, 10] }}>
            <Scene />
        </Canvas>
    );
}