import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Snake_ActionType } from "../../../redux/snake/ActionType";
import { initialState } from "../../../redux/store";
import { boardSize, snakeSize } from "../other/responsive/handlerSize";
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

  const speed = useSelector(
    (state: typeof initialState) =>
      //@ts-ignore
      state.snake.speed
  );

  //!change Size Snake event resize and center it
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
          transform: `translate(${headPosition.x}px,${headPosition.y}px)`,
          transition: `${speed}ms`,
        }}
      >
        <div
          id="snake"
          className={styles.snake_head}
          style={{
            width: `${snake_size}px`,
            height: `${snake_size}px`,
            transform:
              direction === "right"
                ? ` rotate(90deg)`
                : direction === "down"
                ? ` rotate(180deg)`
                : direction === "left"
                ? ` rotate(270deg)`
                : ``,
          }}
        />
      </div>

      {bodyPosition.slice(0, bodyPosition.length - 1).map((item: coord) => {
        return (
          <div
            className={styles.body}
            key={Math.random()}
            style={{
              width: `${snake_size}px`,
              height: `${snake_size}px`,
              transform: `translate(${item.x}px,${item.y}px)`,
            }}
          >
            <div
              className={styles.body}
              style={{
                width: `${snake_size}px`,
                height: `${snake_size}px`,
                transform:
                  direction === "right"
                    ? ` rotate(90deg)`
                    : direction === "down"
                    ? ` rotate(180deg)`
                    : direction === "left"
                    ? ` rotate(270deg)`
                    : ``,
                transition: `${speed}ms`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Snake;
