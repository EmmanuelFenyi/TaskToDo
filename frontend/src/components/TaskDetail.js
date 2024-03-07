// import React, { useState, useEffect } from 'react';
// import './TaskDetail.css';

// function TaskDetail({ match }) {
//   const [task, setTask] = useState({});

//   useEffect(() => {
//     fetchTask();
//   }, []);

//   const fetchTask = async () => {
//     try {
//       const response = await fetch(`/api/tasks/${match.params.id}`);
//       const data = await response.json();
//       setTask(data);
//     } catch (error) {
//       console.error('Error fetching task:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Task Detail</h2>
//       <p>Title: {task.title}</p>
//       <p>Description: {task.description}</p>
//     </div>
//   );
// }

// export default TaskDetail;



import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './TaskDetail.css';

const TaskDetail = () => {
  const { id } = useParams();
//   const history = useHistory();
  const [task, setTask] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = async () => {
    try {
      const response = await fetch(`/api/tasks/${id}`);
      const data = await response.json();
      setTask(data);
      setTitle(data.title);
      setDescription(data.description);
      setDueDate(data.dueDate);
      setPriority(data.priority);
      setCompleted(data.completed);
    } catch (error) {
      console.error('Error fetching task:', error);
    }
  };

  const handleEditTask = async () => {
    try {
      const response = await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, dueDate, priority, completed }),
      });
      if (response.ok) {
        // Redirect or perform necessary actions upon successful task update
        console.log('Task updated successfully');
      } else {
        console.error('Task update failed');
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDeleteTask = async () => {
    try {
      const response = await fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Redirect or perform necessary actions upon successful task deletion
        console.log('Task deleted successfully');
      } else {
        console.error('Task deletion failed');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div>
      <h2>Task Detail</h2>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <input
          type="text"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        <button onClick={handleEditTask}>Save</button>
        <button onClick={handleDeleteTask}>Delete</button>
      </div>
    </div>
  );
}

export default TaskDetail;