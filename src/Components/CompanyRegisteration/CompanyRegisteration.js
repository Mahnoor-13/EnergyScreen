import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/Context";
const App = ({ ...props }) => {
  const [compnayName, setCompanyName] = useState("");
  const [companyEmailAddress, setCompanyEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    // <UserProvider>
    <div className="App">
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

        <div class="sign_box">
          <div class="sign_box_content">
            <div class="sign_box_title">
              <h2>Create Account</h2>
            </div>
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
                  <button
                    onClick={() =>
                      props.history.push("signuplocation", {
                        details: {
                          companyname: compnayName,
                          companyEmailAddress: companyEmailAddress,
                          password: password,
                        },
                      })
                    }
                    class="btn next_btn"
                  >
                    Create Account
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
    </div>
    // </UserProvider>
  );
};

export default App;

// import React from 'react';
// import {useContext} from 'react';
// import { XyzContext } from '../../Context/Context';

// const App = () =>{
//     const [number, setNumber] = useContext(XyzContext);
//     return(
//         // <XyzProvider>
//             <div>
// <h1>Number:{number}</h1>
//             </div>
//         // </XyzProvider>
//     );
// }
// export default App;
