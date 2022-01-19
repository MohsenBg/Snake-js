//!speedGame
let speed = 20;
let direction = "none";
let position = {
  x: 200,
  y: 200,
};

let len = 1;
let body = [];

let food_position = {
  x: 0,
  y: 0,
};
//! get boardGame
let boardGame = document.getElementById("mainBoard");

const generateFood = () => {
  let food = document.getElementById("food");
  let x = Math.ceil(Math.random() * 20) * 20;
  let y = Math.ceil(Math.random() * 20) * 20;
  food_position.x = x;
  food_position.y = y;
  food.style.top = `${food_position.y}px `;
  food.style.left = `${food_position.x}px `;
};
//! eat food
const eatFood = () => {
  if (position.x === food_position.x && position.y === food_position.y) {
    generateFood();
    len++;
    document.getElementById(
      "score"
    ).innerHTML = `<div class="number" id="score">${(len - 1) * 10}</div>`;
    boardGame.innerHTML += `<div class="body" id="body${len - 1}"></div>`;
  }
};
//! handler function keyPress
const handelOnPressKey = (e) => {
  switch (e.code) {
    case "KeyW":
    case "ArrowUp":
      direction = "up";
      break;
    case "KeyD":
    case "ArrowRight":
      direction = "right";
      break;
    case "KeyS":
    case "ArrowDown":
      direction = "down";
      break;
    case "KeyA":
    case "ArrowLeft":
      direction = "left";
    default:
      break;
  }
};

//! event handler for control snake
window.addEventListener("keydown", handelOnPressKey);
function waitforme(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
const move = async () => {
  while (true) {
    switch (direction) {
      case "up":
        document.getElementById(
          "snake"
        ).style.webkitTransform = `rotate(${0}deg)`;
        position.y -= speed;
        break;
      case "right":
        document.getElementById(
          "snake"
        ).style.webkitTransform = `rotate(${90}deg)`;
        position.x += speed;
        break;
      case "down":
        document.getElementById(
          "snake"
        ).style.webkitTransform = `rotate(${180}deg)`;
        position.y += speed;
        break;
      case "left":
        document.getElementById(
          "snake"
        ).style.webkitTransform = `rotate(${270}deg)`;
        position.x -= speed;
      default:
        break;
    }
    await gameOver();

    eatFood();

    if (direction !== "none") {
      body.push({ x: position.x, y: position.y });
      if (len < body.length) body.shift();
      for (let i = 0; i < body.length - 1; i++) {
        document.getElementById(`body${i + 1}`).style.top = `${body[i].y}px`;
        document.getElementById(`body${i + 1}`).style.left = `${body[i].x}px`;
      }
      document.getElementById("snake").style.top = `${position.y}px`;
      document.getElementById("snake").style.left = `${position.x}px`;
    }
    await waitforme(100);
  }
};

const gameOver = async () => {
  let hitSelf = false;
  for (let i = 0; i < body.length - 1; i++) {
    if (position.x === body[i].x && position.y === body[i].y) {
      hitSelf = true;
    }
  }
  if (
    position.x < 0 ||
    position.x > 400 ||
    position.y < 0 ||
    position.y > 400 ||
    hitSelf
  ) {
    // direction = "none";
    // position.x = 200;
    // position.y = 200;
    // for (let i = 0; i < body.length - 1; i++) {
    //   document.getElementById(`body${i + 1}`).remove();
    //   body.shift();
    // }
    // len = 1;

    // document.getElementById("snake").style.top = `${position.y}px`;
    // document.getElementById("snake").style.left = `${position.x}px`;
    // generateFood();
    await window.alert("game over your score: " + (len - 1) * 10);
    window.location.reload(true);
  }
};

generateFood();
move();
