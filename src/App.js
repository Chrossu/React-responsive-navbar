import React, { Fragment } from 'react';

import './App.css'

import Navbar from './components/navbar/Navbar.component';
import HomePage from './pages/homepage/Homepage.component';
import SideDraw from './components/navbar/side-draw/SideDraw.component';

function App() {
  return (
    <Fragment>
      <Navbar />
      <SideDraw />
      <HomePage />
    </Fragment>
  )
}

export default App;
