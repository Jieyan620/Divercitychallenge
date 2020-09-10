import './App.css'
// import axios from 'axios'
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


const App = () => {

  const [userState, setUserState] = useState({
    jobinfo: [],


  })
  useEffect(() => {
    fetch('https://divercity-test.herokuapp.com/jobs')
      .then(res => res.json())
      .then(Info => {
        var jobinfo
        jobinfo = Info.jobs
        setUserState({ jobinfo })
        // console.log(jobinfo)
      })
  }, [])




  return (
    <>
      <Router>
        <Navbar />
        <Switch>

          <div className="body">
            <Route exact path="/">
              <Searchcard />
              <div className="mainWrapper">

                <div className="sidebar">
                  <div className="sideTitle">
                    <h2>Jobs For You :</h2>
                  </div>
                  <ul>
                    <Sidecard userState={userState} />
                  </ul>
                </div>
                <div className="maincard">
                  <Route path="/job/:jobId" >
                    <Jobcard userState={userState} />
                  </Route>
                </div>

              </div>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </div>

        </Switch>
      </Router>
    </>
  )
}

export default App
