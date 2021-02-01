const slide = document.querySelector('ul');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuClose = document.querySelectorAll('.hamburger-menu span');

hamburgerMenu.addEventListener('click', () => {
    slide.classList.toggle('slide')
    for (i = 0; i < menuClose.length; i++) {
        menuClose[i].classList.toggle('close')
    }

});
