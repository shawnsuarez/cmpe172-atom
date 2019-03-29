import React from 'react';
import {Redirect} from 'react-router-dom';

import Navbar from '../components/Navbar';
import {AuthConsumer} from '../authContext';
import Can from '../components/Can';

const AboutPage = () => {
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
                <h1>About</h1>
              </div>
            )}
            no={() => <Redirect to="/" />}
          />
        )}
      </AuthConsumer>
    </div>
  );
}

export default AboutPage;
