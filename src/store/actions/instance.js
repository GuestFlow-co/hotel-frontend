import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    "Content-Type": "multipart/form-data", 
  },
});

export default instance;
