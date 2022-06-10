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
const sprite = document.getElementById("astronaut-sprite");

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
const meteoriteObstacle = document.querySelector(".meteorite-obstacle");
setInterval(() => {
	scoreCounter.innerText++;
	let spriteTop = parseInt(window.getComputedStyle(sprite).getPropertyValue("top"));
	let meteoriteObstacleLeft = parseInt(window.getComputedStyle(meteoriteObstacle).getPropertyValue("left"));

	if (meteoriteObstacleLeft < 30 && meteoriteObstacleLeft > 0 && spriteTop > 300) {
		alert("GAME OVER!!! \nTHE METEORITE HAS STRUCK YOU. \nYou Got A Score Of: " + scoreCounter.innerText);
		location.reload();
	}

}, 10);

const fireObstacle = document.querySelector(".fire-ball");
setInterval(() => {
	const spriteTop = parseInt(window.getComputedStyle(sprite).getPropertyValue("top"));
	const fireObstacleleft = parseInt(window.getComputedStyle(fireObstacle).getPropertyValue("left"));

	if (fireObstacleleft < 30 && fireObstacleleft > 0 && spriteTop > 300) {
		alert("GAME OVER!!! \nTHE FIREBALL HAS STRUCK YOU. \nYou Got A Score Of: " + scoreCounter.innerText);
		location.reload();
	}
}, 10);

const ufoObstacle = document.querySelector(".ufo-obstacle");

setInterval(() => {
	const spriteTop = parseInt(window.getComputedStyle(sprite).getPropertyValue("top"));
	const ufoObstacleLeft = parseInt(window.getComputedStyle(ufoObstacle).getPropertyValue("left"));

	if (ufoObstacleLeft < 30 && ufoObstacleLeft > 0 && spriteTop > 300) {
		alert("GAME OVER!!! \nTHE SPACESHIP HAS INTERCEPTED YOU. \nYou Got A Score Of: " + scoreCounter.innerText);
		location.reload();
	}
}, 10);

const martianObstacle = document.querySelector(".martian-obstacle");

setInterval(() => {
	const spriteTop = parseInt(window.getComputedStyle(sprite).getPropertyValue("top"));
	const martianObstacleLeft = parseInt(window.getComputedStyle(martianObstacle).getPropertyValue("left"));

	if (martianObstacleLeft < 25 && martianObstacleLeft > 0 && spriteTop > 300) {
		alert("GAME OVER!!! \nTHE MARTIANS HAVE CAPTURED YOU. \nYou Got A Score Of: " + scoreCounter.innerText);
		location.reload();
	}
}, 10);

const planetaryObstacle1 = document.querySelector(".planetary-obstacle1");

setInterval(() => {
	const spriteTop = parseInt(window.getComputedStyle(sprite).getPropertyValue("top"));
	const planetaryObstacle1Left = parseInt(window.getComputedStyle(planetaryObstacle1).getPropertyValue("left"));

	if (planetaryObstacle1Left < 20 && planetaryObstacle1Left > 0 && spriteTop > 300) {
		alert("GAME OVER!!! \n THE PLANETS MASSIVE GRAVITATIONAL PULL HAS DRAWN YOU IN \nYou Got A Score Of: " + scoreCounter.innerText);
		location.reload();
	}
}, 10);

const planetaryObstacle2 = document.querySelector(".planetary-obstacle2");

setInterval(() => {
	const spriteTop = parseInt(window.getComputedStyle(sprite).getPropertyValue("top"));
	const planetaryObstacle2Left = parseInt(window.getComputedStyle(planetaryObstacle2).getPropertyValue("left"));

	if (planetaryObstacle2Left < 20 && planetaryObstacle2Left > 0 && spriteTop > 300) {
		alert("GAME OVER!!! \n THE PLANETS MASSIVE GRAVITATIONAL PULL HAS DRAWN YOU IN \nYou Got A Score Of: " + scoreCounter.innerText);
		location.reload();
	}
}, 10);


// Player Settings - Modals
let modalBtn = document.querySelector(".open-modal");
let modalBg = document.querySelector(".outer-modal");
let modalClose = document.querySelector(".close-modal");

modalBtn.addEventListener("click", function() {
	modalBg.classList.add("modal-toggle");
});

modalClose.addEventListener("click", function() {
	modalBg.classList.remove("modal-toggle");
});