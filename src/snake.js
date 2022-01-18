let snake = document.getElementById("snake");

let OnPressKey = document.addEventListener("keydown", logKey);
let position = {
  x: 200,
  y: 200,
};

let speed = 10;

function logKey(e) {
  console.log(e.code);
  switch (e.code) {
    case "KeyW":
    case "ArrowUp":
      position.y -= speed;
      break;
    case "KeyD":
    case "ArrowRight":
      position.x += speed;
      break;
    case "KeyS":
    case "ArrowDown":
      position.y += speed;
      break;
    case "KeyA":
    case "ArrowLeft":
      position.x -= speed;
    default:
      break;
  }
  snake.style.marginTop = `${position.y}px`;
  snake.style.marginLeft = `${position.x}px`;
}
