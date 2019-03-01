import React from "react";
import ReactDOM from "react-dom";
import App from "./app/app";
//import DummyHomepage from './pages/DummyHomepage';
import "semantic-ui-css/semantic.min.css";
import {makeMainRoutes} from './routes';

const routes = makeMainRoutes();

ReactDOM.render(routes, document.getElementById("root"));
