export default function HeroParticles(){

let particles="";

for(let i=0;i<25;i++){

particles+=`

<span
class="particle"
style="
left:${Math.random()*100}%;
top:${Math.random()*100}%;
animation-delay:${Math.random()*8}s;
animation-duration:${6+Math.random()*8}s;
"></span>

`;

}

return particles;

}