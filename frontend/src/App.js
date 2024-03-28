import React from 'react';
// import {Routes,  Route} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import Register from './components/Register';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navigation/> */}
        <Routes>
          <Route index path="/" element={<LandingPage/>}/>
        {/* </Routes> */}
        {/* <Routes> */}
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/tasks" element={<TaskList/>}/>
          <Route path="/tasks/:id" element={<TaskDetail/>}/>
        </Routes>
      </div>
     </Router>
  );
}

export default App;





// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// import Navigation from './components/Navigation';
// import Login from './components/Login';
// import LandingPage from './components/LandingPage';
// import Register from './components/Register';
// import TaskList from './components/TaskList';
// import TaskDetail from './components/TaskDetail';
// import './App.css';

// function App() {
//   const location = useLocation();
//   const isLandingPage = location.pathname === '/landing_page';

//   return (
//     <Router>
//       <div className="App">
//         {!isLandingPage && <Navigation />}
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/tasks" element={<TaskList />} />
//           <Route path="/tasks/:id" element={<TaskDetail />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
