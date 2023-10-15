// userActions.js

import * as types from "../Type";
import instance from "../instance";

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/user"); // Replace with your API endpoint for fetching users
      dispatch(setUsers(res.data));
    } catch (error) {
      // Handle error
    }
  };
};

export const setUsers = (users) => {
  return {
    type: types.SET_USERS,
    payload: users,
  };
};
