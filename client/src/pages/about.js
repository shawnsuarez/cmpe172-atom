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
                <div style={{padding:"1em"}}>
                  <p>Made by <b>Sukhvir Singh</b>, <b>Shawn Darrell Suarez</b>, and <b>Xueli Yang</b></p>
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

export default AboutPage;
