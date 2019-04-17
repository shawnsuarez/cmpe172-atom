import React from 'react';

import {AuthConsumer} from '../authContext';
import Can from './Can';
import Popup from './Popup';
import EmployeeEditButton from './EmployeeEditButton';
import employees from '../employees';

export default class EmployeeTable extends React.Component {
  constructor(){
    super();
    this.state = {
      showEditModal: false,
    }
    this.openAddEmployeeModal = this.openAddEmployeeModal.bind(this);
    this.closeAddEmployeeModal = this.closeAddEmployeeModal.bind(this);
  }

  openAddEmployeeModal(){
    this.setState({
      showEditModal: true,
    });
  }

  closeAddEmployeeModal(){
    this.setState({
      showEditModal: false,
    })
  }

  render(){
    return(
      <AuthConsumer>
        {({user}) => (
          <div>
            <div>
              <h2>
                Employees
                <button className="btn btn-light" style={{float:"right", border:"2px solid #333"}}>
                  + Add Employee
                </button>
              </h2>

            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">email</th>
                  <th scope="col">Hire Date</th>
                  <th scope="col">Salary</th>
                  <th scope="col">To</th>
                  <th scope="col">From</th>
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
                        <td>{employee.hireDate}</td>
                        <td>{employee.salary}</td>
                        <td>{employee.to}</td>
                        <td>{employee.from}</td>
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
                              <button className="btn btn-sm btn-danger">
                                Delete
                              </button>
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
