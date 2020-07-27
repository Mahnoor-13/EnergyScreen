import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CompanyRegisteration from "../Components/CompanyRegisteration/CompanyRegisteration";
import MainDashboard from "../Components/MainDashboard/MainDashboard";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <CompanyRegisteration {...props} />}
        />
        <Route
          exact
          path="/home"
          render={(props) => <MainDashboard {...props} />}
        />
      </Switch>
    </Router>
  );
}
