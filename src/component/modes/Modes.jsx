import React, { useState } from 'react'
import './Modes.css'
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { CiCircleAlert } from "react-icons/ci";
import { CgColorPicker } from "react-icons/cg";
import Mymodal from '../modal';
const Modes = () => {
  
  let [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
    console.log(open)
  };
  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      // transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));
  const[headingpara,setheadingpara]=useState({
    heading:"",
    paragraph:""
  })

   
  return (
<>
    <div style={{marginTop :"80px",borderRadius:'20px',padding:'5px'}}  className='mode-main'>
    <Mymodal  open={open} headingpara={headingpara}  handleClose={handleClose}  />
    <div onClick={()=>{handleOpen(),setheadingpara({heading:"First Link Mode",paragraph:" This mode will take the other person directly to the first link of your choice, without going to your full profile"})}} className='mode-left'>
   
    <CiCircleAlert />
    <p>Lead Capture Mode</p>
    </div>
    <div className='mode-right'>
    <FormControlLabel
    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
   />
    </div>
    
    </div>
    <div style={{marginTop :"15px",borderRadius:'20px',padding:'5px'}}  className='mode-main'>
    <Mymodal  open={open} headingpara={headingpara}  handleClose={handleClose}  />
    <div onClick={()=>{handleOpen(),setheadingpara({heading:"Link Capture Mode",paragraph:" When this mode is turned on, the contact exchange form will automatically appears when you share your card with someone."})}}  className='mode-left'>
   
    <CiCircleAlert/>
    <p>Link Capture Mode</p>
    </div>
    <div className='mode-right'>
    <FormControlLabel
    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
    />
    </div>
    
    </div>
  
    <div className='card-main'>
    <div className='card-marker'>
    <p style={{fontSize :"14px"}}>Card Color</p>
    </div>
   
    <div className='card-colors'>
    <CgColorPicker style={{fontSize:'10px',borderRadius:'15px',border:'1px solid black',padding:'4px',marginLeft:'30px'}}  />
    <div className='white'></div>
    <div className='black'></div>
    <div className='red'></div>
    <div className='orange'></div>
    <div className='yellow'></div>
    <div className='green'></div>
    <div className='blue'></div>
    <div className='purple' ></div>
    </div>
    </div>
</> 
    
    
  )
}

export default Modes
