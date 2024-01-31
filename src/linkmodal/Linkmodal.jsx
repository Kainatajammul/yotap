import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './Linkmodal.css';
import Maintag from '../component/maintag/Maintag';
import Formmodal from '../component/formmodal/Formmodal';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '49%',
  transform: 'translate(-50%, -50%)',
  width: 370,
  height: 630,
  bgcolor: 'whitesmoke',
  borderRadius: '20px',
  outline: 'none'
};
const Linkmodal = ({ handleClose, open,linkinfo,ishome }) => {
    const [isform, setisform] = useState(false);
    // const[linkinfo,setlinkinfo]=useState()
  return (
    <div>
    <Modal
      open={open}
      onClose={() =>{ handleClose(),setisform(false)}}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={style}>
      <Formmodal linkinfo={linkinfo} ishome={ishome} handleClose={handleClose}/>
      </Box>
    </Modal>
  </div>
  )
}

export default Linkmodal