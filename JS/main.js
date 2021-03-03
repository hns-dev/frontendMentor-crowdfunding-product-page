// Nav controls
const navBtn = document.querySelector('#nav-btn');
const navLinks = document.querySelector('#nav-links');
const hamburger = document.querySelector('#hamburger-icon');
const close = document.querySelector('#menu-close-icon');

navBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('show');
    close.classList.toggle('show');
})





// Bookmark control
const bookmark = document.querySelector('#bookmark');

bookmark.addEventListener('click', ()=>{
    bookmark.classList.toggle('bookmarked');
})





// progress bar - indicator
const progressIndicator = document.querySelector('#indicator');
let currentIndicator = parseInt(progressIndicator.getAttribute('data-done'));
// total money
const totalMoney = document.querySelector('#total-money');
let currentTotalMoney = parseInt(totalMoney.textContent.slice(1).split(',').join(''));
// total backers
const totalBackers = document.querySelector('#total-backers');
let currentTotalBacker = parseInt(totalBackers.textContent.split(',').join(''));


// Disable selection with zero quantity
const quantities = document.querySelectorAll('.quantity');

quantities.forEach(quantity => {
    let quantityLeft = parseInt(quantity.textContent);

    if(quantityLeft == 0){
        quantity.parentElement.parentElement.parentElement.disabled = true;
    }
})


// Modals related controls
const projectOptionselectionBtn = document.querySelectorAll('.option-selection-btn');
const selectionModal = document.querySelector('.selection-modal');
const modalClosebtn = document.querySelector('.modal-close-icon');

projectOptionselectionBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        selectionModal.style.display = 'flex';
    })    
})



modalClosebtn.addEventListener('click', () =>{
    selectionModal.style.display = 'none';
})







// Selection form 
const form = document.querySelector('.selection-form');
// Selections - radio buttons
const selections = document.getElementsByName('pledge')
// pledges - inputs
const bambooStand = document.querySelector('#bamboo-stand-pledge');
const blackEditionStand = document.querySelector('#black-edition-stand-pledge');
const MahoganySpecialEdition = document.querySelector('#mahogany-special-edition-pledge');

// Store the pledge amount the user submitted
let pledgeAmount = 0;
// store the value of the selected radio button
let selectedValue = '';


// Listen to form submit
form.addEventListener("submit", function(event) {
    // get the value of the selected radio button
    selections.forEach(sel => {
        if(sel.checked){
            selectedValue = sel.value;
            return;
        }
    })
    
    if(selectedValue === "Bamboo Stand"){
        pledgeAmount = parseInt(bambooStand.value);
    } else if (selectedValue === "Black Edition Stand"){
        pledgeAmount = parseInt(blackEditionStand.value);
    } else if (selectedValue === "Mahogany Special Edition"){
        pledgeAmount = parseInt(MahoganySpecialEdition.value);
    }

  event.preventDefault();
  selectionModal.style.display = 'none';
  successModal.style.display = 'flex';
}, false);



// const selectionPledges = document.querySelectorAll('.selection-modal .selected-pledge');
const allLabels = document.querySelectorAll('.custom-radio-btn');


selections.forEach(selection => {
    // console.log(selection);

    selection.addEventListener('click', ()=> {
            // Hide 'selected pledge' section and reset lable border color
            allLabels.forEach(sel => {
                if(sel.lastElementChild.classList.contains('selected-pledge')){
                    sel.lastElementChild.style.display = 'none';
                }
                
                sel.style.border = "1px solid rgb(226, 225, 225)";
            });

            
            selectedValue = selection.value; 
            // Show 'selected pledge' section and change lable border color to moderate green
            if(selectedValue === "Bamboo Stand"){
                const firstPledge = document.querySelector('#bambo-stand .selected-pledge');
                firstPledge.style.display = 'flex';
                firstPledge.parentElement.style.border = "1px solid hsl(176, 50%, 47%)";
            } else if (selectedValue === "Black Edition Stand"){
                const secondPledge = document.querySelector('#black-edition-stand .selected-pledge');
                secondPledge.style.display = 'flex';
                secondPledge.parentElement.style.border = "1px solid hsl(176, 50%, 47%)";
            } else if (selectedValue === "Mahogany Special Edition"){
                const thirdPledge = document.querySelector('#mahogany-special-edition .selected-pledge');
                thirdPledge.style.display = 'flex';
                thirdPledge.parentElement.style.border = "1px solid hsl(176, 50%, 47%)";
            } else{
                selection.parentElement.style.border = "1px solid hsl(176, 50%, 47%)";
            }
    })
    
})




// Success Modal 
const successModal = document.querySelector('.success-modal');
const succesModalbtn = document.querySelector('#success-modal-btn');

succesModalbtn.addEventListener('click', () => {
    successModal.style.display = 'none';
    
    
    console.log(pledgeAmount);
    // let pledgeAmount = parseInt(pledge.value);
    currentIndicator += 1;
    currentTotalMoney += pledgeAmount;
    currentTotalBacker += 1;

    progressIndicator.style.width = `${currentIndicator}%`;

    totalMoney.textContent = 
    new Intl.NumberFormat('en-US', {
        style: 'currency',
         currency: 'USD',
         minimumFractionDigits:0
        }).format(currentTotalMoney);

    totalBackers.textContent =  new Intl.NumberFormat().format(currentTotalBacker);
})







