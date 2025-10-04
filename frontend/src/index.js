import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: If you have a global CSS file
import App from './App'; // Make sure this path is correct

// Use the correct rendering method based on your React version
// For React 18+ (most modern projects):

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/* // For older React versions (pre-18):
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/