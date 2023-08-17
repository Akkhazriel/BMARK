const menu = document.querySelector('.nav__menu');
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.nav__link');
const body = document.body;

export const toggleMenu = menu.addEventListener('click', () => {
    nav.classList.toggle('_active');
    links.forEach(link => {
        link.classList.toggle('_active');
    });
    menu.classList.toggle('_active');
    body.classList.toggle('no-scroll');
});