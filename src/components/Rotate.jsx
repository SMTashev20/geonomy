import { useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

export function Rotate({ refToRotate, xAxis, yAxis, zAxis, speed, negative }) {
    useFrame(() => {
        if (refToRotate.current === undefined) return;

        let sign = negative ? -1 : 1;
        if (xAxis) refToRotate.current.rotation.x += speed * sign;
        if (yAxis) refToRotate.current.rotation.y += speed * sign;
        if (zAxis) refToRotate.current.rotation.z += speed * sign;

        if (refToRotate.current.rotation.x >= 360) refToRotate.current.rotation.x = 0;
        if (refToRotate.current.rotation.y >= 360) refToRotate.current.rotation.y = 0;
        if (refToRotate.current.rotation.z >= 360) refToRotate.current.rotation.z = 0;
    })

    useEffect(() => {
        return () => {
            if (refToRotate.current === undefined) return;

            refToRotate.current.rotation.x = 0;
            refToRotate.current.rotation.y = 0;
            refToRotate.current.rotation.z = 0;
        }
    });

    return null;
}