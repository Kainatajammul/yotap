// import React, { useEffect, useState } from 'react';
// import './Link.css';
// import { styled } from '@mui/material/styles';
// import { returnIcons } from '../../pages/Images';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import { RiDraggable } from 'react-icons/ri';
// import { onValue, ref } from 'firebase/database';
// import { db } from '../../firebase';
// import Linkmodal from '../../linkmodal/Linkmodal';
// import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

// const Linkcopy1 = () => {
//   let [open, setOpen] = useState(false);
//   const [linkinfo, setlinkinfo] = useState({});
//   const handleOpen = (elm) => {
//     setlinkinfo(elm);
//     setOpen(!open);
//   };
//   const handleClose = () => {
//     setOpen(false);
//     console.log(open);
//   };
//   const [selectlinks, setselectlinks] = useState([]);
//   var uid = localStorage.getItem('yotapid');

//   useEffect(() => {
//     let getdata = async () => {
//       const starCountRef = ref(db, `User/${uid}/links/`);
//       onValue(starCountRef, async (snapshot) => {
//         let fetchdata = await snapshot.val();
//         console.log(fetchdata);
//         setselectlinks(Object.values(fetchdata));
//       });
//     };
//     getdata();
//   }, [uid]);

//   const IOSSwitch = styled((props) => (
//     <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
//   ))(({ theme }) => ({
//     // Your existing switch styling
//   }));

//   const handleDragEnd = (result) => {
//     if (!result.destination) {
//       return;
//     }

//     const updatedItems = Array.from(selectlinks);
//     const [movedItem] = updatedItems.splice(result.source.index, 1);
//     updatedItems.splice(result.destination.index, 0, movedItem);
//     setselectlinks(updatedItems);
//   };

//   return (
//     <DragDropContext onDragEnd={handleDragEnd}>
//       <Droppable droppableId="droppable">
//         {(provided) => (
//           <div {...provided.droppableProps} ref={provided.innerRef} className="links-main">
//             <p>My Links</p>
//             <hr></hr>
//             {selectlinks.map((elm, index) => (
//               <Draggable key={elm.id} draggableId={elm.id} index={index}>
//                 {(provided) => (
//                   <div
//                     className='link'
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                   >
//                     <div className='left-side'>
//                       <RiDraggable style={{ fontSize: '27', color: 'grey' }} />
//                       <img
//                         style={{ borderRadius: '10px', marginLeft: '7px' }}
//                         src={returnIcons(elm.id)}
//                         height={35}
//                         width={35}
//                       />
//                       <p style={{ marginLeft: '10px', fontSize: '17px', marginTop: '2px' }}>{elm.title}</p>
//                     </div>
//                     <div className='right-side'>
//                       <button onClick={() => handleOpen(elm)} className='link-btn'>
//                         Edit
//                       </button>
//                       <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
//                     </div>
//                     <Linkmodal open={open} handleClose={handleClose} linkinfo={linkinfo} ishome={true} />
//                   </div>
//                 )}
//               </Draggable>
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// };

// export default Linkcopy1;
