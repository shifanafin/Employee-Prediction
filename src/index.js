import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Dashboard from './dashboard/DashboardMain/Dashboard';
import {BrowserRouter} from "react-router-dom"
// import Dashboard from './dashboard/DashboardMain/Dashboard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
   
    </BrowserRouter>
    {/* <App/> */}
  </React.StrictMode>
);

