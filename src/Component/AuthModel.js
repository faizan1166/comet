
import React, { useState } from 'react';
// import { auth } from './Firebase';
import { auth } from '../Firebase';
const AuthModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      onClose();
    } catch (error) {
      console.error('Login Error:', error.message);
    }
  };

  const handleSignup = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      onClose();
    } catch (error) {
      console.error('Signup Error:', error.message);
    }
  };

  return (
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Authentication</p>
          <button className="delete" aria-label="close" onClick={onClose}></button>
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="email"
                className="input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                type="password"
                className="input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-primary" onClick={handleSignup}>
            Signup
          </button>
          <button className="button is-link" onClick={handleLogin}>
            Login
          </button>
        </footer>
      </div>
    </div>
  );
};

export default AuthModal;
