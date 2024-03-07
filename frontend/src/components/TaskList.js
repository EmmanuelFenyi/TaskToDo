// import React, { useState, useEffect } from 'react';
// import './TaskList.css';

// function TaskList() {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//       const response = await fetch('/api/tasks');
//       const data = await response.json();
//       setTasks(data);
//     } catch (error) {
//       console.error('Error fetching tasks:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Task List</h2>
//       <ul>
//         {tasks.map(task => (
//           <li key={task._id}>
//             <span>{task.title}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TaskList;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/tasks');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  return (
    <div>
      <h2>Task List</h2>
      <Link to="/tasks/add">Add New Task</Link>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            {task.title}
            <Link to={`/tasks/${task._id}`}>Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;