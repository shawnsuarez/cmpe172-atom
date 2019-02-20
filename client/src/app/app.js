import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { MyProvider, AppContext } from "./context/context";
import "./style/app.css";

import FrontPage from "../pages/FrontPage";
import TeamPage from "../pages/TeamPage";
import PayrollPage from "../pages/PayrollPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <MyProvider>
            <AppContext.Consumer>
              {context => {
                return (
                  <React.Fragment>
                    <Route
                      exact
                      path="/"
                      render={props => <FrontPage {...props} {...context} />}
                    />
                    <Route
                      exact
                      path="/teams"
                      render={props => <TeamPage {...props} {...context} />}
                    />
                    <Route
                      exact
                      path="/payroll"
                      render={props => <PayrollPage {...props} {...context} />}
                    />
                  </React.Fragment>
                );
              }}
            </AppContext.Consumer>
          </MyProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
