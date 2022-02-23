import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * 
 * @param {import('@react-three/fiber').MeshProps} props 
 * @returns mesh
 */
export function Globe(props) {
    return <mesh {...props}>
        <sphereGeometry args={[4, 64, 32]} />
        <meshStandardMaterial
            map={new THREE.TextureLoader().load('day.jpg')}
        />
    </mesh>
}