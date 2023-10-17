import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ResetPassword.scss";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    let obj = {
      newPassword: newPassword,
      email: email,
    };
    console.log("objjjjjjjjjjj", obj);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/resetPassword/${token}`,
        obj
      );

      console.log("00000000000000", response.data);

      if (response.status === 200) {
        setSuccessMessage("Password reset successful.");
        setError("");
      } else {
        setError("Password reset failed.");
        setSuccessMessage("");
      }
    } catch (error) {
      setError("Error: User not found or internal server error.");
      setSuccessMessage("");
      console.error(error);
    }
  };

  return (
    <div className="reset-main-contaier">

        <div className="message-container">
        {error && <div className="reset-error">{error}</div>}
        {successMessage && (
          <div className="reset-success">{successMessage}</div>
        )}
      </div>
      <div className="reset-password-container">
        {/* {error && <div className="reset-error">{error}</div>}
        {successMessage && (
          <div className="reset-success">{successMessage}</div>
        )} */}
        <h1 className="reset-h1">Reset Password</h1>
        <form className="reset-form" onSubmit={handleSubmit}>
          {/* <div className="reset-form-group"> */}
          <div className="reset-form-group">
            <input
              type="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="reset-form-group">
            <input
              type="password"
              placeholder=""
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <label htmlFor="password">New Password</label>
          </div>

          <div className="reset-form-group">
            <input
              type="password"
              placeholder=""
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label htmlFor="new password">Confirm password</label>
          </div>

          {/* </div> */}
          <div className="rest-button-container">
            <button className="reset-button" type="submit">
              Reset Password
            </button>
          </div>
        </form>
      </div>
      <div className="bg-lines for-bg-white">
            <span></span><span></span>
            <span></span><span></span>
            <span></span><span></span>
            <span></span><span></span>
            <span></span><span></span>
          </div>
    </div>
  );
}

export default ResetPassword;
