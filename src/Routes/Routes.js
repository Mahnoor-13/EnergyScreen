
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import CompanyRegisteration from "../Components/CompanyRegisteration/CompanyRegisteration";
import MainDashboard from "../Components/MainDashboard/MainDashboard";
import LandingPage from "../Components/LandingPage/LandingPage";
import CompanySignin from "../Components/CompanySignin/CompanySignin";
import CompanySignupLocation from "../Components/CompanySignupLocation/CompanySignupLocation";
import SignupCompanySize from "../Components/SignupCompanySize/SignupCompanySize";
import SignupIndustry from "../Components/SignupIndustry/SignupIndustry";
import SignupOnlinePresence from "../Components/SignupOnlinePresence/SignupOnlinePresence";
import SignupUploadLogo from "../Components/SignupUploadLogo/SignupUploadLogo";
import { UserProvider } from "../Context/Context";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <LandingPage {...props} />} />
        <Route
          // exact
          path="/register"
          render={(props) => (
            <UserProvider {...props}/>
            //   {/* <CompanyRegisteration {...props} />
            // // </XyzProvider> */}
          )}
        />
        <Route
          // exact
          path="/signuplocation"
          render={(props) => <CompanySignupLocation {...props} />}
        />

        <Route
          exact
          path="/signupcompanysize"
          render={(props) => <SignupCompanySize {...props} />}
        />

        <Route
          exact
          path="/signupindustry"
          render={(props) => <SignupIndustry {...props} />}
        />

        <Route
          exact
          path="/signuponlinepresence"
          render={(props) => <SignupOnlinePresence {...props} />}
        />

        <Route
          exact
          path="/signupuploadlogo"
          render={(props) => <SignupUploadLogo {...props} />}
        />

        <Route
          exact
          path="/home"
          render={(props) => <MainDashboard {...props} />}
        />
        <Route
          exact
          path="/login"
          render={(props) => <CompanySignin {...props} />}
        />
      </Switch>
    </Router>
  );
}
