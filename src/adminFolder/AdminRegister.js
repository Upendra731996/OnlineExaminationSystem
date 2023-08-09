import React from 'react'

const AdminRegister = () => {

  function signup(){

  }
  function data(){

  }
  return (
    <div id='loginContainer'>
      
    <div id='loginContainerChild'>
    <h1>signup</h1>
    <div>
      <label>useName</label> <br/>
      <input></input>
    </div>
    <div>
    <label>Email</label> <br/>
    <input type='text' onChange={(e)=>data(e)} />
    </div>
    <div><label>Password</label><br/>
    <input type='password' onChange={(e)=>data(e)}/></div>
     
   <div> <button onClick={signup}>signup</button> <br/>
   {/* <button onClick={navigation("/")}> go back</button> */}
   
 
    </div>
    </div>
  </div>
  )
}

export default AdminRegister
