import React from 'react';
import {Redirect} from 'react-router-dom';

import Navbar from '../components/Navbar';
import {AuthConsumer} from '../authContext';
import Can from '../components/Can';
import EmployeeTable from '../components/EmployeeTable';

class DepartmentPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentDept: this.props.match.params.dept.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')
    }
  }

  render(){
    return(
      <div>
        <AuthConsumer>
          {({ user }) => (
            <Can
              role={user.role}
              perform="dashboard-page:visit"
              yes={() => (
                <div>
                  <Navbar/>
                  <div style={{padding:"1em"}}>
                    <div className="dropdown">
                      <h2 id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {this.state.currentDept + " ↓"}
                      </h2>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li>
                          {
                            this.state.currentDept === "Marketing" ?
                            <a className="dropdown-item active" href="/departments/marketing">Marketing</a>
                            :
                            <a className="dropdown-item" href="/departments/marketing" onClick={() => {
                              this.setState({
                                currentDept:"Marketing"
                              })
                            }}>Marketing</a>
                          }
                        </li>
                        <li>
                          {
                            this.state.currentDept === "Finance" ?
                            <a className="dropdown-item active" href="/departments/finance">Finance</a>
                            :
                            <a className="dropdown-item" href="/departments/finance" onClick={() => {
                              this.setState({
                                currentDept:"Finance"
                              })
                            }}>Finance</a>
                          }
                        </li>
                        <li>
                          {
                            this.state.currentDept === "Human Resources" ?
                            <a className="dropdown-item active" href="/departments/human resources">Human Resources</a>
                            :
                            <a className="dropdown-item" href="/departments/human resources" onClick={() => {
                              this.setState({
                                currentDept:"Human Resources"
                              })
                            }}>Human Resources</a>
                          }
                        </li>
                        <li>
                          {
                            this.state.currentDept === "Production" ?
                            <a className="dropdown-item active" href="/departments/production">Production</a>
                            :
                            <a className="dropdown-item" href="/departments/production" onClick={() => {
                              this.setState({
                                currentDept:"Production"
                              })
                            }}>Production</a>
                          }
                        </li>
                        <li>
                          {
                            this.state.currentDept === "Development" ?
                            <a className="dropdown-item active" href="/departments/development">Development</a>
                            :
                            <a className="dropdown-item" href="/departments/development" onClick={() => {
                              this.setState({
                                currentDept:"Development"
                              })
                            }}>Development</a>
                          }
                        </li>
                        <li>
                          {
                            this.state.currentDept === "Quality Management" ?
                            <a className="dropdown-item active" href="/departments/quality management">Quality Management</a>
                            :
                            <a className="dropdown-item" href="/departments/quality management" onClick={() => {
                              this.setState({
                                currentDept:"Quality Management"
                              })
                            }}>Quality Management</a>
                          }
                        </li>
                        <li>
                          {
                            this.state.currentDept === "Sales" ?
                            <a className="dropdown-item active" href="/departments/sales">Sales</a>
                            :
                            <a className="dropdown-item" href="/departments/sales" onClick={() => {
                              this.setState({
                                currentDept:"Sales"
                              })
                            }}>Sales</a>
                          }
                        </li>
                        <li>
                          {
                            this.state.currentDept === "Research" ?
                            <a className="dropdown-item active" href="/departments/research">Research</a>
                            :
                            <a className="dropdown-item" href="/departments/research" onClick={() => {
                              this.setState({
                                currentDept:"Research"
                              })
                            }}>Research</a>
                          }
                        </li>
                        <li>
                          {
                            this.state.currentDept === "Customer Service" ?
                            <a className="dropdown-item active" href="/departments/customer service">Customer Service</a>
                            :
                            <a className="dropdown-item" href="/departments/customer service" onClick={() => {
                              this.setState({
                                currentDept:"Customer Service"
                              })
                            }}>Customer Service</a>
                          }
                        </li>
                      </ul>
                    </div>
                    <EmployeeTable isDepartment={true} currentDept={this.state.currentDept}/>
                  </div>
                </div>
              )}
              no={() => <Redirect to="/" />}
            />
          )}
        </AuthConsumer>
        </div>
    );
  }
}

export default DepartmentPage;
