import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Send a POST request to your backend to reset the password
      const response = await axios.post('http://localhost:3005/resetPassword', {
        newPassword, // Pass the new password to the backend
      });

      if (response.status === 200) {
        // Password reset was successful
        setSuccessMessage('Password reset successful.');
        setError('');
      } else {
        setError('Password reset failed.');
        setSuccessMessage('');
      }
    } catch (error) {
      setError('Error: User not found or internal server error.');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      {error && <div className="error">{error}</div>}
      {successMessage && <div className="success">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ResetPassword;
