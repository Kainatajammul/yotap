import React, { useState } from 'react'
import { useEffect } from 'react';
import './Hero.css';
import {  onValue, ref } from 'firebase/database';
import { MdOutlineModeEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Tags from '../tags/Tags';
import { SlEye } from "react-icons/sl";
import Cover from '../covermodal/Cover';
import dummy from '../../imgs/dummy.png';
import dummy1  from '../../imgs/dummy1.jpg';
import { db } from '../../firebase';

const Hero = () => {
   let [modalcover, setmodalcover] =useState(false)
   let uid=localStorage.getItem('yotapid');
  const handleopenCover = () =>{
    setmodalcover(!modalcover)
   }
   const handlecloseCover =()=>{
    setmodalcover(false);
   }
   
  let [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
    console.log(open)
  };
  const [img, setimg] = useState(null);
   const [proimg, setproimg] = useState(null);
   const [logoimg, setlogoimg] = useState(null);
   console.log(img);
   console.log(proimg);
   console.log(logoimg);
   console.log(uid);
  useEffect(() => {
    let getdata = async () => {
    console.log("db1")

    const starCountRef = ref(db,`User/${uid}`);
    
    onValue(starCountRef, async(snapshot) => {
    console.log("db2")
    const data = await snapshot.val();
    console.log(data);
    setimg(data?.imgUrl)
    setproimg(data?.profileUrl)
    setlogoimg(data?.logoUrl)
    setherodata(data)
    console.log("mydata",data)
    });
    };
    
    getdata();
 
    }, []);
  const[herodata,setherodata]=useState({})

  console.log(uid);
let navigate= useNavigate()
let path= window.location.pathname;
  return (
    <>
   
    <div className="main-section-inner">
    <div className="logoskip">
      <div className="backDiv1" style={{background: 'white'}}>
      <SlEye  />{'\xa0'}<a href={`http://localhost:5174/${uid}`} id='prev-i' >Preview</a>
      </div>
    <div></div>
  </div>
    <div>
    <div className="main">
    {img?<img src={img} alt="Cover" /> :<img src={dummy} alt="No Image Found" />}
        <div  className='mainicon'>
        <MdOutlineModeEdit onClick={()=>{handleopenCover()}} className='main-icon'/>
        </div>               
    <div className="small-img">
    <div>
      {proimg ?<img src={proimg} height={'80px'} width={'90px'} alt="Profile" /> : <img src={dummy1} alt="No Image Found" />}

    </div>
      <div className='small-logo'>
        <div>
      {logoimg ?<img src={logoimg} className='small-logo-img' alt="Logo" /> : <img src={dummy1} alt="No Image Found" />}   
        </div>
      </div>
    </div>
    </div>
    </div>
   {path!="/edit"? <>
    <div className="content">
   
       <div className="content-heading">
          <p></p>
      </div>
 
    
      <div  className="content-para">
        <h2 className='heading-name'>{herodata?.name}</h2>
        <p className="para1">{herodata?.title}</p>
        <p className="para1">{herodata?.company}</p>
        <p className="para1">{herodata?.location}</p>
      </div>

    </div>
    <Cover handlecloseCover={handlecloseCover} modalcover={modalcover} setimg={setimg} setproimg={setproimg} setlogoimg={setlogoimg}/>
    
    <div className="btn">
      <button onClick={()=>navigate('/edit')} className="btn-css">Edit Info</button> 
      <Tags  open={open}  handleClose={handleClose} />
      <button onClick={()=>handleOpen() } className="btn-css">Add Link</button>
      
      </div>
  
   </>:null
  }
   </div>
    </>
  )
}

export default Hero
