import React from 'react'
import { NavLink } from 'react-router-dom'


const NavSideBar = () => {
  return (
    <>
      <div id='dashBoardContainer'>
    <div id='dashborImage'></div>
      <NavLink to={"/subjectList"} className="NavLink">subject</NavLink>
      <NavLink to={"/examList"} className="NavLink">Exam</NavLink>
      <NavLink to={"/questionList"} className="NavLink">Question</NavLink>
      <NavLink to={"/examListAllDetils"} className="NavLink">Exam</NavLink>
      <NavLink to={"/studentExamList"} className="NavLink">StudentList</NavLink>
      </div>
    </>
  )
}

export default NavSideBar
