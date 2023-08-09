import React, { useState } from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom' 
import AdminLoging from './adminFolder/AdminLoging'
import AdminRegister from './adminFolder/AdminRegister'
import AddingQuestion from './adminFolder/AddingQuestion'
import StudentExamList from './adminFolder/StudentExamList'
import ExamList from './adminFolder/ExamList'
import ExamDetails from './adminFolder/ExamDetails'
import QuestionList from './adminFolder/QuestionList'
import Dashboard from './adminFolder/Dashboard'
import SubjectList from './adminFolder/SubjectList'
import QuestionListForUpdate from './adminFolder/QuestionListForUpdate'
import ExamResultList from './adminFolder/ExamResultList'
import NavSideBar from './adminFolder/NavSideBar'
import StudentList from './adminFolder/StudentList'
import OnlineExam from './OnlineExam'
import StudentLogin from './studentFolder/StudentLogin'
import StudentRegister from './studentFolder/StudentRegister'
import ChooseSubject from './studentFolder/ChooseSubject'
import AllexamDetail from './studentFolder/AllexamDetail'
import AnswerAllQuestion from './studentFolder/AnswerAllQuestion'
import Protected from './Protected'



const Routing = () => {

  const [data,setData]=useState("fghj")
  return (
   <>
    {/* <StudentLogin/> */}
    {/* <StudentRegister/> */}
    {/* <ChooseSubject/> */}
    {/* <AllexamDetail/> */}
    {/* <AnswerAllQuestion/> */}
    {/* =========== */}
   <NavSideBar/>
   {/* <ExamList/> */}
    {/* <Dashboard/> */}
    {/* <SubjectList/> */}
    {/* <ExamDetails/> */}
    {/* <QuestionListForUpdate/> */}
    {/* <AdminLoging/> */}
    {/* <AddingQuestion/> */}
    {/* <ExamResultList/> */}
    {/* <QuestionList/> */}
    {/* <StudentList/> */}
    {/* <OnlineExam/> */}
   
<Routes>
 
  {/* <Route path='/adminLoging' element={<AdminLoging/>}></Route> */}
  <Route path='/adminRegister' element={<AdminRegister/>}></Route>
  <Route path='/addingQuestion' element={<AddingQuestion/>}></Route>
  <Route path='/studentExamList' element={<StudentExamList/>}></Route>

  <Route path='/examList' element={<ExamList/>}></Route>

  <Route path='/examDetails' element={<ExamDetails/>}></Route>
  <Route path='/questionList' element={<QuestionList/>}></Route>
  <Route path='/dashboard' element={<Dashboard/>}></Route>
  <Route path='/subjectList' element={<SubjectList/>}></Route>
  <Route path='/questionListForUpdate' element={<QuestionListForUpdate/>}></Route>
  <Route path='/examResultList' element={<ExamResultList/>}></Route>
  <Route path='/studentList' element={<StudentList/>}></Route>
  <Route path='/onlineExam' element={<OnlineExam/>}/>
  <Route path='/adminLoging' element={<AdminLoging/>}></Route>
  <Route path='/protected' element={<Protected/>}>

  </Route>

 



</Routes>


   </>
  )
}

export default Routing
