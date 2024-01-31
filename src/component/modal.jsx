import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import "./modal.css"
var widnowwidth = window.innerWidth
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:widnowwidth>=500 ?400: '90%',
    height:250,
    bgcolor: 'background.paper',
    borderRadius:'20px',
    boxShadow: 24,
    outline:'none'
  };
  const Mymodal = ({handleClose ,open,headingpara}) => {
    console.log(open)
  
  return (
    <div>
    <Modal
    open={open}
    onClose={()=>handleClose()}
    aria-labelledby="child-modal-title"
    aria-describedby="child-modal-description"
  >
  
    <Box  sx={style}>
    <div className='modal-designing'>
      <h2 className='modal-heading'>{headingpara.heading}</h2>
      <p className='modalpara'>
       {headingpara.paragraph}
      </p>
      
      </div>
      <div  className="modal-btn">
      <Button onClick={handleClose}>Got it</Button></div>
      </Box>
  </Modal>
    </div>
  )
}

export default Mymodal

