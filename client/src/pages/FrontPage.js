import React, { Component } from "react";
import Navbar from "../components/navbar/navbar.js";

class FrontPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar activeItem={"home"}/>
        <h1>Front Page</h1>
      </div>
    );
  }
}

export default FrontPage;