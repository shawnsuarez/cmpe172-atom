import React, { Component } from "react";
import Navbar from "../components/navbar/navbar.js";
import PayrollTable from '../components/payrollTable/PayrollTable.js';

import { AppContext } from "../app/context/context";

class PayrollPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { context } = this.props;

    return (
      <div>
        <Navbar activeItem={"payroll"}/>
        <h1>Payroll Page</h1>
        <PayrollTable />
      </div>
    );
  }
}

export default PayrollPage;
