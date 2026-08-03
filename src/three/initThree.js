import * as THREE from "three";

import { scene } from "./scene";
import { camera } from "./camera";
import { renderer } from "./renderer";

import "./lights";

export function initThree(container){

camera.aspect = container.clientWidth/container.clientHeight;

camera.updateProjectionMatrix();

renderer.setSize(

container.clientWidth,

container.clientHeight

);

container.appendChild(renderer.domElement);

const geometry = new THREE.TorusKnotGeometry(1,0.3,128,32);

const material = new THREE.MeshStandardMaterial({

color:0xff7b00,

metalness:0.8,

roughness:0.2

});

const mesh = new THREE.Mesh(

geometry,

material

);

scene.add(mesh);

function animate(){

requestAnimationFrame(animate);

mesh.rotation.x +=0.003;

mesh.rotation.y +=0.005;

renderer.render(scene,camera);

}

animate();

window.addEventListener("resize",()=>{

camera.aspect=

container.clientWidth/

container.clientHeight;

camera.updateProjectionMatrix();

renderer.setSize(

container.clientWidth,

container.clientHeight

);

});

}