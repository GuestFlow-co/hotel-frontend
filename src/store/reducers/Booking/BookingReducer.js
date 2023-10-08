// bookingReducer.js

import * as types from "../../actions/Type";

const initialState = {
  bookings: [],
  loading: true,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_BOOKINGS:
      return {
        ...state,
        bookings: action.payload.bookings,
        loading: false,
      };
    case types.ADD_BOOKING:
      return {
        ...state,
        bookings: [...state.bookings, action.payload.booking],
      };
    default:
      return state;
  }
};

export default bookingReducer;
