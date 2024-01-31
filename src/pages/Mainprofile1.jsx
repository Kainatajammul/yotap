import React from 'react'
import "./Mainprofile1.css"
import img1 from '../../icons/icons1/profilepic2.png'
import img2 from '../../icons/icons1/83.png'
import { IoIosLink } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import Navbar from '../component/navbar/Navbar';
export default function Mainprofile1() {
  return (
   <>
   <div className='screen'>
   <div className='main-profil1'>
   <p>Hi Kevin,</p>
   <div className='share-qr-div'>
   <div className='user-id-img'>
   <img  src={img1}/></div>
   <div className='line'>
   </div>
   <img id='qr-img' src={img2}/>
   <span style={{display:'flex'}}>
   <button>Save QR Code</button>
   <button>Share</button></span>
   </div>
   <button id='active-btn' style={{margin:'25px'}}><IoIosLink />{'\xa0'}Activate Card</button>
   <div className='active-qr'>
   <button id='ppp'><CiCircleInfo />{'\xa0'}How to active</button>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   </div>
   </div>
   </div>
   <Navbar/>
   </>
  )
}
