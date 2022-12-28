import React from 'react';
import ReactDOM from 'react-dom/client';

import "./global.css";
import { BrowserRouter } from 'react-router-dom'; // Coloca em volta do <App />
import Router from './Router';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    
  </React.StrictMode>
);



