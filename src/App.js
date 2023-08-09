import logo from './logo.svg';
import './App.css';
import OnlineExam from './OnlineExam';
import Routing from './Routing';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom' 
import NavSideBar from './adminFolder/NavSideBar';
import { NavLink } from 'react-router-dom';
import AdminLoging from './adminFolder/AdminLoging';
import AdminRegister from './adminFolder/AdminRegister';
import StudentLogin from './studentFolder/StudentLogin';
import Protected from './Protected';

// className="App"
function App() {
  return (
    <Router>
        {/* <AdminLoging/> */}
      {/* <h2 id='hedaing1'><span>Online Exam System</span></h2> */}
     
      <Routing/>
     {/* <AdminRegister/> */}
     {/* <Protected/> */}
     
     {/* <OnlineExam/> */}
    </Router>
  );
}

export default App;
