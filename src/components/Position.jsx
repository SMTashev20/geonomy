import { useEffect } from 'react';

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
    })

    return null;
}