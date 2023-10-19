import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../store/actions/Auth/AuthActions";
import HeaderCreate from "./Header";
import { CreateButtonStyled } from "./newStyle";

import {
    FormContainer,
    FormHeader,
    Label,
    Input,
    Button,
    FlexContainer,
    FlexItem,
} from './dashStyle';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    verificationToken: true,
    emailVerified: true,
  });


  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSignupSub = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/signup`, formData);
      console.log("ressssssssss",res.data);
      const { token } = res.data;

      alert(`You have Signed up Successfully ${formData.username}`);
    } catch (err) {
      console.log("login ", err);

    }
    setFormData({
      username: "",
      password: "",
      firstName: "",
      lastName:"",
      email: "",
      phoneNumber: "",
      verificationToken: true,
      emailVerified: true,
    });
    navigate('/dashboard/addbooking')
  };

  return (
    <>
      <HeaderCreate />
      <FormContainer>
        <FormHeader>Create Account</FormHeader>
        <form onSubmit={handleSignupSub}>
          <FlexContainer>
            <FlexItem >
              <Label htmlFor="firstName">First Name</Label>
              <Input
                onChange={handleInputChange}
                name="firstName"
                required
                value={formData.firstName}
              />
            </FlexItem>
            <FlexItem >
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                onChange={handleInputChange}
                name="lastName"
                required
                value={formData.lastName}
              />
            </FlexItem>
            <FlexItem>
              <Label >Username</Label>
              <Input
                onChange={handleInputChange}
                name="username"
                required
                value={formData.username}
              />
            </FlexItem>
            <FlexItem>
              <Label >Password</Label>
              <Input
                onChange={handleInputChange}
                name="password"
                required
                type="password"
                value={formData.password}
              />
            </FlexItem>
            <FlexItem>
              <Label >Email</Label>
              <Input
                onChange={handleInputChange}
                name="email"
                required
                type="email"
                value={formData.email}
              />
            </FlexItem>
            <FlexItem>
              <Label >Phone Number</Label>
              <Input
                onChange={handleInputChange}
                name="phoneNumber"
                required
                type="tel"
                value={formData.phoneNumber}
              />
            </FlexItem>
          </FlexContainer>
          {/* <Link to={'/dashboard/addbooking'}> */}
          <Button className="sign-up-button" type="submit">
            Create User
          </Button>
          {/* </Link> */}
        </form>
      </FormContainer>
    </>
  );
};

export default Signup;
