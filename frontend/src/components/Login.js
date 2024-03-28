import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import Navigation from "./Navigation";
import './Auth.css'; // Import shared authentication styles

const Login = () => {
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    navigate("/tasks", { replace: true });
  };

  return (
    <div>
      <Navigation link="/register" caption="Register"/>
      <div className="auth-container">
        <h2>Login to TaskToDo</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
}

export default Login;

