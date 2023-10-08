
import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3005/forgotPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Send the email to the backend
      });

      if (response.ok) {
        // Successful email submission
        setSuccessMessage('Password reset email sent successfully.');
      } else {
        const data = await response.json();
        setError(data.error || 'Error: Something went wrong.');
      }
    } catch (error) {
      setError('Error: User not found or internal server error.');
    }
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      {error && <div className="error">{error}</div>}
      {successMessage && <div className="success">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
