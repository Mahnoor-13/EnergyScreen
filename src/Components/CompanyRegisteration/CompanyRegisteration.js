import React, { useEffect, useState } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const App = ({ ...props }) => {
  const [compnayName, setCompanyName] = useState("");
  const [companyEmailAddress, setCompanyEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signupLocaion = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      props.history.push("signuplocation", {
        details: {
          companyname: compnayName,
          companyEmailAddress: companyEmailAddress,
          password: password,
        },
      });
    } else {
      NotificationManager.error("Password not matched");
    }
  };
  return (
    // <UserProvider>
    <div
      className="App"
      // style={{ backgroundColor: "white" }}
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <section class="company_sign_area">
        <div class="sign_header">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="company_sign_logo">
                  <a href="#">
                    <img
                      src={require("../../assets/logo-white.png")}
                      alt="logo"
                    />
                  </a>
                </div>
              </div>
              <div class="col-md-8">
                <div class="company_sign_nav">
                  <ul>
                    <li>
                      {/* <p onClick={()=>increaseNumber()}>number:{number}</p> */}
                      <a href="#">Are you a freelancer?</a>
                    </li>
                    <li>
                      <button type="button" class="btn">
                        Freelancer Account
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sign_box" style={{ marginTop: "36px" }}>
          <div class="sign_box_content">
            <div class="sign_box_title">
              <h2 style={{ fontWeight: "600" }}>Create Account</h2>
            </div>
            <form onSubmit={(e) => signupLocaion(e)}>
              <div class="sign_form_area">
                <div class="form_controlls_area">
                  <div class="form-group has_left_icon">
                    <span class="input_left_icon">
                      <img
                        src={require("../../assets/icons/company.svg")}
                        alt="icon"
                      />
                    </span>
                    <input
                      required
                      type="text"
                      class="form-control"
                      placeholder="Company Name"
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                  <div class="form-group has_left_icon">
                    <span class="input_left_icon">
                      <img
                        src={require("../../assets/icons/id.svg")}
                        alt="icon"
                      />
                    </span>
                    <input
                      required
                      type="email"
                      class="form-control"
                      placeholder="Email Address"
                      onChange={(e) => setCompanyEmailAddress(e.target.value)}
                    />
                  </div>
                  <div class="form-group has_left_icon">
                    <span class="input_left_icon">
                      <img
                        src={require("../../assets/icons/lock.svg")}
                        alt="icon"
                      />
                    </span>
                    <input
                      required
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div class="form-group has_left_icon">
                    <span class="input_left_icon">
                      <img
                        src={require("../../assets/icons/lock.svg")}
                        alt="icon"
                      />
                    </span>
                    <input
                      required
                      type="password"
                      class="form-control"
                      placeholder="Confirm Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div class="form_controlls_txt">
                    <p>
                      Already have an account? <a href="#">Sign in</a>
                    </p>
                  </div>
                  <div class="next_btn_area">
                    <button type="submit" class="btn next_btn">
                      Create Account
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div class="sign_box_circle_1"></div>
          <div class="sign_box_circle_2"></div>
          <div class="sign_box_circle_3"></div>
          <div class="sign_box_circle_4"></div>
        </div>
      </section>
      <div style={{ marginTop: "5%" }}>
        <NotificationContainer />
      </div>
    </div>
    // </UserProvider>
  );
};

export default App;
