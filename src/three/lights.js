import * as THREE from "three";
import { scene } from "./scene";

const ambient = new THREE.AmbientLight(0xffffff,1);

scene.add(ambient);

const directional = new THREE.DirectionalLight(0xff7b00,2);

directional.position.set(5,5,5);

scene.add(directional);