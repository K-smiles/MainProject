import React from 'react'
import { useGLTF } from '@react-three/drei'
export default function Model(props) {
    const gltf = useGLTF('/model/HumanBody.gltf')
    console.log(gltf.scene)
    return <primitive  position={props.position} rotation={[0, Math.PI / 6, 0]} object={gltf.scene} />
}

useGLTF.preload('/model/HumanBody.gltf')