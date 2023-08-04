import React, { useState } from 'react'

const ExamList = () => {

  const [examDetails,setExamDEtails]=useState([])
  return (
    <div className='classNameForAll'>
      <h2>Exam List</h2>
     <table>
      <tr>
        <th>Exam Nmae</th>
        <th>Exam Dsec.</th>
      <th>Exam Creation Date</th>
        <th>Exam Level</th>
        <th>Option</th>
              </tr>
              <tbody>
                {
examDetails.map((item,i)=>
<tr>
  <td>{item.examNmae}</td>
  <td>{item.examDesc}</td>
  <td>{item.examCreationDate}</td>
  <td>{item.examDesc}</td>
  <td>{item.examLevel}</td>
  <td>{}</td>
</tr>
)
                }
              </tbody>
     </table>
    </div>
  )
}

export default ExamList
