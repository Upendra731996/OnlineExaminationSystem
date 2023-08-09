import React, { useState } from 'react'

const AnswerAllQuestion = () => {

    const [question,setQuestion]=useState([{dfghjkl:"dfghjkl"},{dfghjkl:"dfghjkl"}])

  return (
    <div className='forAllStuden'>
        <h2>Answer All Questions</h2>
        <div>

            {
                question.map((que,i)=>
                <div>
                    <h4>10+2</h4>
                    <label>sdfgbn </label>
                    <input type='radio' id="my"/> <br/>
                    <input type='radio' id="my"/><br/>
                    <input type='radio' id="my"/><br/>
                    <input type='radio' id="my"/><br/>
                
                </div>
                )
            }
        </div>

      
    </div>
  )
}

export default AnswerAllQuestion
