import { Snake_Actions as Actions } from "./Actions";
import { Snake_ActionType as ActionType } from "./ActionType";

interface coord {
  x: number;
  y: number;
}

const initialState = {
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

const body = (headPos: coord) => {
  let newBody = initialState.body;
  if (initialState.len === initialState.body.length) newBody.shift();
  newBody.push(headPos);
  return newBody;
};

export const ReducerSnake = (state = initialState, actions: Actions) => {
  switch (actions.type) {
    case ActionType.DIRECTION:
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
        body: body(newPositionX),
      };

    case ActionType.HEAD_POSITION_Y:
      let newPositionY = {
        x: state.headPosition.x,
        y: state.headPosition.y + actions.payload,
      };
      return {
        ...state,
        headPosition: newPositionY,
        body: body(newPositionY),
      };
    case ActionType.BODY_POSITION:
      return { ...state, body: actions.payload };
    default:
      return state;
  }
};
