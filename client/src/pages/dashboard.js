import React from "react";
import { Redirect } from "react-router-dom";

import Navbar from '../components/Navbar';
import {AuthConsumer} from '../authContext';
import Can from '../components/Can';

const DashboardPage = () => (
  <AuthConsumer>
    {({ user }) => (
      <Can
        role={user.role}
        perform="dashboard-page:visit"
        yes={() => (
          <div>
            <Navbar user={user}/>
            <h1>Dashboard</h1>
          </div>
        )}
        no={() => <Redirect to="/" />}
      />
    )}
  </AuthConsumer>
);

export default DashboardPage;
