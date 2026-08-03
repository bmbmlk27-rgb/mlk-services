export function avatarAnimation() {

const card = document.querySelector(".avatar-card");

if(!card) return;

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateY = ((x / rect.width) - 0.5) * 18;
const rotateX = ((y / rect.height) - 0.5) * -18;

card.style.transform = `
perspective(1200px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.02)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=`
perspective(1200px)
rotateX(0deg)
rotateY(0deg)
scale(1)
`;

});

}