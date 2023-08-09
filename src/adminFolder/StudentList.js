import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavSideBar from './NavSideBar'

const StudentList = () => {
  
  const navigate=useNavigate()
  const [studentList,setStudentList]=useState([{useName:"useName"}])
  return (
    
    <div className='classNameForAll'>
      <h2>Student List</h2>
     <div id='StudentList'>
     <table>
        <tr>
          <th>User Name</th>
          <th>User Email</th>
          <th>Option</th>
        </tr>
        <tbody>
          {
            studentList.map((students,i)=>
            <tr>
              <td>{students.useName}</td>
              <td>{students.email}</td>
              <td><button onClick={()=> navigate("/examResultList")}>View Result</button></td>
            </tr>)

          }
        </tbody>
      </table>
     </div>

    </div>
  )
}

export default StudentList
