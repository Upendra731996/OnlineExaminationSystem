import React, { useState } from 'react'


const ExamResultList = () => {
  const [resultDetails,setResultDetails]=useState([{email:"email",examNmae:"examNmae",examDate:"examDate",resultStatus:"resultStatus"
  ,score:"score",totalMark:"totalMark",totalQuestion:"totalQuestion"
}])
  return (
    <div className='classNameForAll'>
      <h2>Exam Result List</h2>
      <table>
        <tr>
          <th>User Email</th>
          <th>Exam Name</th>
          <th>Exam Date</th>
          <th>Result Status</th>
          <th>Your Score</th>
          <th>Total Marks</th>
          <th>Total Question</th>
        </tr>
        <tbody>
          {resultDetails.map((item,i)=>
          <tr key={i}>
            <td>{item.email}</td>
            <td>{item.examNmae}</td>
            <td>{item.examDate}</td>
            <td>{item.resultStatus}</td>
            <td>{item.score}</td>
            <td>{item.totalMark}</td>
            <td>{item.totalQuestion}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default ExamResultList
