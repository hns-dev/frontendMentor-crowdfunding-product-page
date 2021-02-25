const hamburger = document.querySelector('#hamburger-icon');
const navLinks = document.querySelector('#nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
})