import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { Vector3 } from "three";

export function PositionCamera({ position, rotation }) {
    const { camera } = useThree();

    useEffect(() => {
        console.log('mount');
        if (camera === undefined) return;

        if (position) {
            camera.position.x = position[0];
            camera.position.y = position[1];
            camera.position.z = position[2];
        }

        if (rotation) {
            camera.rotation.x = rotation[0];
            camera.rotation.y = rotation[1];
            camera.rotation.z = rotation[2];
        }

        return () => {
            camera.position.x = 0;
            camera.position.y = 0;
            camera.position.z = -3;

            camera.rotation.x = 0;
            camera.rotation.y = 0;
            camera.rotation.z = 0;
        }
    }, [])

    return null;
}