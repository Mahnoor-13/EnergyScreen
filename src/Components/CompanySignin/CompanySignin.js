import React from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  signIn = () => {
    // fetch("http://3.136.83.24:1994/companyusers", {
    fetch("http://localhost:1994/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        
      })
      .catch((e) => {
        NotificationManager.error("Operation failed");
        console.log("e", e);
      });
  };
  render() {
    return (
      <div className="App" style={{ height: "100vh", overflow: "hidden" }}>
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

          <div class="sign_box">
            <div class="sign_box_content">
              <div class="sign_box_title">
                <h2>Sign in</h2>
              </div>
              <div class="sign_form_area">
                <div class="form_controlls_area">
                  <div class="form-group has_left_icon">
                    <span class="input_left_icon">
                      <img
                        src={require("../../assets/icons/id.svg")}
                        alt="icon"
                      />
                    </span>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email Address"
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
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
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }}
                    />
                  </div>
                  <div class="form_controlls_txt">
                    <p>
                      Don’t have an account yet? <a href="#">Create account</a>
                    </p>
                  </div>
                  <div class="next_btn_area">
                    <button class="btn next_btn" onClick={() => this.signIn()}>
                      Sign in
                    </button>
                  </div>
                </div>
              </div>
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
    );
  }
}

export default App;
