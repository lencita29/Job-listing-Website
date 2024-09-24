import React, { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './Home'
import Userlogin from './Userlogin'
import Register from './Register'
import UserHome from './UserHome'
import Adminlogin from './Adminlogin'
import Registeradmin from './Registeradmin'
import AdminHome from './AdminHome'
import AdminInsert from './AdminInsert'
import DisplayJobs from './DisplayJob'
import Edit from './Edit'
import Adminprofile from './Adminprofile'
import UserProfile from './Userprofile'
import Jobs2 from './Jobs2'
import Jobapplicationform from './Jobapplicationform'
import Contact from './Contact/Contact'
import Value from './Value/Value'
//import data from '../../src/slider.jsx';



export default function Router() {
    const [loggedInUser, setLoggedInUser] = useState(null)
    const [loggedInAdmin, setLoggedInAdmin] = useState(null)

  return (
    <div style={{ background: 'black', minHeight: '100vh' }}>
    <BrowserRouter>
    <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/Userlogin' element={<Userlogin setLoggedInUser={setLoggedInUser}/>}/>
            <Route exact path='/Adminlogin' element={<Adminlogin setLoggedInAdmin={setLoggedInAdmin}/>}/>
            <Route exact path='/Register' element={<Register setLoggedInUser={setLoggedInUser}/>}/>
            <Route exact path='/Registeradmin' element={<Registeradmin setLoggedInAdmin={setLoggedInAdmin}/>}/>
            <Route exact path='/UserHome' element={<UserHome/>}/>
            <Route exact path='/AdminHome' element={<AdminHome/>}/>
            <Route exact path='/AdminInsert' element={<AdminInsert/>}/>
            <Route exact path='/DisplayJobs' element={<DisplayJobs/>}/>
            <Route exact path='/Edit/:index' element={<Edit/>}/>
            <Route exact path='/Adminprofile' element={<Adminprofile/>}/>
            <Route exact path='/UserProfile' element={<UserProfile/>}/>
            <Route exact path='/Jobs2' element={<Jobs2/>}/>
            <Route exact path='/Jobapplicationform' element={<Jobapplicationform/>}/>
            <Route exact path='/Contact' element={<Contact/>}/>
            <Route exact path='/Values' element={<Value/>}/>
            {/* <Route exact path='/Slider' element={<Slider/>}/> */}
            
            
           
    </Routes>
</BrowserRouter> 
</div>
 )
}

