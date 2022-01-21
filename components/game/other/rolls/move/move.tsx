import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Snake_ActionType } from "../../../../../redux/snake/ActionType";
import { initialState } from "../../../../../redux/store";
import { boardSize, snakeSize } from "../../responsive/handlerSize";

const Move = () => {
  const direction = useSelector(
    (state: typeof initialState) =>
      //@ts-ignore
      state.snake.direction
  );

  const dispatch = useDispatch();
  const DispatchHeadPosition = (isX: boolean, pos: number) => {
    if (isX) {
      dispatch({ type: Snake_ActionType.HEAD_POSITION_X, payload: pos });
    } else {
      dispatch({ type: Snake_ActionType.HEAD_POSITION_Y, payload: pos });
    }
  };
  useEffect(() => {
    if (direction !== "none") {
      const interval = setInterval(() => move_snake(), 100);
      return () => {
        clearInterval(interval);
      };
    }
  }, [direction]);

  useEffect(() => {
    DispatchHeadPosition(true, boardSize() / 2);
    DispatchHeadPosition(false, boardSize() / 2);
  }, []);

  const move_snake = () => {
    let snake_size = snakeSize();

    switch (direction) {
      case "up":
        DispatchHeadPosition(false, -snake_size);
        break;
      case "right":
        DispatchHeadPosition(true, snake_size);
        break;
      case "down":
        DispatchHeadPosition(false, snake_size);
        break;
      case "left":
        DispatchHeadPosition(true, -snake_size);
        break;
      default:
        break;
    }
  };

  return null;
};

export default Move;
