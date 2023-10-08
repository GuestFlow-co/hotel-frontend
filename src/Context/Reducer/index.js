import axios from "axios";
import React, { useState, useReducer } from "react";

export const INITIAL_STATES = {
  Tour: [],
  oneTour:[],
};

export const reducerHandler = (state, action) => {
  switch (action.type) {
    case "SET_Tour":
      return {
        ...state,
        Tour: action.payload,
      };
      case "ONE_Tour":
        console.log(action.payload,"action.payload");
      return {
        ...state,
        oneTour: action.payload,
      };
    default:
      return state;
  }
};

// export const Tour = () => {
//   const [state, dispatch] = useReducer(reducerHandler, INITIAL_STATES);

//   const fetchTour = async () => {
//     try {
//       const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/tour`);
//       dispatch({ type: "SET_Tour", payload: res.data });
//       console.log(res.data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

 
// };

// Rest of your code...
