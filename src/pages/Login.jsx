import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import logoimg from '../imgs/loginimg.jpg';
import './Login.css';

const Login = () => {
  let [variable, setVariable] = useState({
    email: '',
    password: '',
  });
  let [showpassword, setShowpassword] = useState(true);

  const isEmailValid = (email) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (variable.email && variable.password) {
      // if (!isEmailValid(variable.email)) {
      //   alert('Invalid email format. Please enter a valid email address.');
      //   return;
      // }

      signInWithEmailAndPassword(auth, variable.email, variable.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          localStorage.setItem('yotapid', user.uid);
          window.location.reload();
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          if(errorMessage == ""){
            alert("");
          }
          alert(errorMessage);
        });
    } else {
      // Alert when email or password is missing
      alert('Please enter both email and password!');
    }
  };

  return (
    <div className="logomain">
      <div className="logoimg">
        <img src={logoimg} alt="Logo" />
      </div>
      <div className="form-logo">
        <div className="form-text">
          <h2 style={{ marginTop: '10px', fontWeight: 'bold' }}>WELCOME BACK</h2>
          <p style={{ marginTop: '5px' }}>Login to continue</p>
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
        <label>Password</label>
        <div className="password-eyeicon">
          <input
            className="input-eye"
            style={{
              height: '45px',
              width: '79%',
              border: '1px solid transparent',
              outline: 'none',
            }}
            onChange={(e) => setVariable({ ...variable, password: e.target.value })}
            placeholder="Password"
            type={showpassword === true ? 'password' : 'text'}
          />
          {showpassword === true ? (
            <MdOutlineRemoveRedEye style={{ width: '9%' }} onClick={() => setShowpassword(false)} />
          ) : (
            <RiEyeCloseLine onClick={() => setShowpassword(true)} />
          )}
        </div>
      </div>
      <div>
        <p id="forgot">
          <Link to="/forgot" style={{ color: 'black', fontWeight: '500', fontSize: '10px' }}>
            Forgot Password?
          </Link>
        </p>
      </div>
      <div className="btn-login">
        <button onClick={handleLogin}>Log In</button>
      </div>
      <p id="signup-link-in">
        Don't you have any account?{'\xa0'}
        <Link to="/signup" style={{ color: 'black', fontWeight: '600' }}>
          Signup
        </Link>
      </p>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Login;
