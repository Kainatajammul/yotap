import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './Tags.css';
import Maintag from '../maintag/Maintag';
import Formmodal from '../formmodal/Formmodal';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 390,
  height: 630,
  bgcolor: 'whitesmoke',
  borderRadius: '20px',
  boxShadow: 24,
  outline: 'none',
};

const Tags = ({ handleClose, open }) => {
  const [isform, setisform] = useState(false);
  const [linkinfo, setlinkinfo] = useState();

  return (
    <div>
    <Modal
    open={open}
    onClose={() => { handleClose(); setisform(false); }}
    aria-labelledby="child-modal-title"
    aria-describedby="child-modal-description"
    >
    <Box sx={style}>
    <IconButton
    edge="end"
    color="inherit"
    onClick={() => { handleClose(); setisform(false); }}
    aria-label="close"
    sx={{ position: 'absolute', top: 32, right: 24, color: 'grey' }}
    >
    <CloseIcon />
    </IconButton>
    {(isform === false) ? <Maintag setisform={setisform} setlinkinfo={setlinkinfo} /> : (<Formmodal linkinfo={linkinfo} setisform={setisform} />)}
    </Box>
    </Modal>
    </div>
  );
};

export default Tags;
