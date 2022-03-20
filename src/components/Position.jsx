import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

// Component that positions objects when mounted.
export function Position({ refToPosition, position, rotation, animate, animateSpeed }) {
    const isMounted = useRef(true);

    useEffect(() => {
        if (refToPosition.current === undefined) return;

        if (!animate) {
            if (position) {
                refToPosition.current.position.x = position[0];
                refToPosition.current.position.y = position[1];
                refToPosition.current.position.z = position[2];
            }
    
            if (rotation) {
                refToPosition.current.rotation.x = rotation[0];
                refToPosition.current.rotation.y = rotation[1];
                refToPosition.current.rotation.z = rotation[2];
            }
        }

        return () => {
            isMounted.current = false;

            if (refToPosition.current === undefined) return;

            refToPosition.current.position.x = 0;
            refToPosition.current.position.y = 0;
            refToPosition.current.position.z = 0;
    
            refToPosition.current.rotation.x = 0;
            refToPosition.current.rotation.y = 0;
            refToPosition.current.rotation.z = 0;
        }
    })
    
    if (animate) {
        useFrame(() => {
            if (refToPosition.current === undefined) return;
    
            console.log(refToPosition.current.rotation);
    
            if (position) refToPosition.current.position.lerp(new Vector3(position[0], position[1], position[2]), animateSpeed);
    
            if (rotation) {
                const tempRotation = new Vector3(refToPosition.current.rotation.x, refToPosition.current.rotation.y, refToPosition.current.rotation.z);
                const toRotation = new Vector3(rotation[0], rotation[1], rotation[2]);
                let lerpRotation = new Vector3();
                lerpRotation = lerpRotation.lerpVectors(tempRotation, toRotation, 0.1);
    
                // refToPosition.current.rotation.lerp(new Vector3(rotation[0], rotation[1], rotation[2]), 0.1);
                refToPosition.current.rotation.x = lerpRotation.x;
                refToPosition.current.rotation.y = lerpRotation.y;
                refToPosition.current.rotation.z = lerpRotation.z;
            }
        });
    }

    return null;
}