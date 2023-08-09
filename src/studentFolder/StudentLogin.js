import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


const StudentLogin = () => {
    const [studentCredential,setStudentCredential]=useState({})


    function Data(e){
    
    }
    function login(){
    
    }
    
    
      return (
        <div className='loginContainer'>
          
          <div className='loginContainerChild'>
          <h1>Student Longin</h1>
          <div>
          <label>Email</label> <br/>
          <input type='text' onChange={(e)=>Data(e)} />
          </div>
          <div><label>Password</label><br/>
          <input type='password' onChange={(e)=>Data(e)}/></div>
         <div> <button onClick={login}>Longin</button> <br/>
        
         <NavLink to={"/"} id='loginNavlink' >Go Back</NavLink>
       
          </div>
          </div>
        </div>
      )
}

export default StudentLogin
