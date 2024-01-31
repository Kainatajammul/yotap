import React from 'react'
import Hero from '../component/hero/Hero'
import Modes from '../component/modes/Modes'
import Form from '../component/form/Form'
import './Edit.css'
import Navbar from '../component/navbar/Navbar'
import Hero1 from '../component/hero/Hero1'

const Edit = () => {
  return (
    <div  className='main-section'>
      <Hero1/>
      <Modes/>
      <Form/>
      <br/>
      <br/>
      <br/>
      <Navbar/>
    </div>
  )
}

export default Edit
