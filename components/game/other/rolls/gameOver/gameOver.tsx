import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Snake_ActionType } from "../../../../../redux/snake/ActionType";
import { initialState } from "../../../../../redux/store";
import { boardSize } from "../../responsive/handlerSize";
import styles from "./gameOver.module.scss";
const GameOver = () => {
  const [gameOverStatus, setGameOverStatus] = useState(false);
  const score = useSelector(
    (state: typeof initialState) =>
      //@ts-ignore
      state.snake.score
  );

  const bodyPosition = useSelector(
    (state: typeof initialState) =>
      //@ts-ignore
      state.snake.body
  );

  const headPosition = useSelector(
    (state: typeof initialState) =>
      //@ts-ignore
      state.snake.headPosition
  );

  const DispatchHeadPosition = (isX: boolean, pos: number) => {
    if (isX) {
      dispatch({ type: Snake_ActionType.HEAD_POSITION_X, payload: pos });
    } else {
      dispatch({ type: Snake_ActionType.HEAD_POSITION_Y, payload: pos });
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    let hit_self = false;
    let hit_wall = false;
    for (let i = 0; i < bodyPosition.length - 1; i++) {
      if (
        bodyPosition[i].x === headPosition.x &&
        bodyPosition[i].y === headPosition.y
      ) {
        hit_self = true;
      }
    }
    if (
      headPosition.x < 0 ||
      headPosition.y < 0 ||
      headPosition.x >= boardSize() ||
      headPosition.y >= boardSize()
    ) {
      hit_wall = true;
    }
    if (hit_self || hit_wall) {
      setGameOverStatus(true);
      dispatch({ type: Snake_ActionType.GAME_OVER });
    }
  }, [headPosition]);

  const reset = () => {
    dispatch({ type: Snake_ActionType.RESET_GAME });

    DispatchHeadPosition(true, boardSize() / 2);
    DispatchHeadPosition(false, boardSize() / 2);
    setGameOverStatus(false);
  };

  return (
    <>
      {gameOverStatus ? (
        <div className={styles.container}>
          <div className={styles.background}>
            <h3>game over</h3>
            <div className={styles.text}>your score is {score}</div>
            <div className={styles.btn} onClick={reset}>
              try again
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default GameOver;
