// tourReducer.js

import * as types from "../../actions/Type";

const initialState = {
  tours: [],
  loading: true,
};

const tourReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_Tour:
      return {
        ...state,
        tours: action.payload.tours,
        loading: false,
      };
    case types.ADD_Tours:
      return {
        ...state,
        tours: [...state.tours, action.payload.tour],
      };
    default:
      return state;
  }
};

export default tourReducer;
