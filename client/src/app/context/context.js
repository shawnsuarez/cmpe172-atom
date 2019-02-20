import React, { Component } from "react";

const AppContext = React.createContext();

class MyProvider extends Component {
  state = {
    isLoggedIn: false,
  };

  updateIsLoggedIn(bool) {
    this.setState({ isLoggedIn: bool });
  }

  render() {
    return (
      <AppContext.Provider value={{ context: this.state }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { MyProvider, AppContext };