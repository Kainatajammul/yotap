import React, { useEffect, useState } from 'react'
import './Link.css'
import { styled } from '@mui/material/styles';
import { returnIcons } from '../../pages/Images';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { RiDraggable } from "react-icons/ri";
import { onValue, ref } from 'firebase/database';
import { db } from '../../firebase';
import Linkmodal from '../../linkmodal/Linkmodal';

const Link = () => {
  let [open, setOpen] = useState(false);
  const[linkinfo,setlinkinfo]=useState({})
  const handleOpen = (elm) => {
    setlinkinfo(elm)
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
    console.log(open)
  };
  const[selectlinks,setselectlinks]=useState([])
   var uid=localStorage.getItem("yotapid");
  useEffect(() => {
    let getdata = async () => {
    const starCountRef = ref(db,`User/${uid}/links/`);
    onValue(starCountRef, async (snapshot) => {
    let fetchdata = await snapshot.val();
    console.log(fetchdata)
    setselectlinks(Object.values(fetchdata));
    });
    };
    getdata();
  },[])
  console.log(selectlinks)
  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
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
  console.log(selectlinks)
  return (
      <div>
      
      <div className='links-main'>
      <p>My Links</p>
      <hr></hr>
      {selectlinks?.map((elm)=>{
        console.log(elm.id)
        return(
          <div className='link'>
          <div className='left-side'>
          <RiDraggable style={{fontSize:'27',color:'grey',}}/>
          <img style={{borderRadius:'10px',marginLeft:'7px'}} src={returnIcons(elm.id)} height={35} width={35}/>
          <p style={{marginLeft:'10px',fontSize:'17px',marginTop:'2px'}}>{elm.title}</p>
          </div>
          <div className='right-side'>
          <button onClick={()=>{handleOpen(elm)}} className='link-btn'>Edit</button>
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
          />
          </div>
          <Linkmodal open={open} handleClose={handleClose} linkinfo={linkinfo} ishome={true}/>
          </div>
            )}
      )
     }
   
      </div>
      </div>
  )
}

export default Link
