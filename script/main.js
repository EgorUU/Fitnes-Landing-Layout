let burgerimg = document.querySelector('.header-nav__burger>img');
let burger = document.querySelector('.header-nav__burger');
let menu = document.querySelector('.header-nav__links');
let menu1 = document.querySelector('.header-nav__links ul');
let counter = 2;
burger.addEventListener('click', function burgerClick() {
    if(counter % 2 == 0) {
        burgerimg.src = "images/header/cross-svgrepo-com.svg";
        menu.style.display = "block";
        document.documentElement.style.overflow = 'hidden';
        menu1.style.cssText = "animation: anim 0.5s backwards; animation-fill-mode: both";
        
    }
    else {
        burgerimg.src = "images/header/menu_burger_icon_177188.svg";
        menu1.style.cssText = "animation: animout 0.5s backwards; animation-fill-mode: both";
        document.documentElement.style.overflow = 'auto';
        document.documentElement.style.overflowX = 'hidden';

    }
    counter += 1;
});