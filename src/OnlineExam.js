import React from 'react'
import "./App.css"
import { NavLink } from 'react-router-dom'

const OnlineExam = () => {
  return (
    <>
      
      <div id='container'>

        <div id='heading2'></div>
        <h3>Online Exam</h3>
      </div>

      <div id='container2'>

        <div id='container3'>
          <div id='heading3'></div>
          <h4>Student</h4>
        </div>

        <div id='container4'>
          <div id='heading4'></div>
          <h4><NavLink to={"/adminLoging"}>Admin</NavLink></h4></div>
      </div>

    </>
  )
}

export default OnlineExam
// <!-- Education icon -->
{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
<i class="fas fa-graduation-cap"  style={{height:1000, width:1000}}></i>  */}