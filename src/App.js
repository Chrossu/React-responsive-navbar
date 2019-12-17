import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css'

// Components
import Navbar from './components/navbar/Navbar.component';
import SideDraw from './components/navbar/side-draw/SideDraw.component';
import Backdrop from './components/navbar/backdrop/Backdrop.component';

// Pages
import HomePage from './pages/homepage/Homepage.component';
import Contact from './pages/contact/Contact.component';
import About from './pages/about/About.component';

function App() {
  return (
    <Fragment>
      <Navbar />
      <SideDraw />
      <Backdrop />
      {/* React Router DOM Routes */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Fragment>
  )
}

export default App;
