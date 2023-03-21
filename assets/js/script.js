let character = document.getElementById("character");
let game = document.querySelector(".game-window")

function jump() {
  character.classList.add("jump");

  setTimeout(function() {
    character.classList.remove("jump");
  }, 1000);
}

game.addEventListener("click", function (event) {
  jump();
});