import { combineReducers } from "redux";
import counter from "./counter";
import foodtrucks from "./foodtrucks";

export default combineReducers({ counter, foodtrucks });
