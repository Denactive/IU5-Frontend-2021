import { Reducer } from "redux";

import { UserState, initialState, UserDataActionTypes } from "./types";

export const UserDataReducer: Reducer<UserState> = (state: UserState = initialState, action: any): any => {
  switch (action.type) {
    case UserDataActionTypes.FETCH_USER_REQUEST: {
      return { ...state, loading: true };
    }
    case UserDataActionTypes.FETCH_USER_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case UserDataActionTypes.FETCH_USER_NOT_FOUND: {
      return { ...state, loading: false, errors: action.payload };
    }
    case UserDataActionTypes.FETCH_USER_ERROR: {
      return {
        errors: state.errors,
        loading: state.loading,
        data: state.data
      };
    }
    default: {
      return state;
    }
  }
};