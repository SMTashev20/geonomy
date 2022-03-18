import { useThree } from '@react-three/fiber';
import { useEffect, useRef, useState, useContext, forwardRef } from 'react';
import { mapInt } from '../util/MapLoader';
import CountryDataContext from '../CountryDataContext';
import * as THREE from 'three';

import earthImg from '../../img/map-light.png';
import normalEarthImg from '../../img/normal.png';
import { useLocation } from 'wouter';
import { useRoute } from 'wouter';

/**
 * 
 * @param {import('@react-three/fiber').MeshProps} props 
 * @returns mesh
 */
const Globe = forwardRef((props, ref) => {
    const { gl } = useThree();
    const countryDataContext = useContext(CountryDataContext);

    const bufferTexture = useRef(new THREE.WebGLRenderTarget(8192, 4096));
    const bufferScene = useRef(new THREE.Scene());
    const bufferCamera = useRef(new THREE.PerspectiveCamera(70, 8192 / 4096, 1, 100000));
    const countryRay = useRef();
    const [updateFrame, setUpdateFrame] = useState(false);

    const [location, setLocation] = useLocation();
    const [dragged, setDragged] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [matchStart] = useRoute('/start');

    // scene init
    useEffect(() => {
        console.log('scene init');
        bufferScene.current.background = new THREE.Color('#000000');
        bufferCamera.current.position.setZ(0);

        Promise.all([
            countryDataContext.data,
            new THREE.TextureLoader().loadAsync(earthImg),
            new THREE.TextureLoader().loadAsync(normalEarthImg)
        ]).then(res => {
            const lineGroup = new THREE.Group();
            lineGroup.name = "CountryLines";

            res[0].forEach(country => {
                country.geometry.forEach(line => {
                    line.position.setZ(-2924); // - (2048 + 512 + 256 + 64 + 32 + 8 + 4)
                    bufferScene.current.add(line);
                })
            })

            bufferScene.current.add(lineGroup);

            const mesh = new THREE.Mesh(
                new THREE.BoxGeometry(res[1].image.width, res[1].image.height, 1),
                new THREE.MeshStandardMaterial({ map: res[1], normalMap: res[2] })
            )

            mesh.position.setZ(-2925); // - (2048 + 512 + 256 + 64 + 32 + 8 + 4 + 1)
            mesh.renderOrder = -1;
            bufferScene.current.add(mesh);

            setUpdateFrame(true);
        })
        
        {
            const ambientLight = new THREE.AmbientLight([1, 1, 1], .25);
            const pointLight = new THREE.PointLight(0xFF0000, 1, 100);
            pointLight.position.set(75, 75, 75);
            bufferScene.current.add(pointLight);
            bufferScene.current.add(ambientLight);
        }
        
        setUpdateFrame(true);
    }, []);
    
    // scene render
    useEffect(() => {
        console.log('render');
        gl.setRenderTarget(bufferTexture.current);
        gl.render(bufferScene.current, bufferCamera.current);
        gl.setRenderTarget(null);
        setUpdateFrame(false);
    }, [updateFrame]);

    return <mesh {...props} ref={ref} onPointerDown={e => setClicked(true)} onPointerMove={e => clicked ? setDragged(true) : null} onClick={e => {
        if (!dragged) {
            let coordinates = [mapInt(e.uv.y, 0, 1, -90, 90), mapInt(e.uv.x, 0, 1, -180, 180)]

            if (matchStart)
                setLocation(`/map/${coordinates[0]},${coordinates[1]}`)
        }

        setClicked(false);
        setDragged(false);
    }}>
        <sphereGeometry args={[4, 64, 32]} />
        <meshStandardMaterial
            map={bufferTexture.current.texture}
        />
    </mesh>
});

export { Globe };