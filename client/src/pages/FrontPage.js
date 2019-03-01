import React, { Component } from "react";
import Navbar from "../components/navbar/navbar.js";

import { AppContext } from "../app/context/context";

class FrontPage extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    const { context } = this.props;

    return (
      <div>
        <Navbar activeItem={"home"}/>
        <h1>Front Page</h1>
      </div>
    );
  }
}

export default FrontPage;
