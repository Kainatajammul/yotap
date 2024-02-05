import React, { useState } from 'react'
import './Insight.css'
import { useEffect} from 'react';
import { returnIcons } from '../../pages/Images';
import { ref } from 'firebase/database';
import { db } from '../../firebase';
import { onValue } from 'firebase/database';
const Insight = () => {
  const[selectlinks,setselectlinks]=useState([])
  var uid=localStorage.getItem("yotapid");
 useEffect(() => {
   let getdata = async () => {
   const starCountRef = ref(db,`User/${uid}/Analytics/links`);
   onValue(starCountRef, async (snapshot) => {
   let fetchdata = await snapshot.val();
   console.log(fetchdata)
   setselectlinks(Object.values(fetchdata));
   });
   };
   getdata();
 },[])
 console.log(selectlinks)
  return (
    <div className='insight'>
    <h3>Link Insights</h3>
    {selectlinks?.map((elm)=>{
      console.log(elm.clicks)
      return(
        <div className='link'>
        <div className='left-side'>
        <img style={{borderRadius:'10px',marginLeft:'7px'}} src={returnIcons(elm.id)} height={35} width={35}/>
        <p style={{marginLeft:'10px',fontSize:'17px',marginTop:'2px'}}>{elm.name}</p>
        </div>
        <div className='right-side'>
        <p>{elm?.clicks}</p>
        <p>Taps</p>
        </div>
        </div>
          )}
    )
   }
    </div>
  )
}

export default Insight