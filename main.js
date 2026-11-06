import * as THREE from 'three'; 
console.log('THREE', THREE.REVISION);
import {OrbitControls} from 'three/addons/controls/OrbitControls.js     ';

// Scene setup
const scene = new THREE.Scene();
scene.background = new 
THREE.Color(0x151515);

// Camera setup
const camera = new
THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(10, 10, 10); 

// Renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

document.body.style.margin = '0';

// OrbitControls setup
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Coordinate axes setup
const axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);

// Grid floor setup
const grid = new 
THREE.GridHelper(20, 20);
scene.add(grid);

// Lighting setup
const light = new 
THREE.AmbientLight(0xffffff, 1);
scene.add(light);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();

// window resize handling
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});