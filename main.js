const navbar=document.querySelector(".nav-bar");
let menulist=document.querySelector(".ul");
let hamburgerbtn=document.querySelector(".fa-bars");
let lastscrolly=0;
window.addEventListener("scroll",()=>{
    if(lastscrolly<(lastscrolly=window.scrollY)){
        navbar.style.top="-15%";
        navbar.style.transition="1s";
    }
    else{
        navbar.style.top="0";
        navbar.style.transition="1s";
    }
})
function hamburger(){
    if(getComputedStyle(menulist).display=="none"){
        menulist.style.display="flex";
    }
    else if(getComputedStyle(menulist).display=="flex"){
        menulist.style.display="none";
    }
}
if(screen.width<=576){
    function menuclose(){
        if(getComputedStyle(menulist).display=="flex"){
            menulist.style.display="none";
        }
    }
}
