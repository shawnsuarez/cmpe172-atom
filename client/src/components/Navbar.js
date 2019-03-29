import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

import { AuthConsumer } from "../authContext";
import Logout from './Logout';

class Navbar extends Component {

  render() {
    return (
      <div>
      <AuthConsumer>
        {({ user }) => (
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <Link class="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/teams">Teams</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/payroll">Payroll</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">About</Link>
              </li>
            </ul>
            <h3 style={{margin:"0 2em"}}>{user.role}</h3>
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit" style={{margin:"0 1em 0 0"}}>Search</button>
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
