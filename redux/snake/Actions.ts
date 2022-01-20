import { Snake_ActionType as ActionType } from "./ActionType";
interface position {
  x: number;
  y: number;
}

interface direction {
  type: ActionType.DIRECTION;
  payload: String;
}

interface HeadPosition {
  type: ActionType.HEAD_POSITION;
  payload: position;
}
interface BodyPosition {
  type: ActionType.BODY_POSITION;
  payload: Array<position>;
}
export type Snake_Actions = direction | BodyPosition | HeadPosition;
