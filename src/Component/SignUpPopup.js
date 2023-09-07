// SignUpPopup.js
import React, { useState } from "react";

const SignUpPopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    // Add your registration logic here
    // You can send the email and password to your server or perform any other action
    console.log("Email:", email);
    console.log("Password:", password);

    // Close the popup
    onClose();
  };

  return (
    <div className={`popup ${isOpen ? "open" : ""}`}>
      <div className="popup-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>Sign Up</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="button" onClick={handleRegister}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPopup;
