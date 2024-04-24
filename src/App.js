import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Business from './components/Business';
import Entertainment from './components/Entertainment';
import Health from './components/Health';
import Science from './components/Science';
import Technology from './components/Technology';
import Sports from './components/Sports';

import {
  BrowserRouter as Router,Routes,
  Route,
  } from "react-router-dom";

export default class App extends Component {
  
  render() {
    return (
      <div>
      <Router>
          <Navbar/>

          <Routes>
            <Route path='' element={<News pageSize={20} country="in" category="general"/>}/>
            <Route path='/business' element={<Business />}/>
            <Route path='/entertainment' element={<Entertainment />}/>
            <Route path='/health' element={<Health />}/>
            <Route path='/science' element={<Science />}/>
            <Route path='/technology' element={<Technology />}/>
            <Route path='/sports' element={<Sports />}/>
          </Routes>

          
         
        </Router>



      </div>
    )
  }
}



