import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import "./Mainprofile1.css";
import { IoIosLink } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import Navbar from '../component/navbar/Navbar';
import { onValue, ref } from 'firebase/database';
import { QRCode } from 'react-qrcode-logo';
import { db } from '../firebase';
import  {ShareButton}  from 'react-share';
const { ShareButton } = ShareButton;
export default function Mainprofile1() {
const [QR, setQR] = useState();
const qrCodeUrl = `http://localhost:5173/User/${uid}`;
const uid = localStorage.getItem("yotapid");

  useEffect(() => {
  let getdata = async () => {
  const starCountRef = ref(db, `User/${uid}`);
  onValue(starCountRef, async (snapshot) => {
  let data = await snapshot.val();
  console.log(data);
  if (data) {
  setQR(data);
  }
  });
  };
  getdata();
  }, [uid]);

  const downloadQRCode = async () => {
  const qrCodeContainer = document.getElementById('qrCodeContainer');

  if (qrCodeContainer) {
  try
  {
    const canvas = await html2canvas(qrCodeContainer);
    const imageURL = canvas.toDataURL("image/png")
    .replace("image/png", "image/octet-stream");

    console.log(imageURL);
    const link = document.createElement('a');
    link.href = imageURL;
    link.download = "QR_Code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }
    catch (error) {
    console.error('Error generating QR code image:', error);
    }
    }
    };

  return (
    <>
      <div className='screen'>
      <div className='main-profil1'>
      <p>Hi Kevin,</p>
      <div className='share-qr-div'>
      <div className='user-id-img'>
      <img src={QR?.profileUrl} alt="Profile" />
      </div>
      <div className='line'></div>
      <div className='QRcode' id='qrCodeContainer'>
      <QRCode value={qrCodeUrl} size={160} qrStyle="dots" eyeRadius={5} />
      </div>
      <span style={{ display: 'flex' }}>
      <button onClick={downloadQRCode}>Save QR Code</button>
      <ShareButton url={qrCodeUrl} title="Check out my QR Code">Share</ShareButton>
      </span>
      </div>
      <button id='active-btn' style={{ margin: '25px' }}>
      <IoIosLink />{'\xa0'}Activate Card
      </button>
      <div className='active-qr'>
      <button id='ppp'>
      <CiCircleInfo />{'\xa0'}How to activate
      </button>
      <br />
      <br />
      <br />
      <br />
      </div>
      </div>
      </div>
      <Navbar />
    </>
  );
}
