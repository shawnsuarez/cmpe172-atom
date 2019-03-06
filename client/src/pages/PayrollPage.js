import React, { Component } from "react";
import Navbar from "../components/navbar/navbar.js";
import PayrollTable from '../components/payrollTable/PayrollTable.js';

class PayrollPage extends Component {

  render() {
    //const { context } = this.props;

    return (
      <div>
        <Navbar activeItem={"payroll"} auth={this.auth} {...this.props}/>
        <h1>Payroll Page</h1>
        <PayrollTable />
      </div>
    );
  }
}

export default PayrollPage;
