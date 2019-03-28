import { combineReducers } from "redux";

import profile from "./profileReducer";
import project from "./projectReducer";

export default combineReducers({
  profile,
  project
});
