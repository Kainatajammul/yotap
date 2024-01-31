import React, { useEffect, useState } from 'react'
import './Hero.css'
import { Link } from 'react-router-dom';
import { getDownloadURL, ref as sref,uploadBytes } from 'firebase/storage';
import { MdOutlineModeEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import { db, storage } from '../../firebase';
import { onValue, ref, update } from 'firebase/database';
import Tags from '../tags/Tags';
import { SlEye } from "react-icons/sl";
const Hero1 = () => {
   
  let [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
    console.log(open)
  };
  const[img,setimg]=useState(null)
  const[proimg,setproimg]=useState(null)
  const[logoimg,setlogoimg]=useState(null)
  const[herodata,setherodata]=useState({})
  let uid=localStorage.getItem('yotapid')
  console.log(proimg)
  console.log(uid);
  var img2;

useEffect(() => {
let getdata = async () => {

const starCountRef = ref(db,`User/${uid}`);

onValue(starCountRef, async (snapshot) => {

const data = await snapshot.val();
console.log(data);
setimg(data?.imgUrl)
setproimg(data?.profileUrl)
setlogoimg(data?.logoUrl)
setherodata(data)
});
};

getdata();
}, []);
// console.log(setherodata)
  const uploadImage = (e) => {
    setimg(e)
    let name =uid+"coverURL";
    const storageRef = sref(storage, name);
    console.log('img testing1')
    uploadBytes(storageRef,e).then(() => {
    getDownloadURL(storageRef).then((URL) => {
    console.log(URL)
    update(ref(db,`User/${uid}`), { imgUrl: URL });
    })
          
    }).catch((error) => {
        console.log(error)
    })
   
  }
  const uploadproImage = (e) => {
    setproimg(e)
    let name =uid+"profileURL";
    const storageRef = sref(storage, name);
    console.log('img testing1')
    uploadBytes(storageRef,e).then(() => {
    getDownloadURL(storageRef).then((URL) => {
    console.log(URL)
    update(ref(db,`User/${uid}`), { profileUrl: URL });
       
  })
          
    }).catch((error) => {
        console.log(error)
    })
   
  }
  const uploadlogoImage = (e) => {
    setlogoimg(e)
    let name =uid+"logoURL.png";
    const storageRef = sref(storage, name);
    console.log('img testing1')
    uploadBytes(storageRef,e).then(() => {
    getDownloadURL(storageRef).then((URL) => {
    console.log(URL)
    update(ref(db,`User/${uid}`), { logoUrl: URL });
       
  })
          
    }).catch((error) => {
        console.log(error)
    })
   
  }
let navigate= useNavigate()
let path= window.location.pathname
console.log(img);
// const isstring= typeof
  return (
    <>
   
    <div className="main-section-inner">
    <div className="logoskip" style={{display:'flex', justifyContent:'center', alignItems:'center', width:'90%', justifyContent:'space-between', marginTop:'20px'}}>
    <Link to="/" style={{widows:'50%'}}>
      <div className="backDiv" style={{marginTop:'0px'}}>
        <img
          width="15"
          height="15"
          src="https://img.icons8.com/ios-glyphs/96/FFFFFF/back.png"
          alt="back"
        />
      </div>
    </Link>
    <div><p>Edit Info</p></div>
    <div></div>
  </div>
    <div>
    <div className="main">
       <img src={ img }/>
      <label htmlFor="img-picker">
        <input type="file"  id="img-picker"   style={{ display: "none" }}
        onChange={(e)=>uploadImage(e.target.files[0])}/>
        <div  className='mainicon'>
        <MdOutlineModeEdit className='main-icon'/>
        </div>               
      </label>
      <div className="small-img">
      <div>
        <label htmlFor="smallimg-picker">
          <input type="file"  id="smallimg-picker"   style={{ display: "none" }}
          onChange={(e) =>uploadproImage(e.target.files[0])}/>  
          <img src={proimg}/>          
        </label>
      </div>
      <div className='small-logo'>
        <div>
          <label htmlFor="logoimg-picker">
            <input type="file"  id="logoimg-picker"   style={{ display: "none" }}
            onChange={(e) =>uploadlogoImage(e.target.files[0])}/>  
            <img src={logoimg} className='small-logo-img'/>          
          </label>
        </div>
      </div>
    </div>
    </div>
    </div>
   {path!="/edit"? <>
    <div className="content">
   
       <div className="content-heading">
          <p></p>
      </div>
 
      <div  className="content-para">
        <h2 className='heading-name'>{herodata.heading}</h2>
        <p className="para1">CEO</p>
        <p className="para1">Company Co</p>
        <p className="para1">New York City, NY, US</p>
      </div>

    </div>
    
    <div className="btn">
      <button onClick={()=>navigate('/edit')} className="btn-css">Edit Info</button> 
      <Tags  open={open}  handleClose={handleClose} />
      <button onClick={()=>handleOpen() } className="btn-css">Add Link</button>
      
      </div>
  
   </>:null
  }
   </div>
    </>
  )
}

export default Hero1
