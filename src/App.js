import logo from './logo.svg';
import './App.css';
import OnlineExam from './OnlineExam';
import Routing from './Routing';

import NavSideBar from './adminFolder/NavSideBar';
import { NavLink } from 'react-router-dom';

// className="App"
function App() {
  return (
    <div>
      <h2 id='hedaing1'><span>Online Exam System</span></h2>
      
      <Routing/>
      
     
     {/* <OnlineExam/> */}
    </div>
  );
}

export default App;
