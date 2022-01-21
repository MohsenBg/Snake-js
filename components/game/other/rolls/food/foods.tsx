import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { initialState } from "../../../../../redux/store";
import { snakeSize } from "../../responsive/handlerSize";
import styles from "./food.module.scss";
const Food = () => {
  const [foodSize, setFoodSize] = useState(0);
  const [foodCoordinate, setFoodCoordinate] = useState({ x: 0, y: 0 });
  const headPosition = useSelector(
    (state: typeof initialState) =>
      //@ts-ignore
      state.snake.headPosition
  );

  useEffect(() => {
    const setSize = () => {
      setFoodSize(snakeSize());
    };
    setSize();
    window.addEventListener("resize", setSize);
  }, []);

  const generateFood = () => {
    let coordinateX = Math.ceil(Math.random() * 19) * foodSize;
    let coordinateY = Math.ceil(Math.random() * 19) * foodSize;
    setFoodCoordinate({ x: coordinateX, y: coordinateY });
  };

  useEffect(() => {
    generateFood();
  }, [foodSize]);

  useEffect(() => {
    if (
      headPosition.x === foodCoordinate.x &&
      headPosition.y === foodCoordinate.y
    )
      generateFood();
  }, [headPosition]);

  return (
    <div className={styles.container}>
      <div
        className={styles.food}
        style={{
          position: "absolute",
          zIndex: "10",
          top: `${foodCoordinate.y}px`,
          left: `${foodCoordinate.x}px`,
          width: `${foodSize}px`,
          height: `${foodSize}px`,
        }}
      />
    </div>
  );
};

export default Food;
