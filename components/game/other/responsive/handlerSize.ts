export const MovementSize = 20;

export const boardSize = () => {
  if (typeof window !== "undefined") {
    const width = Math.floor(window.innerWidth);
    const height = Math.floor(window.innerHeight);
    let smaller = width >= height ? height : width;
    while (true) {
      if (smaller % MovementSize === 0) break;
      smaller--;
    }
    let wall = 2 * (smaller / MovementSize);
    while (true) {
      if (wall % MovementSize === 0) break;
      wall--;
    }

    return smaller - 2 * wall;
  } else {
    return 400;
  }
};

export const snakeSize = () => {
  const board_size = boardSize();
  let snake_size = board_size / MovementSize;
  return snake_size;
};
