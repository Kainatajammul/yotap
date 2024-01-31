import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { onValue, update,ref } from 'firebase/database';
import { db, storage } from '../../firebase';
import { ref as sref,getDownloadURL } from 'firebase/storage';
import { uploadBytes } from 'firebase/storage';
import './Cover.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '25%',
  height: 320,
  bgcolor: 'background.paper',
  borderRadius: '20px',
  boxShadow: 24,
  outline: 'none'
};

const Cover = ({ handlecloseCover, modalcover , setimg ,setlogoimg ,setproimg}) => {
const uid = localStorage.getItem('yotapid');



  useEffect(() => {
    const getdata = async () => {
      const starCountRef = ref(db, `User/${uid}`);
      onValue(starCountRef, async (snapshot) => {
        const data = await snapshot.val();
        setimg(data?.imgUrl);
        setproimg(data?.profileUrl);
        setlogoimg(data?.logoUrl);
      });
    };

    getdata();
  }, [uid]);

  const uploadImage = (e) => {
    const name = uid + "coverURL";
    const storageRef = sref(storage, name);
    uploadBytes(storageRef, e).then(() => {
        handlecloseCover();
      getDownloadURL(storageRef).then((URL) => {
        update(ref(db, `User/${uid}`), { imgUrl: URL });
      });
    }).catch((error) => {
      console.log(error);
    });
  };

  const uploadProImage = (e) => {
    const name = uid + "profileURL";
    const storageRef = sref(storage, name);
    uploadBytes(storageRef, e).then(() => {
      getDownloadURL(storageRef).then((URL) => {
        update(ref(db, `User/${uid}`), { profileUrl: URL });
      });
    }).catch((error) => {
      console.log(error);
    });
  };

  const uploadLogoImage = (e) => {
    const name = uid + "logoURL.png";
    const storageRef = sref(storage, name);
    uploadBytes(storageRef, e).then(() => {
      getDownloadURL(storageRef).then((URL) => {
        update(ref(db, `User/${uid}`), { logoUrl: URL });
      });
    }).catch((error) => {
      console.log(error);
    });
  };
  
  return ( 
    <div>
      <Modal
        open={modalcover}
        onClose={() => handlecloseCover()}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={style}>
          <div className='cover-modal'>
            <h2>Edit Images</h2>
            <div className='maincover-btn'>
              <div className='cover-btn'>
          
                <label htmlFor="profile-img-picker" className='cover-label'>
                  <input type="file" id="profile-img-picker" style={{ display: "none" }} onChange={(e) => uploadImage(e.target.files[0])} />
                  Profile Picture
                </label>
              </div>
              <div className='cover-btn'>
             
                <label htmlFor="background-img-picker">
                  <input type="file" id="background-img-picker" style={{ display: "none" }} onChange={(e) => uploadProImage(e.target.files[0])} />
                  Background Image
                </label>
              </div>
              <div className='cover-btn'>
             
                <label htmlFor="logo-img-picker">
                  <input type="file" id="logo-img-picker" style={{ display: "none" }} onChange={(e) => uploadLogoImage(e.target.files[0])} />
                  Company Logo
                </label>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Cover;
