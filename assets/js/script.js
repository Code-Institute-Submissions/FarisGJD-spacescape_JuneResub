// Global Varibales

const sprite = document.getElementById('astronaut-sprite');
const scoreCounter = document.getElementById('score-counter');



// Sprite Controls 

function jump () {
    sprite.classList.add('animate-sprite'); 
    setTimeout(() => {
        sprite.classList.remove('animate-sprite'); 
    }, 400); 
}

document.addEventListener('keypress', () => {
    if(!sprite.classList.contains('animate-sprite')) {
        jump(); 

    }
   
});     








// const sprite = document.getElementById('astronaut-sprite');
// console.log(sprite)

// function jump() {
//     sprite.classList.add('animate-sprite'); 
//     setTimeout(() => {
//         sprite.classList.remove('animate-sprite'); 
//     }, 500); 
// }

// document.addEventListener('click', () => {
//     if (!sprite.classList.contains('animate-sprite')) {
//         jump(); 
//     }
// }); 

// var modalBtn = document.querySelector('.open-modal'); 
// var modalBg = document.querySelector('.outer-modal');
// var modalClose = document.querySelector('.close-modal'); 

// modalBtn.addEventListener('click', function() {
//     modalBg.classList.add('modal-toggle')
// }); 

// modalClose.addEventListener('click', function () {
//     modalBg.classList.remove('modal-toggle'); 
// }); 

