import React from 'react'
import './Profile.css'
const Profile = () => {
  return (
    <div className='profile-main'>
    <div className='profile-heading'>
    <h3 className='main-hed-ann1'>Personal Analytics</h3>
    </div>
    <h4>Profile</h4>
      <div className='profile'>
      
      <div className='views'>
      <p>Total Views</p>
      <h3>124</h3>
      </div>
      <div className='clicks'>
      <p>Total Link Clicks</p>
      <h3>534</h3>
      </div>
      </div>
      <div className='profile'>
      <div className='views'>
      <p>Click Though Rate</p>
      <h3>16.8%</h3>
      </div>
      <div className='clicks'>
      <p>Leads Generated</p>
      <h3>19</h3>
      </div>
      </div>
      <div className='graphs'>
      <h4>Past 7 Days</h4>
      <div className='profile'>
      <div className='views1'>
      <p>Views</p>
      <h3>109</h3>
      </div>
      <div className='clicks1'>
      <p>Leads Generated</p>
      <h3>35</h3>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Profile
