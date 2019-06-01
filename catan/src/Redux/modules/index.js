import { combineReducers } from "redux";

import players from "./player";
import board from "./board";

export default combineReducers({ players, board });
