import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './routes/routes'
import './global/styles.css'
import './global/media.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);