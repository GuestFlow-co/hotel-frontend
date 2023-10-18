// tourActions.js

import axios from "axios";
import * as types from "../Type";
import instance from "../instance";

export const fetchTours = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/tour");
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
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/tour`, tourData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Specify the content type
        },
      });

      if (res.status === 201) {
        dispatch({
          type: types.ADD_Tours,
          payload: { tour: res.data },
        });
      } else {
        console.error("Server returned an error status:", res.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
};

