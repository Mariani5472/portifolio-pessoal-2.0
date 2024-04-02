const hamburgerMenu = document.querySelector('.toggle__menu');
const menu = document.querySelector('#menu');
const body = document.querySelector('#body');
const menuItem = document.querySelectorAll('.menu__item')

hamburgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
    document.body.classList.toggle('fixado');
})

menuItem.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
        body.classList.remove('fixado');
    });
});

