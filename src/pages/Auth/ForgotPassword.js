import React, { useState } from "react";
import "./ForgotPassword.scss";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/forgotPassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // Send the email to the backend
      });

      if (response.ok) {
        // Successful email submission
        setSuccessMessage("Password reset email sent successfully.");
      } else {
        const data = await response.json();
        setError(data.error || "Error: Something went wrong.");
      }
    } catch (error) {
      setError("Error: User not found or internal server error.");
    }
  };

  return (
    <div className="password-main-container">
    <div className="password-forget-form">
      <h1 className="forget-h1">Forgot Password</h1>
      {error && <div className="forget-error">{error}</div>}
      {successMessage && <div className="forget-success">{successMessage}</div>}
      <form className="forget-form" onSubmit={handleSubmit}>
        <div className="forget-form-group">
          <label className="forget-label" htmlFor="email">
            Enter your email:
          </label>
          <div className="forget-input">
            <input
              type="email"
              // placeholder="Enter your email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="forget-button-container">
          <button className="forget-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>

    </div>
  );
}

export default ForgotPassword;
