import React from 'react';
import './App.css';
import Heading from './Component/Heading/Heading';
import Navbar from './Component/Navbar/Navbar';
import Statistics from './Component/Statistics/Statistics';
import Vaccination from './Component/Vaccination/Vaccination';



function App() {
  return (
    <React.Fragment className = 'app'>
      <Navbar/>
      <Heading/> 
      <Statistics header = 'Statistika'/>
      <Vaccination header = 'Vaksinasiya mərkəzləri'/>

      
    </React.Fragment>
  );
}

export default App;
