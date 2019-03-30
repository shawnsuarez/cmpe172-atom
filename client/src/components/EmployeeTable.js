import React from 'react';

import {AuthConsumer} from '../authContext';
import Can from './Can';
import employees from '../employees';

const EmployeeTable = () => (
  <AuthConsumer>
    {({user}) => (
      <div>
        <h2>Employees</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <Can
                role={user.role}
                perform="employee:edit"
                yes={() => (
                  <th scope="col">Actions</th>
                )}
              />
            </tr>
          </thead>
          <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id}>
              <th scope="row">{index + 1}</th>
              <td>{employee.title}</td>
              <td>
                <Can
                  role={user.role}
                  perform="employee:edit"
                  yes={() => (
                    <button className="btn btn-sm btn-outline-secondary" style={{margin:"0 1em 0 0"}}>
                      Edit
                    </button>
                  )}
                />
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
          ))}
          </tbody>
        </table>
      </div>
    )}
  </AuthConsumer>
)

export default EmployeeTable;
