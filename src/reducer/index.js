import reducer from "./reducer";
import { combineReducers } from "redux";

//Combinamos los reducers, en este caso uno solo.
export const allReducers = combineReducers({
  counter: reducer,
});
