// variables for nav bar 
const menuBtn = document.querySelector('.menu_btn');
const hamburguer = document.querySelector('.menu_btn__burguer');
const navBar = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav-item');

// this will display the meny once the burguer is click
let showMenu = false;

//calling toggleMenu when menuBtn is clicked
menuBtn.addEventListener('click', toggleMenu);

//creating toggleMenu func
function toggleMenu () {
    if(!showMenu) {
        hamburguer.classList.add('open');
        navBar.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburguer.classList.remove('open');
        navBar.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));


        showMenu = false;
    }
};


