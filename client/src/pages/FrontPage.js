import React, { Component } from "react";
import Navbar from "../components/navbar/navbar.js";

class FrontPage extends Component {

  render() {

    return (
      <div>
        <Navbar auth={this.auth} {...this.props}/>
        <div style={BodyStyle}>
          <h1>Front Page</h1>
        </div>
      </div>
    );
  }
}

const BodyStyle = {
  margin: "2em",
}

export default FrontPage;
