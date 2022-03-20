import { useThree } from '@react-three/fiber';
import { useEffect, useRef, useState, useContext, forwardRef } from 'react';
import { MapLoader, mapInt } from '../util/MapLoader';
import CountryDataContext from '../CountryDataContext';
import * as THREE from 'three';

import earthImg from '../../img/map-light.png';
import { useLocation } from 'wouter';
import { useRoute } from 'wouter';

const COUNTRY_LINE_POSITION = new THREE.Vector3(0, 0, -2924); // - (2048 + 512 + 256 + 64 + 32 + 8 + 4)
const MAP_IMAGE_POSITION = new THREE.Vector3(0, 0, -2925); // - (2048 + 512 + 256 + 64 + 32 + 8 + 4 + 1)
const PROJECTION_TEXTURE_RESOLUTION = new THREE.Vector2(8192, 4096);

/**
 * 
 * @param {THREE.Vector3} point 
 * @param {number[2]} polygon 
 */
const isPointInPolygon = (point, polygon) => {
    let minX = polygon[0][0];
    let maxX = polygon[0][0];
    let minY = polygon[0][1];
    let maxY = polygon[0][1];

    polygon.forEach(point => {
        minX = Math.min(point.x, minX);
        maxX = Math.max(point.x, maxX);
        minY = Math.min(point.y, minY);
        maxY = Math.max(point.y, maxY);
    });

    if (point.x <= minX || point.x >= maxX || point.y <= minY || point.y >= maxY)
        return false;

    let inside = false;

    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        if ((polygon[i][1] >= point.y) != (polygon[j][1] >= point.y) &&
            point.x <= (polygon[j][0] - polygon[i][0]) * (point.y - polygon[i][1]) / (polygon[j][1] - polygon[i][1]) + polygon[i][0])
            inside = !inside;
    }

    return inside;
}

/**
 * 
 * @param {import('@react-three/fiber').MeshProps} props 
 * @returns mesh
 */
const Globe = forwardRef((props, ref) => {
    const { gl } = useThree();
    const countryDataContext = useContext(CountryDataContext);

    const bufferTexture = useRef(new THREE.WebGLRenderTarget(PROJECTION_TEXTURE_RESOLUTION.x, PROJECTION_TEXTURE_RESOLUTION.y));
    const bufferScene = useRef(new THREE.Scene());
    const bufferCamera = useRef(new THREE.PerspectiveCamera(70, PROJECTION_TEXTURE_RESOLUTION.x / PROJECTION_TEXTURE_RESOLUTION.y, 1, 100000));
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
            new Promise((res, rej) => {
                try {
                    res(new MapLoader().parse(countryDataContext.data));
                } catch (e) {
                    rej(e);
                }
            }),
            new THREE.TextureLoader().loadAsync(earthImg),
        ]).then(res => {
            const lineGroup = new THREE.Group();
            lineGroup.name = "CountryLines";

            res[0].forEach(mesh => {
                const line = new THREE.Line(
                    mesh,
                    new THREE.MeshBasicMaterial({ color: 0xffffff })
                );

                line.position.setZ(COUNTRY_LINE_POSITION.z);
                lineGroup.add(line);
            })

            bufferScene.current.add(lineGroup);

            const mesh = new THREE.Mesh(
                new THREE.BoxGeometry(res[1].image.width, res[1].image.height, 1),
                new THREE.MeshStandardMaterial({ map: res[1] })
            )

            mesh.position.setZ(MAP_IMAGE_POSITION.z);
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
            let countryMetadata = null;
            let coordinates = new THREE.Vector3(
                mapInt(e.uv.x, 0, 1, -180, 180),
                mapInt(e.uv.y, 0, 1, -90, 90)
            );

            if (countryDataContext.data.type === 'FeatureCollection') {
                countryDataContext.data.features.every(e => {
                    if (e.geometry.type === 'MultiPolygon') {
                        let flag = false;
                        e.geometry.coordinates.every(e => {
                            if (isPointInPolygon(coordinates, ...e)) {
                                flag = true;
                                return false;
                            }
                            return true;
                        });
                        if (flag) countryMetadata = e;
                        return !flag;
                    } else if (e.geometry.type === 'Polygon') {
                        if (isPointInPolygon(coordinates, ...e.geometry.coordinates)) {
                            countryMetadata = e;
                            return false;
                        }
                        return true;
                    }
                })
            }

            if (matchStart && countryMetadata) {
                setLocation(`/map/${countryMetadata.properties.ADMIN}`)
            }
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