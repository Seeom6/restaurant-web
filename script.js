let menuIcon = document.getElementById("menu-icon")
let navbar = document.getElementById("navbar")
let header = document.getElementById("header")
let menuButton = document.querySelector(".text")
let gitBack = document.querySelector('.gitBack')
let onToggle = document.querySelector('.onToggle')


// for view the navigation

menuIcon.onclick=()=>{
    onToggle.style.cssText = "left:0px !important;"
}
gitBack.onclick=()=>{
    onToggle.style.cssText = "left: -350px !important;"
}


// for background of header

window.onscroll = ()=>{
    if(window.scrollY >= 30 ){
        header.style.cssText = "background: #fff; box-shadow: 0px 1px 10px #111";
        menuButton.style.cssText =" background: var(--main-color); color: #fff;";
    }else{
        header.style.cssText = "";
        menuButton.style.cssText ="";
    }
}