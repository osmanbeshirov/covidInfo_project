import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar';
import Heading from './Component/Heading/Heading';
import Statistics from './Component/Statistics/Statistics';
import Vaccination from './Component/Vaccination/Vaccination';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);


