import React, { Component } from "react";
import { Link } from "react-router-dom";

import { AuthConsumer } from "../authContext";
import Logout from './Logout';

class Navbar extends Component {

  render() {
    return (
      <div>
      <AuthConsumer>
        {({ user }) => (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/departments">Departments</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
            <h3 style={{margin:"0 2em"}}>{user.role}</h3>
            <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button type="button" className="btn btn-outline-success" style={{margin:"0 1em 0 0"}}>Search</button>
              <Logout/>
            </form>
          </nav>
        )}
      </AuthConsumer>
      </div>

    )
  }
}

export default Navbar;
