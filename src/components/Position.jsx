import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

// Component that positions objects when mounted.
export function Position({ refToPosition, position, rotation }) {
    useEffect(() => {
        if (refToPosition.current === undefined) return;

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

        return () => {
            refToPosition.current.rotation.x = 0;
            refToPosition.current.rotation.y = 0;
            refToPosition.current.rotation.z = 0;
        }
    })

    return null;
}