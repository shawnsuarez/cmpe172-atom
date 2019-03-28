import React from "react";

import { AuthConsumer } from "../authContext";

const Logout = () => (
  <AuthConsumer>
    {({ logout }) => (
        <a onClick={logout}>Logout</a>
    )}
  </AuthConsumer>
);

export default Logout;
