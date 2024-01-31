import React from 'react'
import './Leadsdetail.css'
import { IoIosArrowBack } from "react-icons/io";
import { PiNotePencilBold } from "react-icons/pi";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Leadsdetail = () => {
  const location = useLocation();
  console.log(location)
  // let data=location.state
  return (
    
    <div className='leads-detail'>
    <div className='detail-main'>
    <div className='detail-icon'>
    <Link to='/Manager'>
    <div className="backDiv" style={{margin:'0px'}}>
    <img
      width="15"
      height="15"
      src="https://img.icons8.com/ios-glyphs/96/FFFFFF/back.png"
      alt="back"
    />
  </div></Link>
    </div>
    <div className='detail-heading'>
    <h3 className='main-hed-ann1'>Leads Details</h3>
    </div>
   <div></div>
    </div>
    <div className='lead-info'>
     <div className='lead-name'>
     <h3 style={{fontSize:'25px',fontWeight: '100'}}>{location.state.name}</h3>
    <div className='person-info'>
    <div>
     <p style={{marginTop:'10px',color:'grey'}}>Company</p>
     <p style={{}}>{location.state.company}</p>
    </div>
    <div>
     <p style={{marginTop:'10px',color:'grey'}}>Title</p>
     <p style={{}}>{location.state.title}</p>
     </div>
     <div className='date-main'>
     <div className='date'>
     <p style={{marginTop:'10px',color:'grey'}}>Date</p>
     <p style={{}}>September 21,2023</p>
     </div>
     <div className='date-images'>
     <img src="data:image/png;base64,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" height={30} width={30}/>
     <img src="data:image/png;base64,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" height={30} width={30}/>
     <img src="data:image/png;base64,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" height={30} width={30}/>
     
     </div>
     </div>
     <div className='cell-main'>
      <div className='cell-heading'><p>Cell</p></div>
      <div className='cell-number'><p>{location.state.date}</p></div>
     </div>
     <div className='email-main'>
     <div className='email-head'><p>Email</p></div>
     <div className='email-para'><p>{location.state.email}</p></div>
     </div>
     <div className='status-main'>
     <div className='status-head'><p>Status</p></div>
     <div style={{color:'rgb(0, 115, 255)',fontWeight:'bold'}}  className='status-para'><p>Follow-up</p> <img width="15" height="15"  src="https://img.icons8.com/ios/96/expand-arrow--v2.png" alt="expand-arrow--v2"/>
     </div>
     </div>
     <div className='message-main'>
     <div className='note-main'>
     <div><PiNotePencilBold style={{fontSize:'20px'}}/></div>
     <div className='paragraph'><p>Add a Note</p></div>
     </div>
     <div style={{border:'gainsbore'}} className='message-box'>
     <textarea className='inputtype'></textarea>
     </div>
     </div>
     <div className='detail-btn'>
     <button>Download Contact</button>
     </div>
     </div>
    </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    </div>

  )
}

export default Leadsdetail