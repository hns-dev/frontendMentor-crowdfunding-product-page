const navBtn = document.querySelector('#nav-btn');
const navLinks = document.querySelector('#nav-links');
const hamburger = document.querySelector('#hamburger-icon');
const close = document.querySelector('#menu-close-icon');
const bookmark = document.querySelector('#bookmark');



const modalSelectionBtn = document.querySelectorAll('.modal-selction-btn');
const selectionmodal = document.querySelector('.selection-modal');

const modalClosebtn = document.querySelector('.modal-close-icon');



const successModal = document.querySelector('.success-modal');
const succesModalbtn = document.querySelector('#success-modal-btn');





navBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('show');
    close.classList.toggle('show');

})

bookmark.addEventListener('click', ()=>{
    bookmark.classList.toggle('bookmarked');
})


modalSelectionBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        selectionmodal.style.display = 'flex';
    })    
})

modalClosebtn.addEventListener('click', () =>{
    selectionmodal.style.display = 'none';
})

succesModalbtn.addEventListener('click', () => {
    successModal.style.display = 'none';
})