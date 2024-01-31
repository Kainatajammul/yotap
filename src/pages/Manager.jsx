import React from 'react'
import'./Manager.css'
import Leads from '../component/leads/Leads'
import Navbar from '../component/navbar/Navbar'
const Manager = () => {
  return (
    <div className="main-section">
     <Leads/>
     <Navbar/>
    </div>
  )
}

export default Manager