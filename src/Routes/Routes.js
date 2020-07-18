import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CompanyRegisteration from "../Components/CompanyRegisteration";
export default function App() {
  // <Route exact path="/app" render={props => <App {...props} />} />
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <CompanyRegisteration {...props} />}
        />
      </Switch>
    </Router>
  );
}
