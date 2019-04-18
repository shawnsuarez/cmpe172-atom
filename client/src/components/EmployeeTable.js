import React from 'react';

import {AuthConsumer} from '../authContext';
import Can from './Can';
import Popup from './Popup';
import EmployeeEditButton from './EmployeeEditButton';
import EmployeeDeleteButton from './EmployeeDeleteButton';
import employees from '../employees';

export default class EmployeeTable extends React.Component {
  constructor(){
    super();
    this.state = {
      showAddModal: false,
    }
    this.openAddEmployeeModal = this.openAddEmployeeModal.bind(this);
    this.closeAddEmployeeModal = this.closeAddEmployeeModal.bind(this);
  }

  openAddEmployeeModal(){
    this.setState({
      showAddModal: true,
    });
  }

  closeAddEmployeeModal(){
    this.setState({
      showAddModal: false,
    })
  }

  render(){
    var addEmployeeForm = (
      <form style={{fontSize: '16px', fontWeight: '400'}}>
          <div className="form-group" style={{margin:"1em 0"}}>
            First name:
            <input type="text" name="firstName" className="form-control" style={{margin: "0 0"}}/>
          </div>

          <div className="form-group" style={{margin:"1em 0"}}>
            Last name:
            <input type="text" name="lastName" className="form-control" style={{margin: "0 0"}}/>
          </div>

          <div className="form-group" style={{margin:"1em 0"}}>
            Email:
            <input type="text" name="email" className="form-control" style={{margin: "0 0"}}/>
          </div>

          <div className="form-group" style={{margin:"1em 0"}}>
            Hire Date:
            <input type="text" name="hireDate" className="form-control" style={{margin: "0 0"}}/>
          </div>

          <div className="form-group" style={{margin:"1em 0"}}>
            Salary:
            <input type="text" name="salary" className="form-control" style={{margin: "0 0"}}/>
          </div>

          <div className="form-group" style={{margin:"1em 0"}}>
            From:
            <input type="text" name="from" className="form-control" style={{margin: "0 0"}}/>
          </div>

          <div className="form-group" style={{margin:"1em 0"}}>
            To:
            <input type="text" name="to" className="form-control" style={{margin: "0 0"}}/>
          </div>

          <button className="btn btn-success" style={{bottom:"0", right:"0", position:"absolute", margin:"1em"}}>Submit</button>
       </form>
     );

    return(
      <AuthConsumer>
        {({user}) => (
          <div>
            <div>
              <h2>
                Employees
                <Can
                  role={user.role}
                  perform="employee:delete"
                  yes={() => (
                    <button className="btn btn-light" style={{float:"right", border:"2px solid #333"}} onClick={this.openAddEmployeeModal}>
                      + Add Employee
                    </button>
                  )}
                />
                {
                  this.state.showAddModal ?
                  <Popup
                    title="Add New Employee"
                    text={addEmployeeForm}
                    close={this.closeAddEmployeeModal}
                  />
                  :
                  null
                }
              </h2>

            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">email</th>
                  <Can
                    role={user.role}
                    perform="employee:edit"
                    yes={() => (
                      <th scope="col">Hire Date</th>
                    )}
                  />
                  <Can
                    role={user.role}
                    perform="employee:edit"
                    yes={() => (
                      <th scope="col">Salary</th>
                    )}
                  />
                  <Can
                    role={user.role}
                    perform="employee:edit"
                    yes={() => (
                      <th scope="col">From</th>
                    )}
                  />
                  <Can
                    role={user.role}
                    perform="employee:edit"
                    yes={() => (
                      <th scope="col">To</th>
                    )}
                  />

                  <Can
                    role={user.role}
                    perform="employee:edit"
                    yes={() => (
                      <th scope="col">Edit</th>
                    )}
                  />
                  <Can
                    role={user.role}
                    perform="employee:delete"
                    yes={() => (
                      <th scope="col">Delete</th>
                    )}
                  />
                </tr>
              </thead>
                <tbody>
                  {
                    employees.map((employee, index) => (
                      <tr key={employee.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{employee.firstName +" "+ employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                          <Can
                            role={user.role}
                            perform="employee:edit"
                            yes={() => (
                              employee.hireDate
                            )}
                          />
                        </td>
                        <td>
                          <Can
                            role={user.role}
                            perform="employee:edit"
                            yes={() => (
                              employee.salary
                            )}
                          />
                        </td>
                        <td>
                          <Can
                            role={user.role}
                            perform="employee:edit"
                            yes={() => (
                              employee.from
                            )}
                          />
                        </td>
                        <td>
                          <Can
                            role={user.role}
                            perform="employee:edit"
                            yes={() => (
                              employee.to
                            )}
                          />
                        </td>
                        <td>
                          <Can
                            role={user.role}
                            perform="employee:edit"
                            yes={() => (
                              <EmployeeEditButton emp={employee}/>
                            )}
                          />
                        </td>
                        <td>
                          <Can
                            role={user.role}
                            perform="employee:delete"
                            yes={() => (
                              <EmployeeDeleteButton emp={employee}/>
                            )}
                          />
                        </td>
                      </tr>
                    ))
                  }
              </tbody>

            </table>
          </div>
        )}
      </AuthConsumer>
    );
  }

}
