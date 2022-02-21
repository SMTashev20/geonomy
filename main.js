import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#app'),
  antialias:true
});

const controls = new OrbitControls( camera, renderer.domElement );

controls.enableZoom=false;
controls.maxZoom=1;
controls.enablePan=false;
controls.minPolarAngle=1;
controls.maxPolarAngle=2;
controls.rotateSpeed=0.5;
controls.update();

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(new THREE.Color("#003"))

camera.position.setZ(20);

const atmosphere = new THREE.PointLight(0xffffff, 0.25, 0, 1.5);
atmosphere.position.set(15,15,15);
scene.add( atmosphere );

const lightSource = new THREE.AmbientLight( 0xffffff );
scene.add( lightSource );

const globe = new THREE.Mesh(
  new THREE.SphereGeometry(10, 64, 32), 
  new THREE.MeshStandardMaterial({ 
    map: new THREE.TextureLoader().load('img/day.jpg'),
    normalMap: new THREE.TextureLoader().load('img/normal.jpg'),
    normalScale: new THREE.Vector2(100,100)
  })
);

globe.material.needsUpdate=true;

scene.add(globe);

function animate() {
  requestAnimationFrame(animate);

  controls.update();
  globe.rotation.y-=0.0025;
  globe.rotation.x+=0.00025;
  renderer.render(scene, camera);
}

animate();