import React, { useState } from 'react'
import {useNavigate} from  'react-router-dom'

const AddingQuestion = () => {
  const navigate= useNavigate()
  const [questionData,setQuestionData]=useState({})

  function data(e){
    let value =e.target.value
    let name =e.target.name

    setQuestionData((pre)=> pre,)
  }

  function addQuestion(){

  }
  return (
    <div className='classNameForAll'>

      <div id='addinQuestionList'>
      <h2>Adding Question</h2>
      
      <div><label>Question Name</label>
      <input  onChange={(e)=>data(e)} placeholder='Enter Name '/></div>
      <div>
      <label>Enter Option A</label>
      <input onChange={(e)=>data(e)} placeholder='Enter Option A'/>
      </div>
      <div>
      <label>Enter Option B</label>
      <input  onChange={(e)=>data(e)}  placeholder='Enter Option B'/>
      </div>
      <div>
      <label>Enter Option C</label>
      <input  onChange={(e)=>data(e)}  placeholder='Enter Option C'/>
      </div>
      <div>
      <label>Enter Option D</label>
      <input  onChange={(e)=>data(e)}  placeholder='Enter Option D'/>
      </div>
      <div>
      <label>Enter Question Answer</label>
      <input  onChange={(e)=>data(e)}  placeholder='Enter Question Answer (do not write Option A,B,C,D)'/>
      </div>
      <div>
      <label>Enter Subject</label>
      <input  onChange={(e)=>data(e)}  placeholder='Enter Subject '/>
      </div>
     <div>
     <button onClick={addQuestion}>Add</button>
      <button onClick={()=> navigate("/examList")}>Go Back</button>
     </div>
     
      
      </div>

      
    </div>
  )
}

export default AddingQuestion
