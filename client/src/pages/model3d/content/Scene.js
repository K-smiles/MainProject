
import { Canvas } from '@react-three/fiber'
import { Loader, OrbitControls, Line, Environment } from '@react-three/drei'
import SceneLabel from './PortalsSphere'
import OlderModel from './OlderModel'

export default function Viewer() {
    return (
        <>
            <Canvas camera={{ position: [0, 0, 150], fov: 75 }}>
                <Environment
                    background
                    blur={0}
                    preset="apartment"
                />
                <ambientLight intensity={0.5} />
                <OlderModel position={[0, -80, 0]} />

                <OrbitControls />
                <SceneLabel/>
                {/* <Line points={[[100, 0, 0], [-100, 0, 0]]}
                    color="black"
                    lineWidth={10}
                />
                <Line points={[[0, 100, 0], [0, -100, 0]]}
                    color="red"
                    lineWidth={10}
                />
                <Line points={[[0, 0, 100], [0, 0, -100]]}
                    color="blue"
                    lineWidth={10}
                /> */}
            </Canvas>
            <Loader />
        </>
    )
}
