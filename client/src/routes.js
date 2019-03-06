import React from 'react';
import { Route, Router } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FrontPage from './pages/FrontPage';
import TeamPage from './pages/TeamPage';
import PayrollPage from './pages/PayrollPage';
import Auth from './Auth/Auth';
import Callback from './Callback/Callback';
import history from './history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/" exact render={(props) => <LandingPage auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <FrontPage auth={auth} {...props} />} />
          <Route path="/teams" render={(props) => <TeamPage auth={auth} {...props} />} />
          <Route path="/payroll" render={(props) => <PayrollPage auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
        </div>
      </Router>
  );
}
