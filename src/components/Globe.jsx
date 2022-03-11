import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState, useContext } from 'react';
import { MapLoader, mapInt } from '../util/MapLoader';
import CoordinateContext from '../CoordinateContext';
import * as THREE from 'three';

/**
 * 
 * @param {import('@react-three/fiber').MeshProps} props 
 * @returns mesh
 */
export function Globe(props) {
    const { gl } = useThree();
    const coordContext = useContext(CoordinateContext);

    const bufferTexture = useRef(new THREE.WebGLRenderTarget(8192, 4096));
    const bufferScene = useRef(new THREE.Scene());
    const bufferCamera = useRef(new THREE.PerspectiveCamera(70, 8192 / 4096, 1, 100000));
    const [updateFrame, setUpdateFrame] = useState(false);

    // scene init
    useEffect(() => {
        console.log('scene init');
        bufferScene.current.background = new THREE.Color('#000000');
        bufferCamera.current.position.setZ(0);

        Promise.all([
            new MapLoader().loadAsync('https://datahub.io/core/geo-countries/r/countries.geojson', console.log),
            new THREE.TextureLoader().loadAsync('./img/earth.jpg', console.log),
            new THREE.TextureLoader().loadAsync('./img/normal.jpg', console.log)
        ]).then(res => {
            const lineGroup = new THREE.Group();
            lineGroup.name = "CountryLines";

            res[0].forEach(mesh => {
                const line = new THREE.Line(
                    mesh,
                    new THREE.MeshBasicMaterial({ color: 0xffffff })
                );

                line.position.setZ(-2924); // - (2048 + 512 + 256 + 64 + 32 + 8 + 4)
                lineGroup.add(line);
            })

            bufferScene.current.add(lineGroup);

            const mesh = new THREE.Mesh(
                new THREE.BoxGeometry(res[1].image.width, res[1].image.height, 1),
                new THREE.MeshStandardMaterial({ map: res[1], normalMap: res[2] })
            )

            mesh.position.setZ(-2925); // - (2048 + 512 + 256 + 64 + 32 + 8 + 4 + 1)
            bufferScene.current.add(mesh);

            setUpdateFrame(true);
        })
        
        {
            const ambientLight = new THREE.AmbientLight([1, 1, 1], .25);
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

    return <mesh {...props} onClick={e => {
        console.log('y:', mapInt(e.uv.y, 0, 1, -90, 90), 'x:', mapInt(e.uv.x, 0, 1, -180, 180))
        coordContext.setCoordinate([mapInt(e.uv.y, 0, 1, -90, 90), mapInt(e.uv.x, 0, 1, -180, 180)]);
    }}>
        <sphereGeometry args={[4, 64, 32]} />
        <meshStandardMaterial
            map={bufferTexture.current.texture}
        />
    </mesh>
}