import { combineReducers } from "redux";
import carReducer from "./car";

export default combineReducers({
  car: carReducer,
});
