import React, { Component } from "react";
import Navbar from "../components/navbar/navbar.js";
import TeamTable from '../components/teamTable/TeamTable.js';

class TeamPage extends Component {

  render() {
    //const { context } = this.props;

    return (
      <div>
        <Navbar activeItem={"teams"} auth={this.auth} {...this.props}/>
        <h1>Teams</h1>
        <TeamTable />
      </div>
    );
  }
}

export default TeamPage;
