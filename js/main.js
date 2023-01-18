// variables for nav bar 
const menuBtn = document.querySelector('.menu_btn');
const hamburguer = document.querySelector('.menu_btn__burguer');
const navBar = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav-item');

// variables for sticky navbar effect 
const body = document.body;
let lastScroll = 0;


// count scroll based on Y position
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0 ) {
        body.classList.remove("scroll-up")
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
    }

    lastScroll = currentScroll;
})

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


