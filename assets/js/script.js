// Play Button 
const game = document.querySelector(".game");
const play = document.querySelector(".play-button");
const home = document.querySelector(".home-page")
const scoreCounter = document.querySelector(".score")

play.addEventListener("click", function() {
  game.classList.add("game-toggle");
  home.classList.add("game-home-toggle");
  scoreCounter.classList.add("game-toggle"); 
})

// Sprite Controls
let sprite = document.getElementById("astronaut-sprite");

function locomotionJump() {
  sprite.classList.add("animate-sprite");
  setTimeout(() => {
    sprite.classList.remove("animate-sprite");
  }, 700);
}

document.addEventListener("touchstart", () => {
  if (!sprite.classList.contains("animate-sprite")) {
    locomotionJump();
  }
});

document.addEventListener("keypress", () => {
  if (!sprite.classList.contains("animate-sprite")) {
    locomotionJump();
  }
});

// Obstacles, Game Over & Score Counter Detection
let meteoriteObstacle = document.querySelector(".meteorite-obstacle");
setInterval(() => {
  scoreCounter.innerText++;
  const spriteTop = parseInt(window.getComputedStyle(sprite).getPropertyValue("top"));
  const meteoriteObstacleLeft = parseInt(window.getComputedStyle(meteoriteObstacle).getPropertyValue("left"));

  if (meteoriteObstacleLeft < 100 && meteoriteObstacleLeft > 0 && spriteTop > 200) {
    alert("GAME OVER!!! \nTHE METEORITE HAS STRUCK YOU. \nYou Got A Score Of: " + scoreCounter.innerText);
    location.reload();
  }
}, 20);

let fireObstacle = document.querySelector(".fire-ball");
setInterval(() => {
  const spriteTop = parseInt(window.getComputedStyle(sprite).getPropertyValue("top"));
  const fireObstacleleft = parseInt(window.getComputedStyle(fireObstacle).getPropertyValue("left"));

  if (fireObstacleleft < 185 && fireObstacleleft > 0 && spriteTop > 200) {
    alert("GAME OVER!!! \nTHE FIREBALL HAS STRUCK YOU. \nYou Got A Score Of: " + scoreCounter.innerText);
    location.reload();
  }
}, 30);

let ufoObstacle = document.querySelector(".ufo-obstacle");

setInterval(() => {
  const spriteTop = parseInt(window.getComputedStyle(sprite).getPropertyValue("top"));
  const ufoObstacleLeft = parseInt(window.getComputedStyle(ufoObstacle).getPropertyValue("left"));

  if (ufoObstacleLeft < 45 && ufoObstacleLeft > 0 && spriteTop > 149) {
    alert("GAME OVER!!! \nTHE SPACESHIP HAS INTERCEPTED YOU. \nYou Got A Score Of: " + scoreCounter.innerText);
    location.reload();
  }
}, 45);

let martianObstacle = document.querySelector(".martian-obstacle");

setInterval(() => {
  const spriteTop = parseInt(window.getComputedStyle(sprite).getPropertyValue("top"));
  const martianObstacleLeft = parseInt(window.getComputedStyle(martianObstacle).getPropertyValue("left"));

  if (martianObstacleLeft < 50 && martianObstacleLeft > 0 && spriteTop > 149) {
    alert("GAME OVER!!! \nTHE MARTIANS HAVE CAPTURED YOU. \nYou Got A Score Of: " + scoreCounter.innerText);
    location.reload();
  }
}, 50);

let planetaryObstacle1 = document.querySelector(".planetary-obstacle1");

setInterval(() => {
  const spriteTop = parseInt(window.getComputedStyle(sprite).getPropertyValue("top"));
  const planetaryObstacle1Left = parseInt(window.getComputedStyle(planetaryObstacle1).getPropertyValue("left"));

  if (planetaryObstacle1Left < 55 && planetaryObstacle1Left > 0 && spriteTop > 140) {
    alert("GAME OVER!!! \n THE PLANETS MASSIVE GRAVITATIONAL PULL HAS DRAWN YOU IN \nYou Got A Score Of: " + scoreCounter.innerText);
    location.reload();
  }
}, 55);

let planetaryObstacle2 = document.querySelector(".planetary-obstacle2");

setInterval(() => {
  const spriteTop = parseInt(window.getComputedStyle(sprite).getPropertyValue("top"));
  const planetaryObstacle2Left = parseInt(window.getComputedStyle(planetaryObstacle2).getPropertyValue("left"));

  if (planetaryObstacle2Left < 60 && planetaryObstacle2Left > 0 && spriteTop > 140) {
    alert("GAME OVER!!! \n THE PLANETS MASSIVE GRAVITATIONAL PULL HAS DRAWN YOU IN \nYou Got A Score Of: " + scoreCounter.innerText);
    location.reload();
  }
}, 60);

// Player Settings - Modals
let modalBtn = document.querySelector(".open-modal");
let modalBg = document.querySelector(".outer-modal");
let modalClose = document.querySelector(".close-modal");

modalBtn.addEventListener("click", function () {
  modalBg.classList.add("modal-toggle");
});

modalClose.addEventListener("click", function () {
  modalBg.classList.remove("modal-toggle");
});