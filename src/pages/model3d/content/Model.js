import * as THREE from 'three'
import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Loader, useGLTF, Html, OrbitControls, Environment, ContactShadows } from '@react-three/drei'
// import { FaMapMarkerAlt } from 'react-icons/fa'
import { Popconfirm } from 'antd'


function MyModel(props) {
    const gltf = useGLTF('/model/Animated Full Human Body Anatomy18/Animated Full Human Body Anatomy.gltf')
    return <primitive object={gltf.scene} />
}
function Dome({ name, position, onClick }) {
    return (
        <group>
            <mesh position={position}>
                <sphereGeometry args={[1, 32, 16]} />
                <meshBasicMaterial color="white" />
                <Html >
                    <Popconfirm title="Information" onConfirm={onClick} okText="Yes" cancelText="No">
                        <button >{name}</button>
                    </Popconfirm>
                </Html>
            </mesh>
        </group>
    )
}

const store = [
    { name: 'outside', color: 'lightpink', position: [20, 20, 20], link: 1 },
]

function Portals() {
    const { link, ...props } = store[0]
    return <Dome {...props} />
}

export default function Viewer() {
    return (
        <>
            <Canvas camera={{ position: [150, 150, 150], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <MyModel position={[0, 0, 0]} />
                <Environment preset="city" />
                <ContactShadows frames={1} scale={5} position={[0, -1, 0]} far={1} blur={5} opacity={0.5} color="#204080" />
                <OrbitControls />
                <Portals />
            </Canvas>
            <Loader />
        </>
    )
}
