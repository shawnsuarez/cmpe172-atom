import React from "react";

import { AuthConsumer } from "../authContext";

const Logout = () => (
  <AuthConsumer>
    {({ logout }) => (
        <button className="btn btn-outline-danger my-2 my-sm-0" onClick={logout}>Logout</button>
    )}
  </AuthConsumer>
);

export default Logout;
