import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import hello from '../imgs/signupimg.jpg';
import { auth, db } from '../firebase';
import { update, ref } from 'firebase/database';
import { Link } from 'react-router-dom';
import "./Signup.css";
var widnowwidth = window.innerWidth
const Signup = () => {
  const navigate = useNavigate();

  const [info, setinfo] = useState({
    email: '',
    password: '',
  });

  const isEmailValid = (email) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!isEmailValid(info.email)) {
      alert('Invalid email format. Please enter a valid email address.');
      return;
    }

    await createUserWithEmailAndPassword(auth, info.email, info.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("yotapid", user.uid);
        console.log(user);
        navigate("/");

        setinfo({
          email: "",
          password: ""
        });

        update(ref(db, `User/${user.uid}`), {
          // ... (your database update logic)
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        // Alert when signup fails
        alert('Signup failed. Please check your email and password.');
      });
  };

  return (
    <main style={{width:widnowwidth<=375 ?'100%': 430}} >
      <section>
        <div className="logoskip">
          <Link to="/Login" style={{widows:'50%'}}>
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
        <div className='mainsign' style={{width:widnowwidth>430 ?430: '100%',}}>
          <div className="signup-img">
            <img src={hello} alt="Hello" />
          </div>
          <div className='form-up'>
            <h1 style={{ marginTop: "10px", fontWeight: "bold" }}>SIGN UP</h1>
            <p style={{ marginTop: "10px" }}>Enter Your login information</p>
            <form>
              <div style={{ marginTop: "10px" }}>
                <label> Email</label>
                <input
                  style={{
                    height: "45px",
                    width: "95%",
                    borderRadius: "7px",
                    border: "1px solid grey",
                    borderColor: "#808080",
                    outline: "none",
                    padding: "0px 0px 0px 14px",
                    marginTop: '10px'
                  }}
                  type="email"
                  value={info.email}
                  onChange={(e) => setinfo({ ...info, email: e.target.value })}
                  placeholder="Email address"
                />
              </div>

              <div style={{ marginTop: "10px" }}>
                <label>Password</label>
                <input
                  style={{
                    height: "45px",
                    width: "95%",
                    borderRadius: "7px",
                    border: "1px solid grey",
                    borderColor: "#808080",
                    outline: "none",
                    padding: "0px 0px 0px 14px",
                    marginTop: '10px'
                  }}
                  type="password"
                  value={info.password}
                  onChange={(e) => setinfo({ ...info, password: e.target.value })}
                  placeholder="Password"
                />
              </div>
              <div className='btn-signup'>
                <button onClick={onSubmit}>Signup</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Signup;
