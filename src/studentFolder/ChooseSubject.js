import {useState} from 'react'

const ChooseSubject = () => {
    const [subjects,setSubject]=useState(["sdfghj","dfghjk"])


  return (
    <div id='forAllStuden'>
      <h2 >Choose Subject</h2>
      <table>
        {
           subjects.map((sub,i)=>
          <div>
             <tr>
           <th>{sub}</th>
           
         </tr>
         <tr><td>go back</td></tr>
          </div>
          
           )
        }
        
      </table>

      
    </div>
  )
}

export default ChooseSubject
