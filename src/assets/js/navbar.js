export default function initNavbar(){


const menuBtn =
document.querySelector(".mobile-menu");


const nav =
document.querySelector(".navbar-nav");


const links =
document.querySelectorAll(".nav-menu a");


const themeBtn =
document.getElementById("theme-toggle");


const themeIcon =
themeBtn?.querySelector("i");



// =======================
// MENU MOBILE
// =======================


function closeMenu(){


if(!nav) return;


nav.classList.remove("active");

document.body.classList.remove(
"menu-open"
);


const icon =
menuBtn?.querySelector("i");


icon?.classList.remove(
"fa-xmark"
);


icon?.classList.add(
"fa-bars"
);


}



if(menuBtn && nav){


menuBtn.addEventListener(
"click",
()=>{


const active =
nav.classList.toggle(
"active"
);


document.body.classList.toggle(
"menu-open",
active
);



const icon =
menuBtn.querySelector("i");



if(active){


icon.classList.remove(
"fa-bars"
);


icon.classList.add(
"fa-xmark"
);



}else{


icon.classList.remove(
"fa-xmark"
);


icon.classList.add(
"fa-bars"
);


}


});


}



// fermeture après clic

links.forEach(link=>{


link.addEventListener(
"click",
closeMenu
);


});



// clic extérieur

document.addEventListener(
"click",
(e)=>{


if(
nav?.classList.contains("active")
&&
!nav.contains(e.target)
&&
!menuBtn.contains(e.target)

){

closeMenu();

}


});



// ESC

document.addEventListener(
"keydown",
(e)=>{


if(e.key==="Escape"){

closeMenu();

}


});




// =======================
// THEME
// =======================


let theme =
"dark";


try{


theme =
localStorage.getItem("theme")
||
"dark";


}catch(e){}



document.documentElement.dataset.theme =
theme;



updateIcon(theme);



themeBtn?.addEventListener(
"click",
()=>{


const current =
document.documentElement.dataset.theme;



const next =
current==="dark"
?
"light"
:
"dark";



document.documentElement.dataset.theme =
next;



try{

localStorage.setItem(
"theme",
next
);

}catch(e){}



updateIcon(next);



});




function updateIcon(theme){


if(!themeIcon)
return;



if(theme==="light"){


themeIcon.className =
"fas fa-sun";


}else{


themeIcon.className =
"fas fa-moon";


}


}



}