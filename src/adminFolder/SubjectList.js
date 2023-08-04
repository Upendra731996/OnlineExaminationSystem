import React, { useState } from 'react'

const SubjectList = () => {
  const [subject,setSubject]=useState(["man","man","man"])
  const [flage,setFlage]=useState(true)
  const [subjectName,setSubjectName]= useState("")
  function addsubject(){

  }
  function deletSubject(){

  }


  return (
    <div className='classNameForAll'>
    <div id='SubjectListContainer'>
    <h2>Subject List</h2>
    <div>
     
     <table>
      <tr >
        <th  >Subject Name</th>
        <th >Option</th>
      </tr>
      <tbody  >
      { 
      subject.map((item,i)=>
      <tr key={i}>
        <td >{item}</td>
        <td >{<button onClick={()=>deletSubject()}   style={{backgroundColor:"black" ,margin:"1px"}}>delete</button>}</td>

      </tr>)
      }
      </tbody>
     </table>
     <button onClick={()=>setFlage(true)}>Add Subject</button>
     
     
     {
  flage ? (
    <div>
      <label>Enter Subject</label>
      <input type='text' onChange={(e) => setSubjectName(e.target.value)} placeholder='Enter subject name' /> <br/>
      <button onClick={addsubject}>Add</button>
      <button onClick={()=> setFlage(false)}>Close</button>
    </div>
  ) : null
}



    
     </div>

    
    </div>
    </div>
  )
}

export default SubjectList
