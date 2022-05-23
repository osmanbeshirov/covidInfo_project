import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Statistics from './Component/Statistics/Statistics';


function App() {
  return (
    <React.Fragment className = 'app'>
      <Navbar/>
      <Statistics/>

    </React.Fragment>
  );
}

export default App;
