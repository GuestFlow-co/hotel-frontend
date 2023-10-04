import { Button, Flex, Input } from '@mantine/core';
import React, { useContext, useState } from 'react';
import { LoginContext } from '../Context/Context_Login';
import { When } from 'react-if';
import axios from 'axios';

function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    role: '',
  });

  const { login, loginData } = useContext(LoginContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignupSub = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3005/signup', formData);
      console.log(res);
      alert(`You have Signed up Successfully ${formData.username}`);
    } catch (err) {
      console.log('login ', err);
    }

    setFormData({
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      role: '',
    });
  };

  return (
    <div className="sign-up-container">
      <When condition={!loginData.logged}>
        <form onSubmit={handleSignupSub}>
          <Flex
            direction="column"
            m="20px"
            gap="10px"
            justify="center"
            align="center"
            className="sign-up-form"
          >
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
            <Input
              onChange={handleInputChange}
              name="role"
              placeholder="Role (admin, writer, editor, user)"
              required
              value={formData.role}
              className="sign-up-input"
            />
            <Button type="submit" className="sign-up-button">
              Sign Up
            </Button>
          </Flex>
        </form>
      </When>
    </div>
  );
}

export default SignupForm;
