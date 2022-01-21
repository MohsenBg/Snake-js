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
interface BodyPosition {
  type: ActionType.BODY_POSITION;
  payload: Array<position>;
}
export type Snake_Actions =
  | direction
  | BodyPosition
  | HeadPositionX
  | HeadPositionY;
