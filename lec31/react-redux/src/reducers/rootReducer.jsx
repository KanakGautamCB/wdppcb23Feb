import colorReducer from "./colorReducer/color.reducer";
import counterReducer from "./counterReducer/counter.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({colorReducer, counterReducer});    

export default rootReducer; 