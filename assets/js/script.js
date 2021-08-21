// Global Varibales

var modalBtn = document.querySelector('.open-modal'); 
var modalBg = document.querySelector('.outer-modal');
var modalClose = document.querySelector('.close-modal'); 

modalBtn.addEventListener('click', function() {
    modalBg.classList.add('modal-toggle')
}); 

modalClose.addEventListener('click', function () {
    modalBg.classList.remove('modal-toggle'); 
}); 
