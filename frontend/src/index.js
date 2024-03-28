import React, { StrictMode } from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';

// ReactDOM.render(
//   // <Router>
//     <App />,
//   // </Router>,
//   document.getElementById('root')
// );

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
  <App />
</StrictMode>
);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );