
let menuOpen = false;

const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  // menu.style.transition = "width, 1s";
  event.stopPropagation();
  menu.classList.toggle('menu--open');
  if (!menuOpen) {
    menuOpen = true;
    console.log(menuOpen);
  } else {
    menuOpen = false;
    console.log(menuOpen);
  }
}


// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');


// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');


// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

// For Stretch:
// menuButton.addEventListener('click', toggleMenuTween);


//===========================STRETCH=================================//


// Click anywhere on the window, and the menu will close!
window.addEventListener('click', event => {
  event.stopPropagation();
  if (menuOpen) {
    menuOpen = false;
    menu.classList.remove('menu--open');
  }
})

// If you click anywhere inside the menu itself, the menu will NOT close.
menu.addEventListener('click', event => {
  event.stopPropagation();
})


//===========TWEEN ANIMATION FOR HEADER===============//

TweenMax.from(".header", 1, {
  opacity: 0,
  y: -100,
})