import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const AllexamDetail = () => {
    const [examDetails,setExamDEtails]=useState([{}])
    const navigate=useNavigate()

  return (
    <div id='allExamDetails'>
        <h2>All Math Exam</h2>
     
       <table>
            <tr><h4>Math</h4></tr>
            <tr><div>ExamId:{"ghjkl"}</div></tr>
            <tr><div>Exam Description:{"fghjk"}</div></tr>
            <tr><div>Pass Mark:{"dfghjkl"}</div></tr>
            <tr><div>TtalMark:{"dfghjk"}</div></tr>
            <tr><button onClick={()=>navigate("/")}>go to Exam</button></tr>
        </table>
     
      
    </div>
  )
}

export default AllexamDetail
