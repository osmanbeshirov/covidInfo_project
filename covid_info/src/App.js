import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './Component/Footer/Footer';
import Heading from './Component/Heading/Heading';
import Infectioned from './Component/Infectioned/Infectioned';
import Infos from './Component/Infos/Infos';
import Main from './Component/Main/Main';
import Navbar from './Component/Navbar/Navbar';
import Content from './Component/News/Content/Content';
import News from './Component/News/News';
import Statistics from './Component/Statistics/Statistics';
import Vaccination from './Component/Vaccination/Vaccination';



function App() {
  return (
    <React.Fragment className='app'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Main />}> </Route>
        <Route path='/main_page' element={<Main />}> </Route>
        <Route path='/statistics/*' element={<Statistics header="Statistika" />}></Route>
        <Route path='/vaccine_stations' element={<Vaccination header="Vaksinasiya mərkəzləri" />}></Route>
        <Route path='/statistics/infected' element={<Infectioned header='Yeni yoluxanlar' />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path="/news/minister/id='1'" element={<Content />}></Route>
        <Route path='/infos' element={<Infos />}></Route>
      </Routes>

      <Footer />




      {/* <Statistics path = '/statistics' header='Statistika' /> 
      <Vaccination path = '' header='Vaksinasiya mərkəzləri' /> */}





    </React.Fragment>
  );
}

export default App;
