import React, { useState } from 'react'
import { NavLink} from 'react-router-dom'

const AdminLoging = () => {
  const [userCredential,setUserCredential]=useState({})


function Data(e){

}
function login(){

}


  return (
    <div className='loginContainer'>
      
      <div className ='loginContainerChild'>
      <h1>Admin Longin</h1>
      <div>
      <label>Email</label> <br/>
      <input type='text' onChange={(e)=>Data(e)} />
      </div>
      <div><label>Password</label><br/>
      <input type='password' onChange={(e)=>Data(e)}/></div>
     <div> <button onClick={login}>Longin</button> <br/>
     {/* <button onClick={navigation("/")}> go back</button> */}
     <NavLink to={"/OnlineExam"} id='loginNavlink' >Go Back</NavLink>
   
      </div>
      </div>
    </div>
  )
}

export default AdminLoging
