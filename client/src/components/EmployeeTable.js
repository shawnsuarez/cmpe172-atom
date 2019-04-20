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
      <form style={{fontSize: '16px', fontWeight: '400', padding:"1em", margin:"0 0 0 -1.5em"}}>
        <div class="form-row">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
        </div>
        <div class="form-group" style={{margin:"-14px 0 0 0"}}>
          <input type="email" class="form-control" id="email" placeholder="email"/>
        </div>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label style={{margin:"0 0 0 18px"}}>Hire Date:</label>
            <input type="date" class="form-control" name="hireDare" />
          </div>
        </div>
        <div class="input-group mb-3" style={{margin:"0 0 0 14px"}}>
          <div class="input-group-prepend">
            <span class="input-group-text">$</span>
          </div>
          <input type="number" class="form-control" min="1" step="100" style={{margin:"0 0 0 0"}} placeholder="Salary"/>
        </div>
        <div class="form-row" >
          <div class="form-group col-md-4">
            <label style={{margin:"0 0 0 18px"}}>From:</label>
            <input type="date" class="form-control" name="from"/>
          </div>
          <div class="form-group col-md-4">
            <label style={{margin:"0 0 0 16px"}}>To:</label>
            <input type="date" class="form-control" name="to"/>
          </div>
        </div>
        <div class="form-row" >
          <div class="form-group col-md-5">
            <label style={{margin:"0 0 0 18px"}}>Employee Title:</label>
            <input type="text" class="form-control" name="empTitle"/>
          </div>
          <div class="form-group col-md-4">
            <label style={{margin:"0 0 0 16px"}}>Employee ID:</label>
            <input type="number" class="form-control" name="empID"/>
          </div>
          <div class="form-group col-md-3">
            <label style={{margin:"0 0 0 16px"}}>Dept #:</label>
            <select class="form-control" style={{margin:"1em 0 0 1em"}}>
              <option>d001</option>
              <option>d002</option>
              <option>d003</option>
              <option>d004</option>
              <option>d005</option>
              <option>d006</option>
              <option>d007</option>
              <option>d008</option>
              <option>d009</option>
            </select>
          </div>
        </div>
        <button className="btn btn-success" style={{bottom:"0", right:"0", position:"absolute", margin:"1em"}}>Create</button>
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
