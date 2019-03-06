import React, { Component } from "react";
import Navbar from "../components/navbar/navbar.js";

class TeamPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar activeItem={"teams"}/>
        <h1>Team Page</h1>
      </div>
    );
  }
}

export default TeamPage;