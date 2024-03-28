import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Auth.css'; // Import shared authentication styles
import Navigation from './Navigation';

const Register = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    // open: false,
    // error: ''
  })


  // approach 1 - Uses a single generic event handler function that can handle multiple input fields dynamically.
  // const handleChange = (name) => event => {
  //   setValues({ ...values, [name]: event.target.value })
  // }


  // approach 2 -
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const user = {
      username: values.username || undefined,
      email: values.email || undefined,
      password: values.password || undefined
    }

    try {
      let response = await fetch("http://localhost:5000/api/auth/register", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      await response.json()
      if (response.ok){
        return navigate("/login", {replace: true})
      }
    } catch(err) {
      console.log(err)
    }
  }


  return (
    <div>
      <Navigation link="/login" caption="Login" />
      <div className="auth-container">
        <h2>Register for TaskToDo</h2>
        <form onSubmit={handleSubmit}>
          {/* approach 1 - */}
          {/* <input type="text" placeholder="Username" name="username" value={values.username} onChange={handleChange('username')}/>
          <input type="email" placeholder="Email" name="email" value={values.email} onChange={handleChange('email')}/>
          <input type="password" placeholder="Password" name="password" value={values.password} onChange={handleChange('password')}/> */}
          {/* <input type="password" placeholder="Confirm Password" value={values.confirm_password} onChange={handleChange('confirm_password')}/> */}
          
          {/* approach 2 - */}
          <input type="text" placeholder="Username" name="username" value={values.username} onChange={handleChange}/>
          <input type="email" placeholder="Email" name="email" value={values.email} onChange={handleChange}/>
          <input type="password" placeholder="Password" name="password" value={values.password} onChange={handleChange}/>
          {/* <input type="password" placeholder="Confirm Password" name="confirm_password" value={values.confirm_password} onChange={handleChange}/> */}
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;






// import React, { useState } from 'react';
// import { Redirect, Navigate } from 'react-router-dom';
// import './Register.css';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://127.0.0.1:5000/api/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, email, password }),
//       });
//       if (response.ok) {
//         // Redirect or perform necessary actions upon successful registration
//         console.log('Registration successful');
//         // return <Redirect to="/login"/>;
//         return <Navigate to="/login" replace/>;
//       } else {
//         console.error('Registration failed');
//       }
//     } catch (error) {
//       console.error('Error registering:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Register;