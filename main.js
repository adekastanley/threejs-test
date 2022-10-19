import * as THREE from 'three'
import { BoxGeometry } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerHeight, window.innerWidth)

document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerHeight / window.innerWidth,
    0.1, 1000
);
const controls = new OrbitControls(camera, renderer.domElement);
const axesHelper = new THREE.AxesHelper(3);

const planeGeo = new THREE.PlaneGeometry(30, 30);
const planeMat = new THREE.MeshBasicMaterial({
    color: 0x222,
    side: THREE.DoubleSide
})
const plane = new THREE.Mesh(planeGeo, planeMat)
scene.add(plane)
plane.rotation.x = -0.5 * Math.PI

const boxGeo = new THREE.BoxGeometry();
const boxMat = new THREE.MeshBasicMaterial({ color: 0xfff })
const box = new THREE.Mesh(boxGeo, boxMat)
scene.add(box)


const gridHelper = new THREE.GridHelper(30);
scene.add(gridHelper)
scene.add(axesHelper);
camera.position.set(-10, 30, 30)
controls.update();

renderer.render(scene, camera)

function animate(time) {
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    renderer.render(scene, camera)
}

renderer.setAnimationLoop(animate)