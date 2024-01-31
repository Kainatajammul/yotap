import React, { useState } from 'react'
import'./Leads.css'
import { IoIosSearch } from "react-icons/io";
import { FiUserPlus } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaUserAltSlash } from "react-icons/fa";
const Leads = () => {
  let[changeuser,setchangeuser]=useState(true)
  let [search,setsearch]=useState(true)
  let navigate= useNavigate()
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
    <div className='manger-main2'>
    <div onClick={()=>{
      navigate('/Leadsdetail' ,{state:{name:'zay Kim',title:'Sales Manager',Company:'Atlanta Cars LLC',date:'September 21,2023',email:'Zaynn@gmail.com'}} )
    }} className='manager'>
    <div className='manager-data-1'>
    <h5>Jay Kim</h5>
    <p>Sales Manager</p>
    <p style={{marginTop:'10px'}}>Atlanta Cars LLC</p>
    <p>September 21,2023</p>
    </div>
    <div className='dgs'>
<p  id='green-1'>Follow-up</p>
<img width="24" height="24" src="https://img.icons8.com/material-rounded/96/fine-print.png" alt="fine-print"/>
    </div>
    </div>
    <div onClick={()=>
    navigate('/Leadsdetail',{ state: {name:'Flynn Rayn',title:'Vice President',Company:'Company LLC',date:'September 19,2023',email:'Flynn@gmail.com'} })
    } className='manager'>
    <div className='manager-data-1'>
    <h5>Flynn Ryan</h5>
    <p>Vice President</p>
    <p style={{marginTop:'10px'}}>Atlanta Cars LLC</p>
    <p>September 21,2023</p>
    </div>
    <div className='dgs1'>
    <p id='green-2'>Active</p>
<img width="24" height="24" src="https://img.icons8.com/material-rounded/96/fine-print.png" alt="fine-print"/>
    </div>
    </div>
    <div onClick={()=>
      navigate('/Leadsdetail',{ state: {name:'kyle Kim',title:'Vice President',Company:'Company Co',date:'September 18,2023',email:'Kylee@gmail.com'} })
      } className='manager'>
      <div className='manager-data-1'>
      <h5>Aay Kim</h5>
      <p>Vice President</p>
      <p style={{marginTop:'10px'}}>Atlanta Cars LLC</p>
      <p>September 21,2023</p>
      </div>
      <div className='dgs2'>
  <p id='green-3'>Archived</p>
  <img width="24" height="24" src="https://img.icons8.com/material-rounded/96/fine-print.png" alt="fine-print"/>
      </div>
      </div>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
    </div>
    </div>
  )
}

export default Leads