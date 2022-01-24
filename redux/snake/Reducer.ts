import { boardSize } from "../../components/game/other/responsive/handlerSize";
import { Snake_Actions as Actions } from "./Actions";
import { Snake_ActionType as ActionType } from "./ActionType";

interface coord {
  x: number;
  y: number;
}

const initialState = {
  speed: 200,
  gameOver: false,
  score: 0,
  len: 1,
  direction: "none",
  headPosition: {
    x: 0,
    y: 0,
  },
  body: [
    {
      x: 0,
      y: 0,
    },
  ],
};

const body = (headPos: coord, len: number, bodySnake: Array<coord>) => {
  let newBody = bodySnake;
  if (len === bodySnake.length) newBody.shift();
  newBody.push(headPos);
  return newBody;
};

export const ReducerSnake = (state = initialState, actions: Actions) => {
  switch (actions.type) {
    case ActionType.DIRECTION:
      if (state.gameOver) return { ...state };
      if (state.direction === "up" && actions.payload === "down")
        return { ...state };
      if (state.direction === "down" && actions.payload === "up")
        return { ...state };
      if (state.direction === "right" && actions.payload === "left")
        return { ...state };
      if (state.direction === "left" && actions.payload === "right")
        return { ...state };
      return { ...state, direction: actions.payload };
    case ActionType.HEAD_POSITION_X:
      let newPositionX = {
        x: state.headPosition.x + actions.payload,
        y: state.headPosition.y,
      };
      return {
        ...state,
        headPosition: newPositionX,
        body: body(newPositionX, state.len, state.body),
      };

    case ActionType.HEAD_POSITION_Y:
      let newPositionY = {
        x: state.headPosition.x,
        y: state.headPosition.y + actions.payload,
      };
      return {
        ...state,
        headPosition: newPositionY,
        body: body(newPositionY, state.len, state.body),
      };

    case ActionType.RESET_GAME:
      return {
        speed: 200,
        gameOver: false,
        score: 0,
        len: 1,
        direction: "none",
        headPosition: {
          x: 0,
          y: 0,
        },
        body: [
          {
            x: 0,
            y: 0,
          },
        ],
      };

    case ActionType.LENGTH:
      let newLen = actions.payload + state.len;
      return { ...state, len: newLen, score: (newLen - 1) * 10 };
    case ActionType.GAME_OVER:
      return { ...state, gameOver: true, direction: "none" };
    case ActionType.CENTER:
      return {
        ...state,
        headPosition: {
          x: actions.payload,
          y: actions.payload,
        },
      };

    default:
      return state;
  }
};
