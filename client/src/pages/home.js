import React from 'react';
import {Redirect} from 'react-router-dom';

import { AuthConsumer } from "../authContext";
import Login from "../components/Login";

const HomePage = () => (
  <AuthConsumer>
    {({ authenticated }) =>
      authenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <div style={LandingPageStyle}>
          <h1 style={{margin:'1em'}}>Team Atom</h1>
          <img src="https://cdn.freebiesupply.com/logos/large/2x/atom-4-logo-png-transparent.png" alt="Atom" width="150" style={{margin:'.5em'}}/>
          <h1 style={{margin:'1em'}}>Please Login or Signup to view the data.</h1>
          <Login />
        </div>
      )
    }
  </AuthConsumer>
);

const LandingPageStyle = {
  margin: "2em",
  textAlign: "center",
}


export default HomePage;
