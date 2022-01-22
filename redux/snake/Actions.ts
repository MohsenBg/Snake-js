import { Snake_ActionType as ActionType } from "./ActionType";
interface position {
  x: number;
  y: number;
}

interface direction {
  type: ActionType.DIRECTION;
  payload: String;
}

interface HeadPositionX {
  type: ActionType.HEAD_POSITION_X;
  payload: number;
}
interface HeadPositionY {
  type: ActionType.HEAD_POSITION_Y;
  payload: number;
}
interface gameOver {
  type: ActionType.GAME_OVER;
}
interface restGame {
  type: ActionType.RESET_GAME;
}
interface length {
  type: ActionType.LENGTH;
  payload: number;
}

export type Snake_Actions =
  | direction
  | restGame
  | HeadPositionX
  | HeadPositionY
  | length
  | gameOver;
