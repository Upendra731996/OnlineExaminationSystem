import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const QuestionListForUpdate = () => {
  const [questionList,estQuestionList]=useState([{questionNmae:"questionNmae"}])
  const [editConditon,setEditCondition]=useState(true)
  const [ questionDetails,setQuestionDetails]=useState({})
const navigate=useNavigate()

   function questionDelete(){

   }

    function goBack(){

    }
function updateQuestion(){

}

  return (
    <div className='classNameForAll'>
      <h2>Question List</h2>
     <div id='QuestionListTable'>
     <table>
        <tr>
          <th> Question Name</th>
          <th> Question One</th>
          <th>Question Two</th>
          <th>Question Three</th>
          <th>Question Four</th>
          <th>Question Answer</th>
          <th>Options</th>
        </tr>
        <tbody>
          {
            questionList.map((item,i)=>
            <tr key={i}>
              <td>{item.questionNmae}</td>
              <td>{item.optionOne}</td>
              <td>{item.optionTwo}</td>
              <td>{item.optionThree}</td>
              <td>{item.optionFour}</td>
              <td>{item.questionAnswer}</td>
              <td><button onClick={()=>setEditCondition(true)}>Edit</button>
              <button onClick={questionDelete}>Delete</button>
              </td>
            </tr>
            )
          }
        </tbody>
      </table>
     </div>
      <button onClick={()=>navigate("/examList")}>Go Back</button>

      {
        editConditon ?(
          <div id='editQuestionInput'>
        <label>Enter Question</label>
        <input type='text' value={questionDetails.question} /> <br/> <br/>
        <label>Enter Option A</label>
        <input type='text' value={questionDetails.optionA} /> <br/> <br/>
        <label>Enter Option A</label>
        <input type='text' value={questionDetails.optionB} /> <br/> <br/>
        <label>Enter Option C</label>
        <input type='text' value={questionDetails.optionC} /> <br/> <br/>
        <label>Enter Option D</label>
        <input type='text' value={questionDetails.optionD} /> <br/> <br/>
        <label>Enter Question answer</label>
        <input type='text' value={questionDetails.questionAnser} /> <br/> <br/>
        <label>Enter Subject</label>
        <input type='text' value={questionDetails.subjecName} /> <br/> <br/>
     
      <button onClick={updateQuestion} >Update Question</button>
      <button onClick={()=>setEditCondition(false)} >Close</button>
      </div>
        ) : null
      }
    </div>
  )
}

export default QuestionListForUpdate
