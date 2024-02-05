import React, { useEffect, useState } from 'react'
import './Profile.css'
import { onValue, ref ,} from 'firebase/database';
import { db } from '../../firebase';
const Profile = () => {
  let[profile,setprofile]=useState()
  var uid=localStorage.getItem("yotapid");
  useEffect(() => {
    let getdata = async () => {
    const starCountRef = ref(db,`User/${uid}/Analytics`);
    onValue(starCountRef, async(snapshot) => {
    const data = await snapshot.val();
    console.log(data);
    setprofile(data);
    console.log(setprofile)
    });
    };
    
    getdata();
 
    }, []);
  return (
    <div className='profile-main'>
    <div className='profile-heading'>
    <h3 className='main-hed-ann1'>Personal Analytics</h3>
    </div>
    <h4>Profile</h4>
      <div className='profile'>
      
      <div className='views'>
      <p>Total Views</p>
      <h3>{profile?.totalViews}</h3>
      </div>
      <div className='clicks'>
      <p>Total Link Clicks</p>
      <h3>{profile?.totalClicks}</h3>
      </div>
      </div>
      <div className='profile'>
      <div className='views'>
      <p>Click Though Rate</p>
      <h3>{profile?.totalClickRate}</h3>
      </div>
      <div className='clicks'>
      <p>Leads Generated</p>
      <h3>{profile?.totalLeads}</h3>
      </div>
      </div>
    </div>
  )
}

export default Profile
