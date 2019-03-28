import React from "react";
import { Redirect } from "react-router-dom";

import { AuthConsumer } from "../authContext";
import Navbar from '../components/Navbar';
import Can from "../components/Can";
import Logout from "../components/Logout";
import EmployeeTable from '../components/EmployeeTable';

const DashboardPage = () => (
  <div>
    <AuthConsumer>
      {({ user }) => (
        <Can
          role={user.role}
          perform="dashboard-page:visit"
          yes={() => (
            <div>
              <Navbar />
              <h1>Role: {user.role}</h1>
            </div>
          )}
          no={() => (
            <Redirect to="/" />
          )}
        />
      )}
    </AuthConsumer>

  </div>
);

export default DashboardPage;
