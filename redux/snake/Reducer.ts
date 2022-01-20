import { Snake_Actions as Actions } from "./Actions";
import { Snake_ActionType as ActionType } from "./ActionType";

const snake = {
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

export const ReducerCoinData = (state = snake, actions: Actions) => {
  switch (actions.type) {
    case ActionType.DIRECTION:
      return { ...state, direction: actions.payload };
    case ActionType.HEAD_POSITION:
      return { ...state, headPosition: actions.payload };
    case ActionType.BODY_POSITION:
      return { ...state, body: actions.payload };
    default:
      return state;
  }
};
