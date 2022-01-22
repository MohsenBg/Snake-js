import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { initialState } from "../../../redux/store";
import { snakeSize } from "../other/responsive/handlerSize";
import styles from "./snake.module.scss";

interface coord {
  x: number;
  y: number;
}

const Snake = () => {
  const [snake_size, setSnake_size] = useState(0);

  const headPosition = useSelector(
    (state: typeof initialState) =>
      //@ts-ignore
      state.snake.headPosition
  );
  const bodyPosition = useSelector(
    (state: typeof initialState) =>
      //@ts-ignore
      state.snake.body
  );

  const direction = useSelector(
    (state: typeof initialState) =>
      //@ts-ignore
      state.snake.direction
  );

  useEffect(() => {
    const changeWindowSize = () => {
      if (direction === "none") {
        setSnake_size(snakeSize);
      }
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

      {bodyPosition.slice(0, bodyPosition.length - 1).map((item: coord) => {
        return (
          <div
            key={Math.random()}
            className={styles.body}
            style={{
              width: `${snake_size}px`,
              height: `${snake_size}px`,
              transform:
                direction === "right"
                  ? `translate(${item.x}px,${item.y}px) rotate(90deg)`
                  : direction === "down"
                  ? `translate(${item.x}px,${item.y}px) rotate(180deg)`
                  : direction === "left"
                  ? `translate(${item.x}px,${item.y}px) rotate(270deg)`
                  : `translate(${item.x}px,${item.y}px)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Snake;
