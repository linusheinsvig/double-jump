let character = document.getElementById("character");
let game = document.querySelector(".game-window")
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

obstacle.addEventListener('animationiteration', () => {
  let random = ((Math.random()*600)+300);
  obstacle.style.top = random + "px";
});