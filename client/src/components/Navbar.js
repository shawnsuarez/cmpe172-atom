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
                <Link class="nav-link" to="/dashboard">Dashboard<span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/departments">Departments</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">About</Link>
              </li>
            </ul>
            <h3 style={{margin:"0 2em"}}>{user.role}</h3>
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button type="button" class="btn btn-outline-success" style={{margin:"0 1em 0 0"}}>Search</button>
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
