import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
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

    // scene init
    useEffect(async () => {
        console.log('scene init');
        bufferCamera.current.position.setZ(0);

        {
            const loader = new THREE.FileLoader();
            let data = await (loader.loadAsync(
                'https://datahub.io/core/geo-countries/r/countries.geojson',
                event => console.log(event)
            )
                .then(value => JSON.parse(value)))

            console.log(data);

            let meshes = [];

            if (data.type === 'FeatureCollection') {
                data.features.forEach(feature => {
                    if (feature.type === 'Feature') {
                        if (feature.geometry.type === 'Polygon') {
                            let points = [];

                            feature.geometry.coordinates.forEach(coordinateCollection => {
                                coordinateCollection.forEach(coordinate => {
                                    points.push(new THREE.Vector3(
                                        mapInt(coordinate[0], -180, 180, -4096, 4096),
                                        mapInt(coordinate[1], -90, 90, -2048, 2048)
                                    ));
                                });
                            });

                            meshes.push(new THREE.BufferGeometry().setFromPoints(points));
                        } else if (feature.geometry.type === 'MultiPolygon') {
                            feature.geometry.coordinates.forEach(multiPolygonCollection => {
                                let points = []
                                
                                multiPolygonCollection.forEach(coordinateCollection => {
                                    coordinateCollection.forEach(coordinate => {
                                        points.push(new THREE.Vector3(
                                            mapInt(coordinate[0], -180, 180, -4096, 4096),
                                            mapInt(coordinate[1], -90, 90, -2048, 2048)
                                        ));
                                    });
                                });

                                meshes.push(new THREE.BufferGeometry().setFromPoints(points));
                            });
                        }
                    }
                });
            }
            meshes.forEach(mesh => {
                const line = new THREE.Line(
                    mesh,
                    new THREE.LineBasicMaterial({ color: 0xffffff })
                );

                line.position.setZ(-3072);

                bufferScene.current.add(line);
            })
        }

        bufferScene.current.background = new THREE.Color('#000000');
    }, []);
    
    // scene render
    useFrame(() => {
        gl.setRenderTarget(bufferTexture.current);
        gl.render(bufferScene.current, bufferCamera.current);
        gl.setRenderTarget(null);
    });

    return <mesh {...props}>
        <sphereGeometry args={[4, 64, 32]} />
        <meshStandardMaterial
            map={bufferTexture.current.texture}
        />
    </mesh>
}