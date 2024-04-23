import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
    const gltf = useGLTF('/model/cute_anime_girl_mage/scene.gltf')
    return <primitive position={props.position} object={gltf.scene} />
}

useGLTF.preload('/model/cute_anime_girl_mage/scene.gltf')