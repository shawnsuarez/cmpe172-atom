import React, { Component } from "react";
import Navbar from "../components/navbar/navbar.js";
import TeamTable from '../components/teamTable/TeamTable.js';


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
        <h1>Teams</h1>
        <TeamTable />
      </div>
    );
  }
}

export default TeamPage;
