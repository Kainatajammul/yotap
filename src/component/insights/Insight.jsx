import React, { useState } from 'react'
import './Insight.css'
import { useEffect} from 'react';
import { ref } from 'firebase/database';
import { db } from '../../firebase';
import { onValue } from 'firebase/database';
const Insight = () => {
  const[insight,setinsight]=useState()
  var uid = localStorage.getItem('yotapid');
  useEffect(() => {
    let getdata = async () => {
    const starCountRef = ref(db,`User/${uid}/links/`);
    onValue(starCountRef, async (snapshot) => {
    let insightdata = await snapshot.val();
    console.log(insightdata)
  
    setinsight(insightdata)
    console.log(setinsight)
    });
    };
    getdata();
  },[])
  return (
    <div className='insight'>
    <h3>Link Insights</h3>
    <div className='link'>
    <div className='left-side'>
    <img style={{borderRadius:'10px'}} src='data:image/png;base64,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'  height={35} width={35}/>
    <p style={{marginLeft:'10px',fontSize:'17px'}}>Linkedln</p>
    </div>
    <div className='right-side'>
    <p>24 Taps</p>
    </div>
    
    </div>
    <div className='link'>
    <div className='left-side'>
    <img style={{borderRadius:'10px'}} src='https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs'  height={35} width={35}/>
    <p style={{marginLeft:'10px',fontSize:'17px'}}>Spotify</p>
    </div>
    <div className='right-side'>
    <p>24 Taps</p>
    </div>
    
    </div>
    <div className='link'>
    <div className='left-side'>
    <img style={{borderRadius:'10px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png'   height={35} width={35}/>
    <p style={{marginLeft:'10px',fontSize:'17px'}}>Instagram</p>
    </div>
    <div className='right-side'>
    <p>24 Taps</p>
    </div>
    
    </div>
    </div>
  )
}

export default Insight