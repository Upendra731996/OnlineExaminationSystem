import React from 'react'
import { NavLink} from 'react-router-dom'
import NavSideBar from './NavSideBar'

const Dashboard = () => {
  return (
    <>
    
    <h1 id='dashBoardHeading'>Dashboard</h1>
      <div id='dashBoard'>
      
        <div >
          <div className='dashboardClass'>we have total exam</div>
         <div className='dashboardClassLink'> <NavLink to="/examDetails" className="dashboardLink" >View Details</NavLink></div>
        </div>
       <div id='forMarging'>
       <div className='dashboardClass1'>we have total question</div>
        <div className='dashboardClassLink1'><NavLink to={"/questionList"} className="dashboardLink1" >View Details</NavLink></div>
       </div>

     
      <div>
        <div className='dashboardClass'>we have total user</div>
        <div className='dashboardClassLink'><NavLink to={""} className="dashboardLink" >View Details</NavLink></div>
      </div>
      </div>
   
    </>
  )
}

export default Dashboard
