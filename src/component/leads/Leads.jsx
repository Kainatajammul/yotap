import React, { useEffect, useState } from 'react'
import'./Leads.css'
import { IoIosSearch } from "react-icons/io";
import { FiUserPlus } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaUserAltSlash } from "react-icons/fa";
import { onValue, ref } from 'firebase/database';
import { db } from '../../firebase';
const Leads = () => {
  let[changeuser,setchangeuser]=useState(true)
  let [search,setsearch]=useState(true)
  let navigate= useNavigate()
  const[datasearch,setdatasearch]=useState()
  var uid=localStorage.getItem("yotapid");
  useEffect(() => {
    let getdata = async () => {
    const starCountRef = ref(db,`User/${uid}/leads`);
    onValue(starCountRef, async (snapshot) => {
    let fetchdata = await snapshot.val();
    console.log(fetchdata)
    setdatasearch(Object.values(fetchdata));
    });
    };
   getdata();
   },[])

  return (
    <div className='leads-main'>
    <div className='leads-head'>
    <h3 className='main-hed-ann'>Leads Manager</h3>
    </div>
    <div className='input-main'>
    <div className='leads-input'>
    {changeuser===true?(<IoIosSearch onClick={()=>setchangeuser(false)}/>):(<FaUser onClick={()=>setchangeuser(true)} />)}
    
    <input  className='leadsinput' style={{border:'1px solid rgb(248, 247, 247)',backgroundColor:'rgb(248, 247, 247)',fontSize:'15px'}} type='text' placeholder=' search'/>
    
    </div>
    <div style={{marginLeft:'-28px', marginBottom:'-13px'}}>
     
    {search===true?(<FiUserPlus onClick={()=>setsearch(false)}/>):(<FaUserAltSlash onClick={()=>setsearch(true)}/>)
  }
</div>
    
    </div>
    <div className='by-date'>
    <h6>By latest date</h6>
    <div><img width="15" height="15" src="https://img.icons8.com/ios/96/expand-arrow--v2.png" alt="expand-arrow--v2"/></div>
    </div>
    {datasearch?.map((elm)=>{
    return <div className='manger-main2'>
    <div onClick={()=>
      {
      navigate('/Leadsdetail' ,{state:{name:'zay Kim',title:'Sales Manager',Company:'Atlanta Cars LLC',date:'September 21,2023',email:'Zaynn@gmail.com'}} )
    }} className='manager'>
    <div className='manager-data-1'>
    <h5>{elm.Fname}</h5>
    <p>{elm.company}</p>
    <p style={{marginTop:'10px'}}>{elm.email}</p>
    <p>{elm.title}</p>
    </div>
    <div className='dgs'>
    <p  id='green-1'>Follow-up</p>
    <img width="24" height="24" src="https://img.icons8.com/material-rounded/96/fine-print.png" alt="fine-print"/>
    </div>
    </div>
    </div>})}
    </div>
 
  )
}

export default Leads