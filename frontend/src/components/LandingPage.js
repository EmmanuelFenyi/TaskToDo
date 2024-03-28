import React from 'react';
import { Link } from 'react-router-dom';

import "./LandingPage.css";
import taskManagePage from "../asset/images/taskManagePage.JPG";
import authPage from "../asset/images/authPage.JPG";
import taskDetailsPage from "../asset/images/taskDetailsPage.JPG";

function LandingPage() {
  return (
    <div>
      {/* Intro Section */}
      <section id="intro" className="intro-section">
        <div className="container">
          <h1>TaskToDo</h1>
          <p>A simple task management application for organizing your tasks efficiently.</p>
          <nav>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </nav>
          <Link to="/register" className="btn">Go to App</Link>
        </div>
      </section>

      {/* Feature Section */}
      <section id="features" className="feature-section">
        <div className="container">
          <h2>Key Features</h2>
          <div className="feature">
            <h3>Task Management</h3>
            <img src={taskManagePage} alt="Feature 1" />
            <p>Organize your tasks efficiently with TaskToDo's intuitive task management system.</p>
          </div>
          <div className="feature">
            <h3>User Authentication</h3>
            <img src={authPage} alt="Feature 2" />
            <p>Securely manage your tasks with user authentication features.</p>
          </div>
          <div className="feature">
            <h3>Real-time New Task Entry</h3>
            <img src={taskDetailsPage} alt="Feature 3" />
            <p>Instantly enter any task needed to be completed on TaskToDo's New Task Entry feature.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>About TaskToDo</h2>
          <p>TaskToDo was inspired by the need for a simple yet effective task management solution. As a team, we wanted to create an application that allows users to organize their tasks efficiently and collaborate with others seamlessly.</p>
          <p>This project was developed as a Portfolio Project for ALX School, showcasing our skills in full-stack web development.</p>
          <h3>Meet the Team</h3>
          <ul>
            <li><a href="link-to-linkedin-profile">LinkedIn</a></li>
            <li><a href="link-to-github-profile">GitHub</a></li>
            <li><a href="link-to-twitter-profile">Twitter</a></li>
          </ul>
          <a href="link-to-github-repo" className="btn">GitHub Repository</a>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
