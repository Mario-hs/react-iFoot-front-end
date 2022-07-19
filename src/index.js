import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './screen/Home';
import { Layout } from './screen/Layout';
import './global/styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Home /> */}
    <Layout />
  </React.StrictMode>
);