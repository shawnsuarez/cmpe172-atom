import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import HomePage from "./pages/home";
import DashboardPage from "./pages/dashboard";
import Departments from './pages/departmentPage';
import About from './pages/about';
import CallbackPage from "./pages/callback";
import Auth from "./components/Auth";
import TestEmployeePage from "./pages/testemployees";
import TestPayrollPage from "./pages/testpayroll";

function App() {
  return (
    <div>
      <Auth>
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/dashboard" component={DashboardPage}/>
              <Route path="/departments/:dept" component={Departments}/>
              <Route path="/about" component={About}/>
              <Route path="/callback" component={CallbackPage}/>
              <Route path="/employeestest" component={TestEmployeePage}/>
              <Route path="/payrolltest/:page" component={TestPayrollPage}/>
            </Switch>
          </Router>
        </div>
      </Auth>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
