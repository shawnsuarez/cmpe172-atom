import React from 'react';
import {Redirect} from 'react-router-dom';

import ParticlesComponent from '../components/ParticlesComponent';
import { AuthConsumer } from "../authContext";
import Login from "../components/Login";

const HomePage = () => (
  <AuthConsumer style={{height:"100%", margin:0, padding:0}}>
    {({ authenticated }) =>
      authenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <div style={LandingPageStyle}>
          <ParticlesComponent/>
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
  textAlign: "center",
}


export default HomePage;
