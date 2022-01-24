import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Snake_ActionType } from "../../../../../redux/snake/ActionType";
import { initialState } from "../../../../../redux/store";
import { snakeSize } from "../../responsive/handlerSize";
import styles from "./food.module.scss";

const Food = () => {
  const [foodSize, setFoodSize] = useState(0);

  const [foodCoordinate, setFoodCoordinate] = useState({
    x: -25000,
    y: -25000,
  });

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

  const gameOver = useSelector(
    (state: typeof initialState) =>
      //@ts-ignore
      state.snake.gameOver
  );

  //! add delay
  function daleyLoop(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  //! generateFood and set new coordinate for food + animation
  const generateFood = () => {
    let coordinateX = Math.ceil(Math.random() * 19) * foodSize;
    let coordinateY = Math.ceil(Math.random() * 19) * foodSize;
    setFoodCoordinate({ x: coordinateX, y: coordinateY });
    const foodDiv = document.getElementById("food");
    const animationsDiv = async () => {
      if (foodDiv) {
        for (let i = 1; i <= 5; i++) {
          foodDiv.style.transform = `scale(${1 + i / 10})`;
          await daleyLoop(100);
        }
        for (let i = 1; i <= 5; i++) {
          foodDiv.style.transform = `scale(${1.5 - i / 10})`;
          await daleyLoop(100);
        }
        for (let i = 1; i <= 5; i++) {
          foodDiv.style.transform = `scale(${1 + i / 10})`;
          await daleyLoop(100);
        }
        for (let i = 1; i <= 5; i++) {
          foodDiv.style.transform = `scale(${1.5 - i / 10})`;
          await daleyLoop(100);
        }
      }
    };
    animationsDiv();
  };

  //! handel food size and coordinate event resize
  useEffect(() => {
    const setSize = () => {
      if (direction === "none") {
        setFoodSize(snakeSize());
        generateFood();
      }
    };
    setSize();
    window.addEventListener("resize", setSize);
  }, []);

  //! when user GameOver and reset game new food generate
  useEffect(() => {
    if (!gameOver) {
      generateFood();
    }
  }, [gameOver]);

  const dispatch = useDispatch();
  //! check food eat or not
  useEffect(() => {
    if (
      headPosition.x === foodCoordinate.x &&
      headPosition.y === foodCoordinate.y
    ) {
      generateFood();
      dispatch({ type: Snake_ActionType.LENGTH, payload: 1 });
    }
  }, [headPosition]);

  return (
    <div className={styles.container}>
      <div
        id="food"
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
