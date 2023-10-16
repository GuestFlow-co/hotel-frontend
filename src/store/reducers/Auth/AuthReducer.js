// authReducer.js

import * as types from "../../actions/Type";

const initialState = {
  user: null,
  users: [], // Add a new property to store users
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case types.SET_USERS: // Handle the action to set users
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;