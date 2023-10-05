import React, { useContext, useState } from "react";
import { Input, Button } from "@mantine/core";
import { When } from "react-if";
import { LoginContext } from "../Context/Context_Login";
import axios from "axios";
import "./signup_in.scss";

function SignInUpForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const { login, logout, loginData } = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const initialFormData = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    role: "",
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
  };

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
    try {
      const res = await axios.post("http://localhost:3005/signup", formData);
      console.log(res);
      alert(`You have Signed up Successfully ${formData.username}`);
      const alertElement = document.createElement('div');
      alertElement.textContent = `You have Signed up Successfully ${formData.username}`;
      alertElement.className = 'alert-message';
  
      const formContainer = document.querySelector('.form-container');
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
      role: "",
    });
  };
  
  function handleLogin(e) {
    e.preventDefault();
    login(username, password);
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="signup-main-container">
    <div className={`container-signup ${isSignUp ? "right-panel-active" : ""}`}>
      <When condition={loginData.logged}>
        <div>
          <Button color="cyan" onClick={logout} className="logout-button">
            Log Out
          </Button>
        </div>
      </When>
      <When condition={!loginData.logged}>
        <div className="form-container sign-up-container">
          <form className="signup-form" onSubmit={handleSignupSub}>
            <h1 className="create-Account-h1">Create Account</h1>
            <span className="signup-span">or use your email for registration</span>
           
            <div className="name-inputs">
            <Input
              onChange={handleInputChange}
              name="firstName"
              placeholder="First Name"
              required
              value={formData.firstName}
              className="sign-up-input"
            />
            <Input
              onChange={handleInputChange}
              name="lastName"
              placeholder="Last Name"
              required
              value={formData.lastName}
              className="sign-up-input"
            />
            </div>
            <div className="other-inputs">
            <Input
              onChange={handleInputChange}
              name="username"
              placeholder="Username"
              required
              value={formData.username}
              className="sign-up-input"
            />
            <Input
              onChange={handleInputChange}
              name="password"
              placeholder="Password"
              required
              type="password"
              value={formData.password}
              className="sign-up-input"
            />
            <Input
              onChange={handleInputChange}
              name="email"
              placeholder="Email"
              required
              type="email"
              value={formData.email}
              className="sign-up-input"
              />
            <Input
              onChange={handleInputChange}
              name="phoneNumber"
              placeholder="Phone Number"
              required
              type="tel"
              value={formData.phoneNumber}
              className="sign-up-input"
              />
            {/* <Input
              onChange={handleInputChange}
              name="role"
              placeholder="Role (admin, writer, editor, user)"
              required
              value={formData.role}
              className="sign-up-input"
              /> */}
              </div>
            <button className="sign-up-button" type="submit">Sign Up</button>
          </form>
        </div>
      </When>

      <div className="signup-form-container">
        <When condition={!loginData.logged}>
          <form className='login-form'action="#" onSubmit={handleLogin}>
            <h1>Sign in</h1>
            <span className="signup-span">or use your account</span>
            <Input 
              onChange={handleUsernameChange}
              placeholder="Username"
              required
              className="login-input"
            />
            <Input
              onChange={handlePasswordChange}
              placeholder="Password"
              required
              type="password"
              className="login-input"
            />
            <a className="signup-a" href="#">Forgot your password?</a>
            <button className="sign-up-button" type="submit">Sign In</button>
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
              <h1>Welcome Back!</h1>
              <p className="signup-p">
              Login with your personal info to keep connected with us 
              </p>
              <button className="ghost" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div
              className={`overlay-panel overlay-right ${
                isSignUp ? "overlay-right-active" : ""
              }`}
            >
              <h1>Hello, Friend!</h1>
              <p className="signup-p">
                Enter your personal info to start your journey with us
                </p>
              <button className="ghost" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default SignInUpForm;




