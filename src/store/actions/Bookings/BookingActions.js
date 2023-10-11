// bookingActions.js

import axios from "axios";
import * as types from "../Type";
import instance from "../instance";

export const fetchBookings = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/bookings");
      console.log("Bookings",res.data)
      dispatch({
        type: types.FETCH_BOOKINGS,
        payload: { bookings: res.data },
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const addBooking = (bookingData) => {
  console.log(bookingData)
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:8000/bookings", bookingData);
      if (res.status === 201) {
        dispatch({
          type: types.ADD_BOOKING,
          payload: { booking: res.data },
        });
        console.log("Booking created successfully");
      } else {
        console.error("Server returned an error status:", res.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
};
