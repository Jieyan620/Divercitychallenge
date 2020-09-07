import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>

      <div className="nav">
        <ul>
          <li className="logo">Divercity</li>
          <div className="pages">
            <li><h4>Login</h4></li>
            <li><h4>/</h4></li>
            <li><h4>Register</h4></li>
          </div>

        </ul>
      </div>
 
    </>
  )
}

export default Navbar