import React from "react";
import "./responsive.css";
import "./style.css";
function App() {
  return (
    <div className="App">
      <header class="EG_header_area">
        <div class="EG_desktop_header_area">
          <div class="container">
            <div class="row">
              <div class="col-5">
                <div class="mobile_nav_toggle" onclick="myFunction(this)">
                  <div class="bar1"></div>
                  <div class="bar2"></div>
                  <div class="bar3"></div>
                </div>
                <div class="eg_nav">
                  <ul>
                    <li>
                      <a href="#">
                        <img src={require("../../assets/EG.svg")} />
                      </a>
                    </li>
                    <li>
                      <a href="#" class="active">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a href="#">Freelancers</a>
                    </li>
                    <li>
                      <a href="#">Projects</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-5">
                <div class="mobile_logo">
                  <a href="#">
                    <img src={require("../../assets/EG.svg")} />
                  </a>
                </div>
                <div class="eg_desktop_search">
                  <form>
                    <input
                      type="search"
                      class="form-control"
                      placeholder="Search"
                    />
                  </form>
                </div>
              </div>
              <div class="col-2">
                <div class="eg_header_notifications">
                  <ul>
                    <li>
                      <a href="#">
                        <img src={require("../../assets/icons/box.svg")} alt="icon" />
                        <span>3</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={require("../../assets/icons/massege.svg")} alt="icon" />
                        <span>1</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="eg_nav eg_mobile_nav">
          <ul>
            <li>
              <div class="eg_desktop_search">
                <form>
                  <input
                    type="search"
                    class="form-control"
                    placeholder="Search"
                  />
                </form>
              </div>
            </li>
            <li>
              <a href="#" class="active">
                Profile
              </a>
            </li>
            <li>
              <a href="#">Freelancers</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
          </ul>
        </div>
      </header>

      <section class="eg_witget_area">
        <div class="container">
          <div class="row">
            <div class="col-md-5 mobile_none">
              <div class="eg_companyinfo_area">
                <div class="eg_companyinfo_box">
                  <div class="upload_pic_area">
                    <div class="form-group text-center">
                      <label for="upload_pic" class="upload_pic">
                        Upload Picture
                      </label>
                      <input
                        type="file"
                        class="form-control-file upload_pic_input"
                        id="upload_pic"
                      />
                    </div>
                  </div>
                  <h4>Company Name</h4>
                  <p>Write a tagline that explains more about you…</p>
                </div>
                <div class="eg_companyinfo_btns">
                  <ul>
                    <li>
                      <a href="#">Oil & Gas</a>
                    </li>
                    <li>
                      <a href="#">Wind</a>
                    </li>
                    <li>
                      <button type="button">+</button>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="eg_information_area">
                <div class="title_1">
                  <h3>Visible Information</h3>
                </div>
                <div class="info_list">
                  <ul>
                    <li>
                      <h5>Website</h5>
                      <p>www.energygigs.com</p>
                    </li>
                    <li>
                      <h5>Location</h5>
                      <p>Los Angeles County</p>
                    </li>
                    <li>
                      <h5>Company Size</h5>
                      <p>1 - 10 People</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="eg_about_us_area">
                <h4>About Us</h4>
                <div class="eg_about_us_txt">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                    <br />
                    <br />
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-7">
              <div class="eg_nav_tab">
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      class="nav-item nav-link desktop_tab_none"
                      id="nav-General-tab"
                      data-toggle="tab"
                      href="#nav-General"
                      role="tab"
                      aria-controls="nav-General"
                      aria-selected="true"
                    >
                      General
                    </a>
                    <a
                      class="nav-item nav-link active"
                      id="nav-Settings-tab"
                      data-toggle="tab"
                      href="#nav-Settings"
                      role="tab"
                      aria-controls="nav-Settings"
                      aria-selected="true"
                    >
                      Settings
                    </a>
                    <a
                      class="nav-item nav-link"
                      id="nav-Plans-tab"
                      data-toggle="tab"
                      href="#nav-Plans"
                      role="tab"
                      aria-controls="nav-Plans"
                      aria-selected="false"
                    >
                      Plans
                    </a>
                    <a
                      class="nav-item nav-link"
                      id="nav-Billing-tab"
                      data-toggle="tab"
                      href="#nav-Billing"
                      role="tab"
                      aria-controls="nav-Billing"
                      aria-selected="false"
                    >
                      Billing
                    </a>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="nav-Settings"
                    role="tabpanel"
                    aria-labelledby="nav-Settings-tab"
                  >
                    <div class="eg_loininfo_area">
                      <div class="title_1">
                        <h3>Log In Info</h3>
                      </div>
                      <div class="info_list">
                        <ul>
                          <li>
                            <h5>Connection ID</h5>
                            <p>info@companyname.com</p>
                          </li>
                          <li>
                            <h5>Password</h5>
                            <p>*****</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="eg_notifications_area">
                      <div class="title_1">
                        <h3>Notifications</h3>
                      </div>
                      <div class="info_list">
                        <ul>
                          <li>
                            <h5>Incoming Proposal</h5>
                            <p>
                              Get notified everytime you receive a proposal from
                              a freelancer.
                            </p>
                            <div class="custome_switch">
                              <label class="switch">
                                <input type="checkbox" checked />
                                <span class="slider round"></span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <h5>Finished job</h5>
                            <p>Get notified everytime a job is finished.</p>
                            <div class="custome_switch">
                              <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <h5>Notification 3</h5>
                            <p>
                              Get notified everytime Notification 3 arrives.
                            </p>
                            <div class="custome_switch">
                              <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <h5>Notification 4</h5>
                            <p>Get notified everytime Notification 4arrives.</p>
                            <div class="custome_switch">
                              <label class="switch">
                                <input type="checkbox" checked />
                                <span class="slider round"></span>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-Plans"
                    role="tabpanel"
                    aria-labelledby="nav-Plans-tab"
                  >
                    <div class="plans_checkbox_area">
                      <div class="plans_checkbox">
                        <label class="plans_checkbox_label">
                          <input type="checkbox" checked="checked" />
                          <span class="checkmark"></span>
                          <div class="plans_box">
                            <h4>
                              Title of the Plan <span>$1.000/mo</span>{" "}
                            </h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                            <div class="plans_box_bottom">
                              <div class="row">
                                <div class="col-6">
                                  <a href="#" class="plans_LMore">
                                    Learn More
                                  </a>
                                </div>
                                <div class="col-6 text-right">
                                  <a href="#" class="plans_cancle">
                                    Cancel
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                      <div class="plans_checkbox">
                        <label class="plans_checkbox_label">
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                          <div class="plans_box">
                            <h4>
                              Title of the Plan <span>$1.000/mo</span>{" "}
                            </h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                            <div class="plans_box_bottom">
                              <div class="row">
                                <div class="col-6">
                                  <a href="#" class="plans_LMore">
                                    Learn More
                                  </a>
                                </div>
                                <div class="col-6 text-right">
                                  <a href="#" class="plans_cancle">
                                    Cancel
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                      <div class="plans_checkbox">
                        <label class="plans_checkbox_label">
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                          <div class="plans_box">
                            <h4>
                              Title of the Plan <span>$1.000/mo</span>{" "}
                            </h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                            <div class="plans_box_bottom">
                              <div class="row">
                                <div class="col-6">
                                  <a href="#" class="plans_LMore">
                                    Learn More
                                  </a>
                                </div>
                                <div class="col-6 text-right">
                                  <a href="#" class="plans_cancle">
                                    Cancel
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-Billing"
                    role="tabpanel"
                    aria-labelledby="nav-Billing-tab"
                  >
                    <div class="billing_area">
                      <div class="title_1 has_right_btn">
                        <h3>Payment info</h3>
                        <button type="button" class="btn save_btn">
                          Save
                        </button>
                      </div>
                      <div class="billing_tab_select_area">
                        <div class="tab">
                          <button
                            class="tablinks active"
                            onclick="openCity(event, 'billing_with_card')"
                          >
                            Credit / Debit Card
                          </button>
                          <button
                            class="tablinks"
                            onclick="openCity(event, 'billing_with_Bank')"
                          >
                            Bank Transfer
                          </button>
                        </div>

                        <div
                          id="billing_with_card"
                          class="tabcontent"
                          style={{display: "block"}}
                        >
                          <div class="billing_form_controlls">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control input_with_visa"
                                placeholder="Credit or debit card number"
                              />
                            </div>
                            <div class="row">
                              <div class="col-md-4">
                                <div class="form-group custom_select_group">
                                  <div class="custom-select-2">
                                    <select>
                                      <option>Exp Month</option>
                                      <option>#2</option>
                                      <option>#3</option>
                                      <option>#4</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-4">
                                <div class="form-group custom_select_group">
                                  <div class="custom-select-2">
                                    <select>
                                      <option>Exp Year</option>
                                      <option>#2</option>
                                      <option>#3</option>
                                      <option>#4</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-4">
                                <div class="form-group">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="CVV"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Name on the card"
                              />
                            </div>
                          </div>
                        </div>

                        <div id="billing_with_Bank" class="tabcontent">
                          <div class="billing_form_controlls">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control input_with_italic_txt"
                                placeholder="Name of account holder"
                              />
                            </div>
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group custom_select_group">
                                  <div class="custom-select-2">
                                    <select>
                                      <option>Account type</option>
                                      <option>USD</option>
                                      <option>EUR</option>
                                      <option>GBP</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Routing number"
                              />
                            </div>
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Account number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="billing_area pt_20">
                      <div class="title_1">
                        <h3>Billing info</h3>
                      </div>
                      <div class="billing_form_controlls">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Billing Address"
                          />
                        </div>
                        <div class="row">
                          <div class="col-md-4">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Zipcode"
                              />
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="City"
                              />
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group custom_select_group">
                              <div class="custom-select-2">
                                <select>
                                  <option>State</option>
                                  <option>#2</option>
                                  <option>#3</option>
                                  <option>#4</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-General"
                    role="tabpanel"
                    aria-labelledby="nav-General-tab"
                  >
                    <div class="eg_companyinfo_area">
                      <div class="eg_companyinfo_box">
                        <div class="upload_pic_area">
                          <div class="form-group text-center">
                            <label for="upload_pic" class="upload_pic">
                              Upload Picture
                            </label>
                            <input
                              type="file"
                              class="form-control-file upload_pic_input"
                              id="upload_pic"
                            />
                          </div>
                        </div>
                        <h4>Company Name</h4>
                        <p>Write a tagline that explains more about you…</p>
                      </div>
                      <div class="eg_companyinfo_btns">
                        <ul>
                          <li>
                            <a href="#">Oil & Gas</a>
                          </li>
                          <li>
                            <a href="#">Wind</a>
                          </li>
                          <li>
                            <button type="button">+</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="eg_information_area">
                      <div class="title_1">
                        <h3>Visible Information</h3>
                      </div>
                      <div class="info_list">
                        <ul>
                          <li>
                            <h5>Website</h5>
                            <p>www.energygigs.com</p>
                          </li>
                          <li>
                            <h5>Location</h5>
                            <p>Los Angeles County</p>
                          </li>
                          <li>
                            <h5>Company Size</h5>
                            <p>1 - 10 People</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="eg_about_us_area">
                      <h4>About Us</h4>
                      <div class="eg_about_us_txt">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                          <br />
                          <br />
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in
                          voluptate.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
