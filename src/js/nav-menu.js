const menuButton = document.getElementsByClassName('nav-menu__mobile-menu-icon')[0];
const navMenu = document.getElementsByClassName('nav-menu__list')[0];
document.addEventListener('click', (event) => {
    let target = event.target;
    menuButton === target ? navMenu.classList.toggle('active') : null;
});