import { combineReducers } from "redux";
import { dataReducer as tourDetails } from "./dataReducer";

const rootReducer = combineReducers({
  tourDetails,
});

export default rootReducer;
