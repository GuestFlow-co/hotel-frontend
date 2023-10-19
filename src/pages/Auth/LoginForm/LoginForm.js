import React, { useContext, useState, useEffect } from "react";
import { Button } from "@mantine/core";
import { When } from "react-if";
import { LoginContext } from "../../Context/Context_Login";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginForm.scss";
import cookie from "react-cookies";
import { useToast } from "@chakra-ui/react";

function SignInUpForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const { login, logout, loginData, errorMessage } = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loginn, setlogin] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{4,}$/;

  const initialFormData = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    // image: "",
    // role: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "password") {
      if (passwordRegex.test(value)) {
        setPasswordStrength("Strong");
      } else {
        setPasswordStrength("Weak-Password must contain at least 4 char");
      }
    }
  };

  // const handleImage = (event) => {
  //   const { name, files } = event.target;
  //   if (name === 'image') {
  //     setFormData({ ...formData, image: Array.from(files) });
  //   }
  // };
  // const handleImage = (event) =>
  // setFormData({ ...formData, image: event.target.files[0] });
  // const handleSignupSub = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post("http://localhost:3005/signup", formData);
  //     console.log(res);
  //     alert(`You have Signed up Successfully ${formData.username}`);
  //   } catch (err) {
  //     console.log("login ", err);
  //   }
  //   setFormData({
  //     username: "",
  //     password: "",
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     phoneNumber: "",
  //     role: "",
  //   });
  // };

    const handleSignupSub = async (e) => {
    e.preventDefault();
    if (passwordStrength !== "Strong") {
      alert("Password must meet the minimum requirements for strength.");
      return;
    }
    try {
      //deployed link:            https://guestflow.onrender.com/
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/signup`,
        formData
      );
      console.log(res);
      alert(`You have Signed up Successfully ${formData.username}`);
      const alertElement = document.createElement("div");
      alertElement.textContent = `You have Signed up Successfully ${formData.username}`;
      alertElement.className = "alert-message";

      const formContainer = document.querySelector(".form-container");
      formContainer.appendChild(alertElement);
    } catch (err) {
      console.log("login ", err);
    }

    setFormData({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      // image: "",
      // role: "",
    });
  };

  function handleLogin(e) {
    e.preventDefault();
    login(username, password);
    console.log(loginData, "loginDataloginData");
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  useEffect(() => {
    //Check if the user is already logged in and has accessed the login page
    if (loginData.logged) {
      //Redirect to the home page
      navigate("/");
    }
  }, [loginData.logged, navigate]);

  return (
    <div className="signup-main-container">
      <div
        className={`container-signup ${isSignUp ? "right-panel-active" : ""}`}
      >
        <When condition={loginData.logged}>
          <div>
            <p>You are already logged in. Redirecting to the home page...</p>
          </div>
        </When>

        <When condition={!loginData.logged}>
          <div className="form-container sign-up-container">
            <form className="signup-form" onSubmit={handleSignupSub}>
              <div className="signup-form-cont">
                <h1 className="create-Account-h1">Create Account</h1>
                {/* <span className="signup-span">or use your email for registration</span> */}
                <div className="name-inputs">
                  <div className="names-form-group">
                    <input
                      onChange={handleInputChange}
                      name="firstName"
                      placeholder=""
                      required
                      value={formData.firstName}
                      // className="sign-up-input"
                    />
                    <label htmlFor="Lirst Name">First Name</label>
                  </div>
                  <div className="names-form-group">
                    <input
                      onChange={handleInputChange}
                      name="lastName"
                      placeholder=""
                      required
                      value={formData.lastName}
                      // className="sign-up-input"
                    />
                    <label htmlFor="Last Name">Last Name</label>
                  </div>
                </div>

                <div className="other-inputs-form">
                  <div className="other-form-group">
                    <input
                      onChange={handleInputChange}
                      name="username"
                      placeholder=""
                      required
                      value={formData.username}
                      // className="sign-up-input"
                    />
                    <label htmlFor="User Name">User Name</label>
                  </div>
                  {/* <label>Cover Photo</label>
          <input
            type="file"
            name="image"
            className="form-control"
            onChange={handleImage}
            multiple
          /> */}
                  <div className="other-form-group">
                    <input
                      onChange={handleInputChange}
                      name="password"
                      placeholder=""
                      required
                      type="password"
                      value={formData.password}
                      // className="sign-up-input"
                    />
                    {passwordStrength !== "Strong" && (
                      <p className="password-strength-indicator">
                        {passwordStrength}
                      </p>
                    )}
                    <label htmlFor="Password">Password</label>
                  </div>
                  <div className="other-form-group">
                    <input
                      onChange={handleInputChange}
                      name="email"
                      placeholder=""
                      required
                      type="email"
                      value={formData.email}
                      // className="sign-up-input"
                    />
                    <label htmlFor="Email">Email</label>
                  </div>

                  <div className="other-form-group">
                    <input
                      onChange={handleInputChange}
                      name="phoneNumber"
                      placeholder=""
                      required
                      type="tel"
                      value={formData.phoneNumber}
                      // className="sign-up-input"
                    />
                    <label htmlFor="Phone Number">Phone Number</label>
                  </div>
                </div>
                <div className="devv">
                  <button className="sign-up-button" type="submit">
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </When>

        <div className="signup-form-container">
          <When condition={!loginData.logged}>
            <form className="login-form" action="#" onSubmit={handleLogin}>
              <h1 className="create-Account-h1">Sign in</h1>
              <span className="signin-span"></span>
              <div className="login-form-group">
                <input
                  onChange={handleUsernameChange}
                  placeholder=""
                  type="text"
                  required
                  className="login-input"
                />
                <label htmlFor="User Name">User Name</label>
              </div>
              <div className="login-form-group">
                <input
                  onChange={handlePasswordChange}
                  placeholder=""
                  required
                  type="password"
                  className="login-input"
                />
                <label htmlFor="Password">Password</label>
              </div>
              <a className="signup-a" href="/forgotPassword">
                Forgot your password?
              </a>
              <button className="sign-up-button" type="submit">
                Sign In
              </button>
              {errorMessage && (
                <p className="top-error-bar"> {errorMessage} </p>
              )}{" "}
              {/* Display error message */}
            </form>
          </When>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div
              className={`overlay-panel overlay-left ${
                isSignUp ? "overlay-left-active" : ""
              }`}
            >
              <h1 className="create-Account-h3">Welcome Back!</h1>
              <p className="signup-p">
                {/* Login with your personal info to keep connected with us  */}
              </p>
              <div className="gg1">
                <button className="ghost1" onClick={handleSignInClick}>
                  Sign In
                </button>
              </div>
            </div>
            <div
              className={`overlay-panel overlay-right ${
                isSignUp ? "overlay-right-active" : ""
              }`}
            >
              <h1 className="create-Account-h2">Hello Friend!</h1>
              <p className="signup-p">
                {/* Enter your personal info to start your journey with us */}
              </p>
              <div className="gg2">
                <button className="ghost2" onClick={handleSignUpClick}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines for-bg-white">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

  export default {SignInUpForm};
