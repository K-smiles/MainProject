import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
    const gltf = useGLTF('/model/Animated Full Human Body Anatomy18/Animated Full Human Body Anatomy.gltf')
    return <primitive position={props.position} rotation={[0,Math.PI/6,0]} object={gltf.scene} />
}

useGLTF.preload('/model/Animated Full Human Body Anatomy18/Animated Full Human Body Anatomy.gltf')