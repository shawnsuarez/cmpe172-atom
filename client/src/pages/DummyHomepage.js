import React from 'react';

class DummyHomepage extends React.Component{

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render(){
    const { isAuthenticated } = this.props.auth;

    let button;

    if(isAuthenticated()){
      button = <button onClick = {this.logout.bind(this)}>Logout</button>
    }
    else{
      button = <button onClick = {this.login.bind(this)}>Login</button>
    }

    return(
      <div>
        {button}
      </div>
    )
  }
}

export default DummyHomepage;
