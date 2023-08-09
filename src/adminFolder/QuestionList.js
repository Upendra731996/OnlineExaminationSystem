import React, { useState } from 'react'

const QuestionList = () => {

  const [questionList,setQuestionList]=useState([{questionNmae:"questionNmae",optionOne:"optionOne",optionTwo:"optionTwo",

}])
  return (
    <div className='classNameForAll'>
      <h2>Question List</h2>
     <div id='questionListTable'> <table>
        <tr>
        <th> Question Name</th>
          <th> Question One</th>
          <th>Question Two</th>
          <th>Question Three</th>
          <th>Question Four</th>
          <th>Question Answer</th>
          <th>Subject Name</th>
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
             <td>{item.subjectName}</td>
              
            </tr>
            )
          }
        </tbody>
      </table></div>
      
    </div>
  )
}

export default QuestionList
