import React, { Component } from "react";
import Navbar from "../components/navbar/navbar.js";

class PayrollPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar activeItem={"payroll"}/>
        <h1>Payroll Page</h1>
      </div>
    );
  }
}

export default PayrollPage;