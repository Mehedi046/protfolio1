// Navbar Style on Scroll With JS

window.addEventListener('scroll',() =>
{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 10)
})


// SHOW AND HIDE NAV MENU 

const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// CLOSE NAV MENU 

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)