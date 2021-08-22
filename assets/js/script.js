// Sprite Controls 
let sprite = document.getElementById("astronaut-sprite");
let scoreCounter = document.getElementById("score-counter");
let spaceObstacle = document.getElementsByClassName("space-obstacle"); 

function jump () {
    sprite.classList.add("animate-sprite"); 
    setTimeout(() => {
        sprite.classList.remove("animate-sprite"); 
    }, 800); 
}

document.addEventListener("keypress", () => {
    if(!sprite.classList.contains("animate-sprite")) {
        jump(); 

    }
});    


document.addEventListener("touchstart", () => {
    if(!sprite.classList.contains("animate-sprite")) {
        jump(); 

    }
});    

// //Game Over Detection 

// let gameOver = setInterval(function () {

//     let spriteUpper = window.getComputedStyle(sprite).getPropertyValue("Upper"); 
    
// }, 10); 


// Player Settings - Modals 

const modalBtnRules = document.querySelector(".open-rules-modal"); 
const modalBg = document.querySelector(".outer-modal");
const modalClose = document.querySelector(".close-modal"); 

modalBtnRules.addEventListener("click", function() {
    modalBg.classList.add("modal-toggle")
}); 

modalClose.addEventListener("click", function () {
    modalBg.classList.remove("modal-toggle")
}); 

