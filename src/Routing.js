import React from 'react'
import { BrowserRouter as Router,Route,Routes, Switch } from 'react-router-dom' 
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
import ExamListAllDetils from './adminFolder/ExamListAllDetils'
import NavSideBar from './adminFolder/NavSideBar'



const Routing = () => {
  return (
   <Router>
    
   <NavSideBar/>
   {/* <ExamList/> */}
    {/* <Dashboard/> */}
    {/* <SubjectList/> */}
    {/* <ExamDetails/> */}
    <QuestionListForUpdate/>
   
<Routes>
  <Route path='/adminLoging' element={<AdminLoging/>}></Route>
  <Route path='/adminRegister' element={<AdminRegister/>}></Route>
  <Route path='/addingQuestion' element={<AddingQuestion/>}></Route>
  <Route path='/studentExamList' element={<StudentExamList/>}></Route>

  <Route path='/examList' element={<ExamList/>}></Route>

  <Route path='/examDetails' element={<ExamDetails/>}></Route>
  <Route path='/questionList' element={<QuestionList/>}></Route>
  <Route path='/dashboard' element={<Dashboard/>}></Route>
  {/* <Route path='/subjectList' element={<SubjectList/>}></Route> */}
  <Route path='/questionListForUpdate' element={<QuestionListForUpdate/>}></Route>
  <Route path='/examListAllDetils' element={<ExamListAllDetils/>}></Route>
</Routes>

   </Router>
  )
}

export default Routing
