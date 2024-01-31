import React from 'react'
import Home from './pages/Home'
import Edit from './pages/Edit';
import Analytics from './pages/Analytics';
import Setting from './pages/Setting';
import './App.css'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Manager from './pages/Manager';
import Navbar from './component/navbar/Navbar';
import Details from './pages/Details';
import Leadsdetail from './component/leadsdetail/Leadsdetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Maintag from './component/maintag/Maintag';
import Formmodal from './component/formmodal/Formmodal';
import Mainprofile1 from './pages/Mainprofile1';
import Forgot from './pages/Forgot';
import covermodal from './component/covermodal/Cover'

let theToken = localStorage.getItem("yotapid");
const RequireAuth = ({ children }) => {
  return theToken ? children : <Navigate to="/Login" />;
};

const RequireAuthlogin = ({ children }) => {
  return !theToken ? children : <Navigate to="/" />;
};
const App = () => {
  const path= window.location.pathname;
  console.log(path)
  return (
  
    <div className='main-app'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RequireAuth><Home/></RequireAuth>} />
        <Route path='/edit' element={<RequireAuth><Edit/></RequireAuth>}/>
        <Route path='/analytics' element={<RequireAuth><Analytics/></RequireAuth>}/>
        <Route path='/setting' element={<RequireAuth><Setting/></RequireAuth>}/>
        <Route path='/Manager' element={<RequireAuth><Manager/></RequireAuth>}/>
        <Route path='/Details' element ={<RequireAuth><Details/></RequireAuth>}/>
        <Route path='/Leadsdetail' element ={<RequireAuth><Leadsdetail/></RequireAuth>}/>
        <Route path='/Login' element={<RequireAuthlogin><Login/></RequireAuthlogin>}/>
        <Route path='/Signup' element={<RequireAuthlogin><Signup/></RequireAuthlogin>}/>
        <Route path='/Formmodal' element={<RequireAuth><Formmodal/></RequireAuth>}/>
        <Route path='/mainprofile1' element={<RequireAuth><Mainprofile1/></RequireAuth>}/>
        <Route path='/forgot' element={<RequireAuthlogin><Forgot/></RequireAuthlogin>}/>
        <Route  path='/covermodal' element={covermodal}></Route>
      </Routes>
      <br/>
      <br/>
     
   </BrowserRouter>
 
    </div>
  )
}

export default App
