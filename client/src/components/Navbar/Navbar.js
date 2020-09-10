import React from 'react'
import './Navbar.css'
import {
  Link
} from 'react-router-dom'

const Navbar = () => {
  return (
    <>

      <div className="nav">
        <ul className="nanUl">
          <li className="logo">Divercity</li>
          <div className="pages">
            <Link to={`/login`}>
              <li><h4 className="linkpage">Login</h4></li>
            </Link>
            <li><h4 className="linkpage">/</h4></li>
            <Link to={`/register`}>
              <li><h4 className="linkpage">Register</h4></li>
            </Link>
          </div>

        </ul>
      </div>

    </>
  )
}

export default Navbar