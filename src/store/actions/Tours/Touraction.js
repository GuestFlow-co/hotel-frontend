// tourActions.js

import axios from "axios";
import * as types from "../Type";
import instance from "../instance";

export const fetchTours = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/tour");
      console.log("Tours", res.data)
      dispatch({
        type: types.FETCH_Tour,
        payload: { tours: res.data },
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const addTour = (tourData) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/tour`, tourData);
      if (res.status === 201) {
        dispatch({
          type: types.ADD_Tours,
          payload: { tour: res.data },
        });
        console.log("Tour created successfully");
      } else {
        console.error("Server returned an error status:", res.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
};
