import React, { Component } from "react";
import Navbar from "../components/navbar/navbar.js";


import { AppContext } from "../app/context/context";

class TeamPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { context } = this.props;

    return (
      <div>
        <Navbar activeItem={"teams"}/>
        <h1>Team Page</h1>
      </div>
    );
  }
}

export default TeamPage;