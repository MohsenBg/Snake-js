import React, { useEffect, useState } from "react";
import { snakeSize } from "../other/responsive/handlerSize";
import styles from "./snake.module.scss";
const Snake = () => {
  const [snake_size, setSnake_size] = useState(0);
  useEffect(() => {
    const changeWindowSize = () => {
      setSnake_size(snakeSize);
    };
    changeWindowSize();
    window.addEventListener("resize", changeWindowSize);
  }, []);
  return (
    <div className={styles.container}>
      <div
        className={styles.snake_head}
        style={{ width: `${snake_size}px`, height: `${snake_size}px` }}
      />
    </div>
  );
};

export default Snake;
