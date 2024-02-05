import React from 'react'
import './profile1.css'
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { HiOutlineQrCode } from "react-icons/hi2";
import { LiaCcMastercard } from "react-icons/lia";
import { CgLivePhoto } from "react-icons/cg";
import pic1 from '../../imgs/contact.png'
import pic2 from '../../imgs/fax.png'
import pic3 from '../../imgs/delete.png'
import pic4 from '../../imgs/rate.png'
import pic6 from'../../imgs/log.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Profile1 = () => {
const navigate = useNavigate();
const handleLogout = () => {
localStorage.removeItem('yotapid');
navigate('/Login');
};
  return (

    <div className='profile1-main'>
    <div className='profile1'>
    <h4>Profile</h4>
    <div className='link'>
    <CiUser style={{marginLeft:'5px'}} />
    <p style={{marginLeft:'10px', fontSize:'17px',marginTop:'2px'}}>Edit info</p>
    </div>
    <div className='link'>
    <CiLock style={{marginLeft:'5px'}} />
    <p style={{marginLeft:'10px', fontSize:'17px',marginTop:'2px'}}>Change Password</p>
    </div>
    <div className='link'>
    <HiOutlineQrCode style={{marginLeft:'5px'}} />
    <p style={{marginLeft:'10px', fontSize:'17px',marginTop:'2px'}}>QR code and share</p>
    </div>
    </div>
    <div className='profile1'>
    <h4>General</h4>
    <div className='link'>
    <img style={{marginLeft:'5px',height:'15px', width:'15px'}} src={pic1}/>
    <p style={{marginLeft:'10px', fontSize:'17px',marginTop:'2px'}}>Contact Us</p>
    </div>
    <div className='link'>
    <img style={{marginLeft:'5px',height:'15px', width:'15px'}} src={pic2}/>
    <p style={{marginLeft:'10px', fontSize:'17px',marginTop:'2px'}}>FAQ</p>
    </div>
    <div className='link'>
    <img style={{marginLeft:'5px',height:'15px', width:'15px'}} src={pic4}/>
    <p style={{marginLeft:'10px', fontSize:'17px',marginTop:'2px'}}>Rate Us</p>
    </div>
    </div>
    <div className='profile1'>
    <h4>Product</h4>
    <div className='link'>
    <LiaCcMastercard style={{marginLeft:'5px'}} />
    <p style={{marginLeft:'10px', fontSize:'17px',marginTop:'2px'}}>Edit info</p>
    </div>
    <div className='link'>
    <CgLivePhoto style={{marginLeft:'5px'}} />
    <p style={{marginLeft:'10px', fontSize:'17px',marginTop:'2px'}}>Change Password</p>
    </div>
    </div>
    <div className='profile1'>
    <h4>Account</h4>
    <Link  className='link' style={{textDecoration:'none', color:'black'}}> <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
     <img style={{marginLeft:'5px',height:'15px', width:'15px'}} src={pic6}/>
   <p onClick={handleLogout} style={{marginLeft:'10px', fontSize:'17px',marginTop:'2px'}}>Log out</p>
    </div></Link>
    <div className='link'>
    <img style={{marginLeft:'5px',height:'15px', width:'15px'}} src={pic3}/>
    <p style={{marginLeft:'10px', fontSize:'17px',marginTop:'2px'}}>Delete Account</p>
    </div>
    </div>
    </div>
 )
 
    
}

export default Profile1