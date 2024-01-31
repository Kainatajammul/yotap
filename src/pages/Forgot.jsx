import React, { useState } from 'react';
import { auth } from '../firebase';
import logoimg from '../imgs/forgotimg.jpg';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './Forgot.css';

const Forgot = () => {
  const [variable, setVariable] = useState({
    email: '',
  });

  const handleReset = () => {
    if (isEmailValid(variable.email)) {
      // Add your password reset logic here using Firebase auth API
      // For now, let's simulate a successful password reset
      alert('Password reset instructions sent to your email.');
    } else {
      alert('Please enter a valid email address to reset the password.');
    }
  };

  const isEmailValid = (email) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="logomain">
      <div className="logoskip">
        <Link to="/Login">
          <div className="backDiv">
            <img
              width="15"
              height="15"
              src="https://img.icons8.com/ios-glyphs/96/FFFFFF/back.png"
              alt="back"
            />
          </div>
        </Link>
        <div></div>
      </div>
      <div className="logoimg">
        <img src={logoimg} alt="Logo" />
      </div>
      <div className="form-logo">
        <div className="form-text">
          <h2 style={{ marginTop: '10px', fontWeight: 'bold' }}>Reset Password!</h2>
          <p style={{ marginTop: '5px', width: '78%', textAlign: 'center' }}>
            Please enter your email address to reset your password!
          </p>
        </div>
        <label>Email</label>
        <input
          style={{
            height: '45px',
            marginTop: '10px',
            width: '74%',
            borderRadius: '7px',
            border: '1px solid grey',
            padding: '0px 0px 0px 14px',
            outline: 'none',
          }}
          onChange={(e) => setVariable({ ...variable, email: e.target.value })}
          placeholder="Email address"
          type="email"
        />
      </div>
      <div className="btn-login" style={{ marginTop: '30px' }}>
        <button onClick={handleReset}>Reset Password</button>
      </div>

      <br />
      <br />
    </div>
  );
};

export default Forgot;
