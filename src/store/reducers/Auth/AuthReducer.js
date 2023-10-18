// authReducer.js

import * as types from "../../actions/Type";

const initialState = {
  users: null,
};

const reducer = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;