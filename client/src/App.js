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
        <div className="nav">
          <Navbar />
        </div>
        <Switch>

          <Route exact path="/"  >
            <Redirect to="/job" />
          </Route>
          <Route exact path="/job"  >
            <div className="body">
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
                  <h3>welcome</h3>
                </div>
              </div>
            </div>
          </Route>

          <Route path="/job/:jobId" >
            <div className="body">
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
                  <Jobcard userState={userState} />
                </div>
              </div>
            </div>


          </Route>

          <Route path="/login">
            <div className="lore">
              <Login />
            </div>
          </Route>

          <Route path="/register">
            <div className="lore">
            <Register />
            </div>
          </Route>

        </Switch>
      </Router>
    </>
  )
}

export default App
