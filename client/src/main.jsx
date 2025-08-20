// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// Import the Redux store we created
import { store } from './app/store.js';
// Import the Provider component from react-redux
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the entire App component with the Provider */}
    {/* This makes the Redux store available to all components */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
