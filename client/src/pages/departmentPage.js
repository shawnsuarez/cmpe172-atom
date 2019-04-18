import React from 'react';
import {Redirect} from 'react-router-dom';

import Navbar from '../components/Navbar';
import {AuthConsumer} from '../authContext';
import Can from '../components/Can';

class DepartmentPage extends React.Component {
  constructor(){
    super();
    this.state = {
      currentDept: "Marketing"
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
                    <div class="dropdown">
                      <h2 id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {this.state.currentDept + " ↓"}
                      </h2>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li>
                          {
                            this.state.currentDept === "Marketing" ?
                            <a class="dropdown-item active" href="#">Marketing</a>
                            :
                            <a class="dropdown-item" href="#" onClick={() => {
                              this.setState({
                                currentDept:"Marketing"
                              })
                            }}>Marketing</a>
                          }
                        </li>
                        <li>
                          {
                            this.state.currentDept === "Accounting" ?
                            <a class="dropdown-item active" href="#">Accounting</a>
                            :
                            <a class="dropdown-item" href="#" onClick={() => {
                              this.setState({
                                currentDept:"Accounting"
                              })
                            }}>Accounting</a>
                          }
                        </li>
                        <li>
                          {
                            this.state.currentDept === "Research & Development" ?
                            <a class="dropdown-item active" href="#">Research & Development</a>
                            :
                            <a class="dropdown-item" href="#" onClick={() => {
                              this.setState({
                                currentDept:"Research & Development"
                              })
                            }}>Research & Development</a>
                          }
                        </li>
                        <li>
                          {
                            this.state.currentDept === "Human Resources" ?
                            <a class="dropdown-item active" href="#">Human Resources</a>
                            :
                            <a class="dropdown-item" href="#" onClick={() => {
                              this.setState({
                                currentDept:"Human Resources"
                              })
                            }}>Human Resources</a>
                          }
                        </li>
                        <li>
                          {
                            this.state.currentDept === "Purchasing" ?
                            <a class="dropdown-item active" href="#">Purchasing</a>
                            :
                            <a class="dropdown-item" href="#" onClick={() => {
                              this.setState({
                                currentDept:"Purchasing"
                              })
                            }}>Purchasing</a>
                          }
                        </li>
                      </ul>
                    </div>
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
