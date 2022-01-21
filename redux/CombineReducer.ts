import { combineReducers } from "redux";
import { ReducerSnake } from "./snake/Reducer";
import { ReducerLoading } from "./Loading/Reducer";
export const RootReducer = combineReducers({
  loading: ReducerLoading,
  snake: ReducerSnake,
});
