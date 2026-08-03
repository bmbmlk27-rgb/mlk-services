import * as THREE from "three";

export const renderer = new THREE.WebGLRenderer({

alpha:true,

antialias:true

});

renderer.setPixelRatio(window.devicePixelRatio);