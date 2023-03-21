let character = document.getElementById("character");
let game = document.querySelector(".game-window")
let point = document.getElementById("point")
let obstacle = document.getElementById("obstacle")

function jump() {
  character.classList.add("jump");

  setTimeout(function() {
    character.classList.remove("jump");
  }, 1000);
}

game.addEventListener("click", function (event) {
  jump();
});

function djump() {
  character.classList.add("djump");

  setTimeout(function() {
    character.classList.remove("djump");
  }, 1500);
}

game.addEventListener("dblclick", function (event) {
  djump();
});

 point.addEventListener('animationiteration', () => {
  let random = ((Math.random()*300));
  point.style.top = random + "px";
});

let isAlive = setInterval(function (){

  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
  let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"))

  if(obstacleLeft < 37 && obstacleLeft > 0 && characterTop >= 200) {
    console.log("collision");
    aler("Game Over!")
  }

}, 10)