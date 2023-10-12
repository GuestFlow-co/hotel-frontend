// bookingActions.js

import axios from "axios";
import * as types from "../Type";
import instance from "../instance";

export const fetchBookings = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/bookings");
      console.log("Bookings", res.data)
      dispatch({
        type: types.FETCH_BOOKINGS,
        payload: { bookings: res.data },
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const addBooking = (booking) => {
  console.log("111111111111",booking)
  return async (dispatch) => {
    try {
      const res = await instance.post('/bookings', booking);
      console.log(res)
      if (res.status === 201) {
        dispatch({
          type: types.ADD_BOOKING,
          payload: { booking: res.data },
        });
        console.log('Booking created successfully');
      } else {
        if (res.data && res.data.message === "No recipients defined") {
          console.error('No recipients defined');
        } else {
          console.error('Server returned an error status:', res.status);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
};
