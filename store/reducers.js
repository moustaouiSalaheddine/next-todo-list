import { combineReducers } from "redux";
import TodoReducer from "./todo/reducer";

const rootReducer = combineReducers({
  TodoReducer,
});
export default rootReducer;
