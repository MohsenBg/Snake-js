export const MovementSize = 20;

export const boardSize = () => {
  if (typeof window !== "undefined") {
    const width = Math.floor(window.innerWidth);
    const height = Math.floor(window.innerHeight);
    let smaller = width >= height ? height : width;
    while (true) {
      if (smaller % 20 === 0) break;
      smaller--;
    }
    return smaller - 40;
  } else {
    return 400;
  }
};

export const snakeSize = () => {
  const board_size = boardSize();
  let snake_size = board_size / MovementSize;
  return snake_size;
};
