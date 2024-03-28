// Homepage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = (props) => {
  return (
    <div className="navigation">
      {/* <h1>TaskToDo  Login Page</h1> */}
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/tasks" className="nav-link">View Tasks</Link>
        <Link to={props.link} className="nav-link">{props.caption}</Link>
        {/* <Link to="/register" className="homepage-link">Register</Link> */}
      </div>
    </div>
  );
}

export default Navigation;
