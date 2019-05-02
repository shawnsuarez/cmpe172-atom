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
              {
                window.location.href.indexOf("dashboard") > -1 ?
                <li className="nav-item active">
                  <Link className="nav-link" to="/dashboard" style={{background:"#343a40",color:"white",borderRadius:"5px"}}>Dashboard</Link>
                </li>
                :
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
              }
              {
                window.location.href.indexOf("departments") > -1 ?
                <li className="nav-item active">
                  <Link className="nav-link" to="/departments/marketing" style={{background:"#343a40",color:"white",borderRadius:"5px"}}>Departments</Link>
                </li>
                :
                <li className="nav-item">
                  <Link className="nav-link" to="/departments/marketing">Departments</Link>
                </li>
              }
              {
                window.location.href.indexOf("about") > -1 ?
                <li className="nav-item active">
                  <Link className="nav-link" to="/about" style={{background:"#343a40",color:"white",borderRadius:"5px"}}>About</Link>
                </li>
                :
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
              }
            </ul>
            <form className="form-inline">
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
