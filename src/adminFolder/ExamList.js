import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const ExamList = () => {

  const [examDetails, setExamDEtails] = useState([{ examNmae: "examNmae" }])
  const navigate = useNavigate()
  const [addExam, setAddExam] = useState(true)

  function deleteExam() {

  }

  return (
    <div className='classNameForAll'>
      <h2>Exam List</h2>
      <table>
        <tr>
          <th>Exam Name</th>
          <th>Exam Dsec.</th>
          <th>Exam Creation Date</th>
          <th>Exam Level</th>
          <th >Option</th>
        </tr>
        <tbody>
          {
            examDetails.map((item, i) =>
              <tr key={i}>
                <td>{item.examNmae}</td>
                <td>{item.examDesc}</td>
                <td>{item.examCreationDate}</td>

                <td>{item.examLevel}</td>
                <td className='examListOptionid'>
                  <button onClick={() => navigate("/examDetails")}>details</button>
                  <button onClick={() => navigate("/questionListForUpdate")}>View Question</button>
                  <button onClick={() => navigate("/addingQuestion")}>Add Question</button>
                  <button onClick={deleteExam}>Delete</button>


                </td>
              </tr>
            )
          }
        </tbody>
      </table>
      <div>
        <button onClick={()=>setAddExam(true)}>Add Exam</button>
        
        {
          addExam ? (
            <div id='examListiputs'>
          <div>
            <label>Enter Subject Name</label>
            <input type='text' placeholder='Enter Subject Name' />
          </div>
          <div>
            <label>Enter Exam Desc</label>
            <input type='text' placeholder='Enter Exam Desc' />
          </div>
          <div>
            <label>Enter Exam Level</label>
            <input type='text' placeholder='Enter Exam Level' />
          </div>
          <div>
            <label>Enter Total Question</label>
            <input type='text' placeholder='Enter Total Question' />
          </div>
          <div>
            <label>Enter Total Marks</label>
            <input type='text' placeholder='Enter Total Marks' />
          </div>
          <div>
            <label>Enter Pass Marks</label>
            <input type='text' placeholder='Enter Pass Marks' />
          </div>
          <button>Add</button>
          <button onClick={()=>setAddExam(false)}>Close</button>
        </div>
          ) : null
        }
      </div>
    </div>
  )
}

export default ExamList
