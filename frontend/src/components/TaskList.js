import React, { useState } from 'react';
import { Link } from "react-router-dom";

import Navigation from './Navigation';
import './TaskList.css';


const TaskList = () => {
  const [editedTask, setEditedTask] = useState(null);

  const handleEdit = (taskId) => {
    setEditedTask(taskId);
  };
  const handleDelete = (taskId) => {
    // setEditedTask(taskId);
  };

  const handleSave = () => {
    setEditedTask(null);
    // Send edited task data to backend API
  };

  const handleCancel = () => {
    setEditedTask(null);
  };

  const first_task = {
    title:"title description",
    description: "description1",
    priority: "urgent",
    dueDate: "21/04/2025",
    status: "Pending"
  }
  const second_task = {
    title:"title description",
    description: "description1",
    priority: "urgent",
    dueDate: "21/04/2025",
    status: "Pending"
  }
  const [tasks, setTasks] = useState([first_task, second_task]);

  return (
    <div className="task-list-container">
      <Navigation link="/logout" caption="Logout" />
      <h2>Task List</h2>
      <Link to="/tasks/add">Add New Task</Link>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            <div className="task-details">
              <h3 className="task-title">{task.title}</h3>
              {editedTask === task.id ? (
                <div>
                  <label htmlFor="priority">Priority:</label>
                  <select id="priority" defaultValue={task.priority}>
                    <option value="urgent">Urgent</option>
                    <option value="not urgent">Not Urgent</option>
                  </select>
                  <br />
                  <label htmlFor="dueDate">Due Date:</label>
                  <input type="date" id="dueDate" defaultValue={task.dueDate} />
                  <br />
                  <label htmlFor="status">Status:</label>
                  <select id="status" defaultValue={task.status}>
                    <option value="completed">Completed</option>
                    <option value="in-progress">In Progress</option>
                    <option value="pending">Pending</option>
                  </select>
                  <br />
                  <button onClick={handleSave}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </div>
              ) : (
                <div>
                  <p className="task-description">{task.description}</p>
                  <p className="task-priority">Priority: {task.priority}</p>
                  <p className="task-due-date">Due Date: {task.dueDate}</p>
                  <p className="task-status">Status: {task.status}</p>
                </div>
              )}
              {/* <Link to={`/tasks/${task._id}` }>Details</Link> */}
            {/* <button onClick={() => handleEdit(task.id)}>Edit</button> */}
            <button className="edit-button"><Link to={`/tasks/${task._id}`} className="edit-link">Details</Link></button>
            <button className="edit-button" onClick={() => handleEdit(task.id)}>Mini Edit</button>
            </div>
            {/* <button className="edit-button" onClick={() => handleEdit(task.id)}>Edit</button> */}
            <button className="delete-button" onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
