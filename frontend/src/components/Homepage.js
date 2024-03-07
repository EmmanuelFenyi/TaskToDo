// import React from 'react';
// import { Link } from 'react-router-dom';
// // import './Homepage.css';

// function Homepage() {
//   return (
//     <div>
//       <h1>Welcome to TaskToDo App</h1>
//       <Link to="/login">Login</Link>
//       <Link to="/register">Register</Link>
//     </div>
//   );
// }

// export default Homepage;


import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to TaskToDo</h1>
      <Link to="/tasks">View Tasks</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default Homepage;