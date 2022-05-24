import React from 'react';
import './App.css';
import Heading from './Component/Heading/Heading';
import Navbar from './Component/Navbar/Navbar';
import Statistics from './Component/Statistics/Statistics';


function App() {
  return (
    <React.Fragment className = 'app'>
      <Navbar/>
      <Heading/>
      <Statistics/>

    </React.Fragment>
  );
}

export default App;
