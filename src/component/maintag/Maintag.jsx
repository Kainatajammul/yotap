import React, { useState ,useEffect} from 'react'
import './Maintag.css'
import { contactIcons, socialIcons, media, payment, more } from '../../pages/Images';
import Button from '@mui/material/Button';
import { onValue , ref} from 'firebase/database';
import { db  } from '../../firebase';
const Maintag = ({setisform,setlinkinfo,handleClose}) => {
  const[maintaglink,setmaintaglink]=useState()
  var uid=localStorage.getItem("yotapid");
  useEffect(() => {
    let getdata = async () => {
    const starCountRef = ref(db,`User/${uid}/links/`);
    onValue(starCountRef, async (snapshot) => {
    let fetchdata = await snapshot.val();
    console.log(fetchdata)
    // setlinksdata(fetchdata);
    setmaintaglink(fetchdata);
    console.log(setmaintaglink)
    });
    };
    getdata();
  },[])
  return (
    <div className='Maintag'>
    <div className='Tag-designing'>
      <h1 className='Tag-heading'>Contact Info</h1>
      <p className='Tagpara'>
      {contactIcons.map((elm)=>{
  
  
        return(
          <div className='taglink'>
          <div className='tagleft-side'>

          <img  style={{borderRadius:'10px',marginLeft:'7px'}} src={elm.img} height={35} width={35}/>
          <p style={{marginLeft:'10px',fontSize:'17px',marginTop:'2px'}}>{elm.title}</p>
          </div>
          <div className='tagright-side'>
        
          <button onClick={() =>{setisform(true) , setlinkinfo(elm) } }
         className='taglink-btn'>Add</button>
          </div>
          </div>
        )

      })}
   
      </p>
      
      </div>
      <div className='Tag-designing'>
      <h1 className='Tag-heading'>Social Media</h1>
      <p className='Tagpara'>
      {socialIcons.map((elm)=>{
        return(
          <div className='taglink'>
          <div className='tagleft-side'>
        
          <img  style={{borderRadius:'10px',marginLeft:'7px'}} src={elm.img} height={35} width={35}/>
          <p style={{marginLeft:'10px',fontSize:'17px',marginTop:'2px'}}>{elm.title}</p>
    
          </div>
          <div className='tagright-side'>
          <button onClick={() =>{setisform(true) , setlinkinfo(elm) } }className='taglink-btn'>Add</button>
    
          </div>
          </div>
        )

      })}
   
      </p>
      
      </div>
      <div className='Tag-designing'>
      <h1 className='Tag-heading'>Content</h1>
      <p className='Tagpara'>
      {media.map((elm)=>{
        return(
          <div className='taglink'>
          <div className='tagleft-side'>
        
          <img  style={{borderRadius:'10px',marginLeft:'7px'}} src={elm.img} height={35} width={35}/>
          <p style={{marginLeft:'10px',fontSize:'17px',marginTop:'2px'}}>{elm.title}</p>
    
          </div>
          <div className='tagright-side'>
          <button onClick={() =>{setisform(true) , setlinkinfo(elm) } }   className='taglink-btn'>Add</button>
    
          </div>
          </div>
        )

      })}
   
      </p>
      
      </div>
      <div className='Tag-designing'>
      <h1 className='Tag-heading'>Payment</h1>
      <p className='Tagpara'>
      {payment.map((elm)=>{
        return(
          <div className='taglink'>
          <div className='tagleft-side'>
        
          <img  style={{borderRadius:'10px',marginLeft:'7px'}} src={elm.img} height={35} width={35}/>
          <p style={{marginLeft:'10px',fontSize:'17px',marginTop:'2px'}}>{elm.title}</p>
    
          </div>
          <div className='tagright-side'>
          <button onClick={() =>{setisform(true) , setlinkinfo(elm) } }  className='taglink-btn'>Add</button>
    
          </div>
          </div>
        )

      })}
   
      </p>
      
      </div>
      <div  className="Tag-btn">
      <Button onClick={() =>handleClose()}>Done</Button></div>
    </div>
  )
}

export default Maintag