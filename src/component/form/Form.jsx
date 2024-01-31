import React, { useEffect } from 'react';
import './Form.css';
import { useState } from 'react';
import { db } from '../../firebase';
import { update, ref, onValue } from 'firebase/database';

const Form = () => {
  let [data, setdata] = useState({
    name: '',
    lastname: '',
    company: '',
    title: '',
    location: '',
  });

  const addData = async () => {
    // Check if any field is empty
    if (!data.name || !data.lastname || !data.company || !data.title || !data.location) {
      alert('All fields are required!');
      return;
    }

    let userid = localStorage.getItem('yotapid');
    update(ref(db, `User/${userid}`), {
      name: data.name,
      lastname: data.lastname,
      company: data.company,
      title: data.title,
      location: data.location,
    }).then(() => {
      alert('Submitted successfully');
      setdata({
        name: '',
        lastname: '',
        company: '',
        title: '',
        location: '',
      });
    });
  };

  var uid = localStorage.getItem('yotapid');

  useEffect(() => {
    let getdata = async () => {
      const starCountRef = ref(db, `User/${uid}`);
      onValue(starCountRef, async (snapshot) => {
        const data = await snapshot.val();
        console.log(data);
      });
    };
    getdata();
  }, []);

  return (
    <div className='form'>
      <div className='form-name'>
        <div style={{ width: '45%', marginLeft: '7px' }}>
          <label>First Name</label>
          <input
            onChange={(e) => {
              setdata({ ...data, name: e.target.value });
            }}
            style={{
              width: '100%',
              height: '35px',
              borderRadius: '10px',
              backgroundColor: 'rgb(244, 243, 243)',
              border: '1px solid rgb(244, 243, 243)',
              marginTop: '10px',
              outline: 'none',
            }}
            type=''
            value={data.name}
          />
        </div>
        <div style={{ width: '45%' }}>
          <label>Last Name</label>
          <input
            onChange={(e) => {
              setdata({ ...data, lastname: e.target.value });
            }}
            style={{
              width: '100%',
              height: '35px',
              borderRadius: '10px',
              backgroundColor: 'rgb(244, 243, 243)',
              border: '1px solid rgb(244, 243, 243)',
              marginTop: '10px',
              outline: 'none',
            }}
            type=''
            value={data.lastname}
          />
        </div>
      </div>
      <div className='formlabel'>
        <label style={{ marginLeft: '3px' }}>Company</label>
        <input
          onChange={(e) => {
            setdata({ ...data, company: e.target.value });
          }}
          style={{
            width: '85%',
            height: '20px',
            borderRadius: '10px',
            padding: '7px',
            backgroundColor: 'rgb(244, 243, 243)',
            marginLeft: '5px',
            border: '1px solid rgb(244, 243, 243)',
            marginTop: '7px',
            outline: 'none',
          }}
          type=''
          value={data.company}
        />
      </div>
      <div className='formlabel'>
        <label style={{ marginLeft: '3px' }}>Title</label>
        <input
          onChange={(e) => {
            setdata({ ...data, title: e.target.value });
          }}
          style={{
            width: '85%',
            height: '20px',
            borderRadius: '10px',
            padding: '7px',
            backgroundColor: 'rgb(244, 243, 243)',
            marginLeft: '5px',
            border: '1px solid rgb(244, 243, 243)',
            marginTop: '7px',
            outline: 'none',
          }}
          type=''
          value={data.title}
        />
      </div>
      <div className='formlabel'>
        <label style={{ marginLeft: '4px' }}>Location</label>
        <input
          onChange={(e) => {
            setdata({ ...data, location: e.target.value });
          }}
          style={{
            width: '85%',
            height: '20px',
            borderRadius: '10px',
            padding: '7px',
            backgroundColor: 'rgb(244, 243, 243)',
            marginLeft: '5px',
            border: '1px solid rgb(244, 243, 243)',
            marginTop: '2px',
            outline: 'none',
          }}
          type=''
          value={data.location}
        />
      </div>
      <div className='formbutton'>
        <button
          onClick={() => addData()}
          className='btn'
          style={{
            border: '1px',
            backgroundColor: 'black',
            padding: '10px',
            borderRadius: '120px',
            color: 'white',
            width: '40%',
            height: '50px',
            fontSize: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          Save
        </button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Form;
