import React, { useState, useEffect } from 'react';
import './Formmodal.css'
import { db } from '../../firebase';
import { RxCross2 } from "react-icons/rx";
import { IoChevronBackOutline } from "react-icons/io5";
import {onValue, ref, set} from 'firebase/database';
import { returnIcons } from '../../pages/Images';
import Linkmodal from '../../linkmodal/Linkmodal';
const Formmodal = ({ handleClose, setisform ,linkinfo,ishome}) => {
const [formdata,setformdata]= useState({
  title:"",
  value:"",
  Email:"",
});
const [linksdata, setlinksdata]=useState([])
var uid=localStorage.getItem("yotapid");


let getImg=()=>{
  if(!linkinfo.img){
    return returnIcons(linkinfo?.id)
  }else{
    return linkinfo?.img
  }
}

useEffect(() => {
  let getdata = async () => {
  const starCountRef = ref(db,`User/${uid}/links/`);
  onValue(starCountRef, async (snapshot) => {
  let fetchdata = await snapshot.val();
  console.log(fetchdata)
  setlinksdata(Object.values(fetchdata));
  });
  };
  getdata();
},[])


useEffect(()=>{
  setformdata(linkinfo)
},[ishome])
 console.log(linksdata)
const addFormdata = (e) => {
  e.preventDefault();
  console.log(formdata);
  if(linksdata)
  {
    var completedata={...formdata,id:linkinfo.id}
     set(ref(db, `User/${uid}/links/`),[...linksdata,completedata])
  
  .then(() => {
      console.log("Link updated successfuly");
      setformdata({
        title:"",
        value:"",
        Email:"",
      })
    })}
    else{
      var completedata={...formdata,id:linkinfo.id}
     set(ref(db, `User/${uid}/links/`),[formdata,completedata])
    
  
    .then(() => {
        console.log("Link updated successfuly");
        setformdata({
          title:"",
          value:"",
          Email:"",
        })
      }
  
      )}}
      const inlineStyles = {
        fontSize: '25px',
        cursor: 'pointer',
        position: 'absolute',
        top: '38px',
        left: '19px',
        color:'808080',
      };
  return (
   <>
    <div className='Main-modal'> 
    {(ishome===true)?<RxCross2 style={{fontSize:"25px", marginLeft:"310px",marginTop:"10px",cursor:"pointer"}}
    onClick={()=>handleClose()}/>:
    <IoChevronBackOutline style={inlineStyles}  onClick={()=>{setisform(false) }}/>
    }
    <center>
    <div className='Mainformmodal'>
    <img className='formmodal-img' src={getImg()} height={"70px"} width={"70px"}/>
    <p style={{fontSize:"23px"}}>{linkinfo.title}</p>
    </div>
    </center>
    <div className='modal-form'>
    <form style={{marginLeft:"20px",marginTop:"20px"}} onSubmit={formdata}>
    <label>Linktitle</label><br/>
    <input  onChange={(e) => {
      setformdata({ ...formdata,title: e.target.value });
    }}
    value={formdata.title}  
    style={{width:'90%' ,height:'38px',borderRadius:'10px' ,backgroundColor: 'rgb(244, 243, 243)',border:'1px solid rgb(244, 243, 243)',marginTop:'10px' ,outline:'none',marginBottom:'10px',border:'1px solid grey',paddingLeft:'7px'}} type='text' placeholder='Your Title'/><br/>
    <label>Contact</label><br/>
    <input onChange={(e) => {
      setformdata({ ...formdata,value: e.target.value });
    }} 
    value={formdata.value} 
    style={{width:'90%' ,height:'38px',borderRadius:'10px' ,backgroundColor: 'rgb(244, 243, 243)',border:'1px solid rgb(244, 243, 243)',marginTop:'10px' ,outline:'none',marginBottom:'10px' ,border:'1px solid grey',paddingLeft:'7px'}} type='text' placeholder='Your Contact info'/><br/>
    <label >Email</label><br/>
    <input onChange={(e) => {
      setformdata({ ...formdata,Email: e.target.value });
    }}
    value={formdata.Email} 
      style={{width:'90%' ,height:'38px',borderRadius:'10px' ,backgroundColor: 'rgb(244, 243, 243)',border:'1px solid rgb(244, 243, 243)',marginTop:'10px' ,outline:'none',marginBottom:'10px' ,border:'1px solid grey',paddingLeft:'7px'}}  type='email'  placeholder='Enter your Email'/><br/>
    <div  className='formmodal-btn'>
    <button  onClick={addFormdata}>Save</button>
    </div>
    <div className='formmodal-btn2'>
    <button onClick={() =>{handleClose(),setisform(false)}}>Cancel</button>
    </div>
    </form>
    </div>
   </div>
   </>
  )
}

export default Formmodal