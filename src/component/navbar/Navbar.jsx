import React from 'react'
import './Navbar.css'
import { GrContactInfo } from "react-icons/gr";
import { CiUser } from "react-icons/ci";
import { PiLinkSimpleBreak } from "react-icons/pi";
import { MdOutlineAutoGraph } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
  let scrnWidth = window.innerWidth;
  let navigate= useNavigate();
  return (
    <div  style={scrnWidth>=800?{width:"390px"}:{width:"100%"}} className='navbar-icons'>
      <div className='main-hower'>
      <div className='hover' onClick={()=>navigate('/')} style={{fontSize:"18px"}}><CiUser /></div>
      </div>
      <div className='main-hower'>
      <div className='hover' onClick={()=>navigate('/mainprofile1')} style={{fontSize:"18px"}} ><PiLinkSimpleBreak /></div>
      </div>
      <div className='main-hower'>
      <div  className='hover' onClick={()=>navigate('/Manager')} style={{fontSize:"18px"}}><GrContactInfo /></div>
      </div>
      <div className='main-hower'>
      <div className='hover' onClick={()=>navigate('/Analytics')} style={{fontSize:"18px"}}><MdOutlineAutoGraph /></div>
      </div>
      <div className='main-hower'>
      <div className='hover' onClick={()=>navigate('/Setting')} style={{fontSize:"18px"}}><IoSettingsOutline /></div>
      </div>
      </div>
  )
}

export default Navbar