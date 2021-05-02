import { combineReducers } from "redux";

import { UserDataReducer } from "./UserData/reducer";
import { UserState } from "./UserData/types";

export interface ApplicationState {
  user: UserState;
}
