import "./ThreeCanvas.css";
import { initThree } from "../../three/initThree";

export default function ThreeCanvas(){

setTimeout(()=>{

const container=document.querySelector(".three-canvas");

if(container){

initThree(container);

}

},100);

return`

<div class="three-canvas"></div>

`;

}