import React, { useEffect, useReducer, useState } from "react";

import cookie from "react-cookies";
import jwt_decode from "jwt-decode";
import { initialState, ReducerLogin } from "../../store/reducers/ReducerLogin";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

export const LoginContext = React.createContext();

function LoginProvider(props) {
  const [loginData, dispatch] = useReducer(ReducerLogin, initialState);
  const navigate = useNavigate();

  const toast = useToast();
  const [errorMessage, setErrorMessage] = useState(""); // State to store the error message

  function able(capability) {
    return loginData.user.capabilities?.includes(capability);
  }

  async function login(username, password) {
    console.log("...RUNNING");
    let { logged, token, user } = loginData;

    try {
      let response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/signin`,
        {},
        {
          // for login
          headers: {
            Authorization: `Basic ${btoa(`${username}:${password}`)}`,
          },
        }
      );
      let auth = response.data;
      if (auth) {
        try {
          cookie.save("auth", auth.token);
          cookie.save("user", auth.user);

          validateToken(auth.token);
          navigate("/");
        } catch (err) {
          setLoginState(logged, token, user, err);
          console.error(err);
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 403) {
        setErrorMessage("Wrong password or username");
        setTimeout(() => setErrorMessage(""), 4000);
      }
    }
  }

  function logout() {
    setLoginState(false, null, {});
    cookie.remove("user");
    cookie.remove("auth");
  }

  function validateToken(token) {
    try {
      let validUser = jwt_decode(token);
      console.log(validUser);
      setLoginState(true, token, validUser);
      console.log("login-State", loginData.logged);
    } catch (e) {
      setLoginState(false, null, {}, e);
      console.log("Token Validation Err", e);
    }
  }

  function setLoginState(logged, token, user, err) {
    // cookie.save('auth', token);
    // cookie.save('user', user);

    dispatch({ type: "CHANGE_STATUS_OF_LOGIN", payload: logged });
    dispatch({ type: "CHANGE_THE_TOKEN", payload: token });
    dispatch({ type: "CHANGE_THE_USER", payload: user });
    dispatch({ type: "CHANGE_THE_ERR", payload: err });
  }

  function componentDidMount() {
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load("auth");
    const token = qs.get("token") || cookieToken || null;
    validateToken(token);
  }
  useEffect(() => {
    componentDidMount();
  }, []);

  return (

    <LoginContext.Provider value={{errorMessage, able, login, logout, loginData, dispatch }}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
