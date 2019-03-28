import React from 'react';

import {AuthConsumer} from '../authContext';
import Can from './Can';

const EmployeeTable = () => (
  <AuthConsumer>
    {({user}) => (
      <div>
        <h2>Employees</h2>
        <table className="employeeTable">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
        </table>
      </div>
    )}
  </AuthConsumer>
)

export default EmployeeTable;
