import React from 'react';
import FrontPage from './FrontPage';

class LandingPage extends React.Component{

  login() {
    this.props.auth.login();
  }

  render(){
    const { isAuthenticated } = this.props.auth;

    if(isAuthenticated()){
      return(
        <FrontPage/>
      );
    }
    else{
      return(
        <div style={LandingPageStyle}>
          <h1>Team Atom</h1>
          <img src="https://cdn.freebiesupply.com/logos/large/2x/atom-4-logo-png-transparent.png" alt="Atom" width="150"/>
          <h1>Please Login or Signup to view the data.</h1>
          <button onClick = {this.login.bind(this)}>Login / Signup</button>
        </div>
      );
    }
  }
}

const LandingPageStyle = {
  margin: "2em",
  textAlign: "center",
}

export default LandingPage;
