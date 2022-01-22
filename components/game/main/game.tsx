import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { initialState } from "../../../redux/store";
import Controller from "../other/key&Touch/controller";
import { boardSize, snakeSize } from "../other/responsive/handlerSize";
import Food from "../other/rolls/food/foods";
import GameOver from "../other/rolls/gameOver/gameOver";
import Move from "../other/rolls/move/move";
import Snake from "../snake/snake";
import styles from "./game.module.scss";

const Game = () => {
  const [board_game_size, setBoard_game_size] = useState(0);
  const [wallSize, setWallSize] = useState(0);

  const score = useSelector(
    (state: typeof initialState) =>
      //@ts-ignore
      state.snake.score
  );

  const direction = useSelector(
    (state: typeof initialState) =>
      //@ts-ignore
      state.snake.direction
  );

  useEffect(() => {
    const changeWindowSize = () => {
      if (direction === "none") {
        setBoard_game_size(boardSize());
        setWallSize(snakeSize());
      }
    };
    changeWindowSize();
    window.addEventListener("resize", changeWindowSize);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.score}>score:{score}</div>
      <div className={styles.board_game_container}>
        <div
          className={styles.board_game}
          style={{
            width: `${board_game_size}px`,
            height: `${board_game_size}px`,
          }}
        >
          <Snake />
          <Controller />
          <Move />
          <Food />
          <GameOver />
        </div>

        <>
          <div
            className={styles.wallHorizontal}
            style={{
              right: "0",
              top: `-${wallSize}px`,
              height: `${wallSize}px`,
              width: `${board_game_size + wallSize}px`,
            }}
          />
          <div
            className={styles.wallVertical}
            style={{
              top: `0`,
              width: `${wallSize}px`,
              height: `${board_game_size + wallSize}px`,
              left: `-${wallSize}px`,
            }}
          />
          <div
            className={styles.wallVertical}
            style={{
              top: `-${wallSize}px`,
              width: `${wallSize}px`,
              height: `${board_game_size + wallSize}px`,
              right: `-${wallSize}px`,
            }}
          />
          <div
            className={styles.wallHorizontal}
            style={{
              bottom: `-${wallSize}px`,
              height: `${wallSize}px`,
              width: `${board_game_size + wallSize}px`,
            }}
          />
        </>
      </div>
    </div>
  );
};

export default Game;
