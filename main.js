import './style.css';
import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#app'),
  antialias:true
});

const globe = new THREE.Mesh(
  new THREE.SphereGeometry(10, 64, 32), 
  new THREE.MeshStandardMaterial({ 
    map: new THREE.TextureLoader().load('img/day.jpg'),
    normalMap: new THREE.TextureLoader().load('img/normal.jpg'),
    normalScale: new THREE.Vector2(100,100)
  })
);

scene.add(globe);

renderer.render(scene, camera);