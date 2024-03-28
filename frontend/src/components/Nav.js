import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">TaskToDo</Link>
        <ul className="nav-links">
          <li><Link to="/tasks">Tasks</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/">Landing Page</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
