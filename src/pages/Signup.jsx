import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import hello from '../imgs/signupimg.jpg';
import { auth, db } from '../firebase';
import { update, ref } from 'firebase/database';
import { Link } from 'react-router-dom';
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  let widnowwidth = window.innerWidth

  const [info, setinfo] = useState({
    email: '',
    password: '',
  });

  const isEmailValid = (email) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const addData = async (e) => {
    e.preventDefault()
    if ( info.email && info.password) {
      await createUserWithEmailAndPassword(auth, info.email, info.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          localStorage.setItem("tapNowUid", user.uid);
          update(ref(db, `User/${user.uid}`), {
            id: user.uid,
            email: info.email,
            bgImg: "",
            bio: "",
            job: "",
            colorCode: "#2F80ED",
            company: "",
            directMode: false,
            qrColor: "",
            qrLogo: "",
            phone: "",
            logoImg: "",
            leadForm: {
              Fname: true,
              company: true,
              email: true,
              job: true,
              note: true,
              phone: true,
            },
            // link:{
            //   title:"",
            //   value:"",
            //   Email:"",

            // },

            location: "",
           
          }).then(() => {
            toast.success("New user created sucessfuly");
            navigate("/home");
          });
          console.log(user.uid)
          
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(error);
          if (error.message === "Firebase: Error (auth/invalid-email).") {
            toast.error("Please enter valid email");
          } else if (
            error.message === "Firebase: Error (auth/email-already-in-use)."
          ) {
            toast.error("Email already exits");
          } else if (
            error.message ===
            "Firebase: Password should be at least 6 characters (auth/weak-password)."
          ) {
            toast.error("Password must be at least 6 characters");
          
          
        }
      });
      setinfo({
        email: "",
        password: "",
       

      });
     
    } else {
      toast.error("Email , password and user name should not be empty");
    }
  };

  return (
   <div style={{width:widnowwidth<=375 ?'100%': 430}}>
        <div className="logoskip" >
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
            <form onSubmit={addData}>
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
                <button type='submit'>Signup</button>
              </div>
            </form>
          </div>
        </div>
        </div>
  );
}

export default Signup;
