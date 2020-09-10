import React from 'react'
import icon from './divercity.png'
import './Login.css'
import {
  Link
} from 'react-router-dom'

const Login = () => {
  const divStyle = {
    backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159__340.jpg)',
  }
  return (
    <>
      <div className="logincard">

        <div style={divStyle} className="logbackground" />

        <div className="inputcard">
          <form action="action_page.php" method="post">
            <div className="logcontainer">
              <h1>Login</h1>
              <p>Please fill in this form to login your account.</p>
              <hr className="loginhr" />
            </div>

            <div className="container">
              <label htmlFor="uname"><b>Username</b></label>
              <div>
                <input type="text" placeholder="Enter Username" name="uname" required />
              </div>
              <label htmlFor="psw"><b>Password</b></label>
              <div>
                <input type="password" placeholder="Enter Password" name="psw" required />
              </div>
              <button type="submit">Login</button>
              <label>
                <div>
                  <input type="checkbox" name="remember" /> Remember me
    </div>
              </label>
            </div>

            <div className="container" >
              <Link to={`/`}>
                <button type="button" className="cancelbtn">Cancel</button>
              </Link>
              <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login