import React, { useEffect, useState } from "react";
import Controller from "../other/key&Touch/controller";
import { boardSize } from "../other/responsive/handlerSize";
import Snake from "../snake/snake";
import styles from "./game.module.scss";

const Game = () => {
  const [board_game_size, setBoard_game_size] = useState(0);
  useEffect(() => {
    const changeWindowSize = () => {
      setBoard_game_size(boardSize());
    };
    changeWindowSize();
    window.addEventListener("resize", changeWindowSize);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.board_game_container}>
        <div
          className={styles.board_game}
          style={{
            width: `${board_game_size}px`,
            height: `${board_game_size}px`,
          }}
        >
          <Controller />
          <Snake />
        </div>

        <>
          <div
            className={styles.wallHorizontal}
            style={{
              top: "-20px",
              width: `${board_game_size}px`,
            }}
          />
          <div
            className={styles.wallVertical}
            style={{
              top: "-20px",
              left: "-20px",
              height: `${board_game_size + 40}px `,
            }}
          />
          <div
            className={styles.wallVertical}
            style={{
              top: "-20px",
              right: "-20px",
              height: `${board_game_size + 40}px`,
            }}
          />
          <div
            className={styles.wallHorizontal}
            style={{
              bottom: "-20px",
              width: `${board_game_size}px`,
            }}
          />
        </>
      </div>
    </div>
  );
};

export default Game;
