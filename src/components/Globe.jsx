import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { MapLoader } from '../util/MapLoader';
import * as THREE from 'three';

export const mapInt = (x, in_min, in_max, out_min, out_max) => {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

/**
 * 
 * @param {import('@react-three/fiber').MeshProps} props 
 * @returns mesh
 */
export function Globe(props) {
    const { gl } = useThree();

    const bufferTexture = useRef(new THREE.WebGLRenderTarget(8192, 4096));
    const bufferScene = useRef(new THREE.Scene());
    const bufferCamera = useRef(new THREE.PerspectiveCamera(70, 8192 / 4096, 1, 100000));
    const [updateFrame, setUpdateFrame] = useState(false);

    // scene init
    useEffect(async () => {
        console.log('scene init');
        bufferScene.current.background = new THREE.Color('#000000');
        bufferCamera.current.position.setZ(0);

        new MapLoader().load(
            'https://datahub.io/core/geo-countries/r/countries.geojson',
            loadedMeshes => {
                const lineGroup = new THREE.Group();
                lineGroup.name = "countryLines";

                loadedMeshes.forEach(mesh => {
                    const line = new THREE.Line(
                        mesh,
                        new THREE.LineBasicMaterial({ color: 0xffffff })
                    );
    
                    line.position.setZ(-2924); // - (2048 + 512 + 256 + 64 + 32 + 8 + 4)
                    lineGroup.add(line);
                });

                bufferScene.current.add(lineGroup);

                setUpdateFrame(true);
            },
            loadEvent => console.log(loadEvent),
            error => console.error(error)
        );

        // new THREE.TextureLoader().load(
        //     'day.jpg',
        //     loadedTexture => {
        //         const mesh = new THREE.Mesh(
        //             new THREE.BoxGeometry(loadedTexture.image.width, loadedTexture.image.height, 1),
        //             new THREE.MeshBasicMaterial({ map: loadedTexture })
        //         );

        //         mesh.position.setZ(-2925); // - (2048 + 512 + 256 + 64 + 32 + 8 + 4 + 1)
        //         bufferScene.current.add(mesh);

        //         setUpdateFrame(true);
        //     },
        //     loadEvent => console.log(loadEvent),
        //     error => console.error(error)
        // );
        
        {
            const ambientLight = new THREE.AmbientLight([0, 0, 0]);
            bufferScene.current.add(ambientLight);
        }
        
        setUpdateFrame(true);
    }, []);
    
    // scene render
    useEffect(() => {
        gl.setRenderTarget(bufferTexture.current);
        gl.render(bufferScene.current, bufferCamera.current);
        gl.setRenderTarget(null);
        setUpdateFrame(false);
    }, [updateFrame]);

    return <mesh {...props}>
        <sphereGeometry args={[4, 64, 32]} />
        <meshStandardMaterial
            map={bufferTexture.current.texture}
        />
    </mesh>
}