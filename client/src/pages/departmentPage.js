import React from 'react';
import {Redirect} from 'react-router-dom';

import Navbar from '../components/Navbar';
import {AuthConsumer} from '../authContext';
import Can from '../components/Can';

const DepartmentPage = () => {
  return(
    <div>
      <AuthConsumer>
        {({ user }) => (
          <Can
            role={user.role}
            perform="dashboard-page:visit"
            yes={() => (
              <div>
                <Navbar user={user}/>
                <div style={{padding:"1em"}}>
                  <h1>Departments</h1>
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

export default DepartmentPage;
