import React, { Fragment } from 'react';

import './App.css'

import Navbar from './components/navbar/Navbar.component';
import HomePage from './pages/homepage/Homepage.component';

function App() {
  return (
    <Fragment>
      <Navbar />
      <HomePage />
    </Fragment>
  )
}

export default App;
