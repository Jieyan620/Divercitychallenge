import './App.css'
import React, { useState, useEffect } from 'react'
import Login from './components/Login/Login.js'
import Navbar from './components/Navbar/Navbar.js'
import Jobcard from './components/Jobcard/Jobcard.js'
import Register from './components/Register/Register.js'
import Sidecard from './components/Sidecard/Sidecard.js'
import Searchcard from './components/Searchcard/Searchcard.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

useEffect(() => {
  

  
}, [])



const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <Searchcard/>
        <Sidecard/>
        <Jobcard />
        <Login />
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <div>
        <Register />
        </div>
        <Switch>
          
        </Switch>
      </Router>
    </>
  )
}

export default App
