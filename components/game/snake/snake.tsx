import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { initialState } from "../../../redux/store";
import { snakeSize } from "../other/responsive/handlerSize";
import styles from "./snake.module.scss";
const Snake = () => {
  const [snake_size, setSnake_size] = useState(0);

  const headPosition = useSelector(
    (state: typeof initialState) =>
      //@ts-ignore
      state.snake.headPosition
  );

  const direction = useSelector(
    (state: typeof initialState) =>
      //@ts-ignore
      state.snake.direction
  );

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
        style={{
          width: `${snake_size}px`,
          height: `${snake_size}px`,
          transform:
            direction === "right"
              ? `translate(${headPosition.x}px,${headPosition.y}px) rotate(90deg)`
              : direction === "down"
              ? `translate(${headPosition.x}px,${headPosition.y}px) rotate(180deg)`
              : direction === "left"
              ? `translate(${headPosition.x}px,${headPosition.y}px) rotate(270deg)`
              : `translate(${headPosition.x}px,${headPosition.y}px)`,
        }}
      />
    </div>
  );
};

export default Snake;
