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
    this.openEditModal = this.openEditModal.bind(this);
    this.closeEditModal = this.closeEditModal.bind(this);
  }

  openEditModal(){
    this.setState({
      showEditModal: true,
    });
  }

  closeEditModal(){
    this.setState({
      showEditModal: false,
    })
  }

  render(){
    return(
      <AuthConsumer>
        {({user}) => (
          <div>
            <h2>Employees</h2>
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
