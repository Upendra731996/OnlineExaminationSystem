import React, { useState } from 'react'
import OnlineExam from './OnlineExam'
import AdminLoging from './adminFolder/AdminLoging'
import NavSideBar from './adminFolder/NavSideBar'
import './App.css';
import Dashboard from './adminFolder/Dashboard';

const Protected = () => {
    let [userData,setUserData]=useState("fghj")


  return (
    <div>
{
    userData ? 
    (<div><h2 id='hedaing1'><span>Online Exam System</span></h2>
    {/* <NavSideBar/>  */}
    <Dashboard/></div>
    ) : <AdminLoging/>
}
      
      
    </div>
  )
}

export default Protected
