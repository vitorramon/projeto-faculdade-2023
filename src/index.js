import React from 'react';
import ReactDOM from 'react-dom/client';

import "./global.css";
import { BrowserRouter } from 'react-router-dom'; // Coloca em volta do <App />
import { AuthProvider } from './context/Auth/index'
import Router from './Router';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Router />
       </AuthProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);



