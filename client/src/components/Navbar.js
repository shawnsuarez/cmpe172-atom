import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { AuthConsumer } from "../authContext";
import Logout from './Logout';

class Navbar extends Component {
  state = {
    activeItem: this.props.activeItem,
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Dashboard<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Teams</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Payroll</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-danger my-2 my-sm-0" type="submit"><Logout/></button>
          </form>
        </nav>
      </div>
    )
  }
}

export default Navbar;
