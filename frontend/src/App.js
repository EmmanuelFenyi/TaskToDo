import React from 'react';
import {Routes,  Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/tasks" element={<TaskList/>}/>
        <Route path="/tasks/:id" element={<TaskDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;