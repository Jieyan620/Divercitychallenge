import React from 'react'
import './Register.css'
import {
  Link
} from 'react-router-dom'

const Register = () => {
  const divStyle = {
    backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159__340.jpg)',
  }
  return (
    <>
      <div className="registercard">
        <div style={divStyle} className="regibackground" />

        <div className="registerinput">
          <form action="action_page.php">
            <div className="container">
              <div className="regicontainer">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />
              </div>
              <label htmlFor="email"><b>Email</b></label>
              <input type="text" placeholder="Enter Email" name="email" id="email" required />

              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

              <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
              <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
              <hr className="regihr"/>

              <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
              <button type="submit" className="registerbtn">Register</button>
              <Link to={`/`}>
              <button type="button" className="regicancelbtn">Cancel</button>
              </Link>
            </div>

            <div className="container signin">
              <p>Already have an account? <a href="#">Sign in</a>.</p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register