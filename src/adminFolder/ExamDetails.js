import React, { useState } from 'react'

const ExamDetails = () => {
  const [examDetails,etExamDetails]=useState({subJectName:"subJectName",examDesc:"examDesc"
  ,ExamCreationDate:"ExamCreationDate",examTotalMark:"examTotalMark",ExamTotalQuestion:"ExamTotalQuestion"
  ,examPassMark:"examPassMark",examLevel:"examLevel"
})

  function backToExamList(){

  }
  return (
    <div className='classNameForAll'>
      <h2>Exam Details</h2>
      <div id='examDetalsTable'>
      <table >
        <tr>
          <th>Exan Name</th>
          <td>{examDetails.subJectName}</td>
          </tr>
          <tr>
          <th>Exam Description</th>
          <td>{examDetails.examDesc}</td>
          </tr>
         <tr> <th>Exam Creation Date</th>
          <td>{examDetails.ExamCreationDate}</td></tr>
         <tr> <th>Exam TotalMarks</th>
          <td>{examDetails.examTotalMark}</td></tr>
          <tr>
          <th>Exam TotalQuestion</th>
          <td>{examDetails.ExamTotalQuestion}</td>
          </tr>
         <tr>
         <th> Exam PassMarks</th>
          <td>{examDetails.examPassMark}</td>
         </tr>
         <tr> <th>Exam Level</th>
          <td>{examDetails.examLevel}</td></tr>
       
          
      </table>
      <button onClick={backToExamList}>GO Back</button>
      </div>
     
     
    </div>
  )
}

export default ExamDetails
