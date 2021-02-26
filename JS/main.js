const navBtn = document.querySelector('#nav-btn');
const navLinks = document.querySelector('#nav-links');
const hamburger = document.querySelector('#hamburger-icon');
const close = document.querySelector('#close-icon');


navBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('show');
    close.classList.toggle('show');

})