import React from "react";
import "./responsive.css";
import "./style.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import * as firebase from "firebase";
import uuid from "uuid";
import Input from "../../CustomComponents/Input";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isEditTagLine: false,
      isEditAboutUs: false,
      isEditWebsite: false,
      isEditLocation: false,
      connectionId: "",
      password: "",
      website: "",
      location: "",
      industry:[
          "Coal",
          "Solar",
          "Oil & Gas",
          "Water",
          "Nuclear",
          "Transmission",
          "Transport",
          "Storage",
          "Geothermal",
          "Wind"
      ],
      aboutus: `Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in
      voluptate.`,
      tagline: `Write a tagline that explains more about you…`,
    };
  }

  componentDidMount() {
    this.getUserDetails();
  }
  getUserDetails = () => {
    fetch("http://localhost:1994/getcompanyusers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: localStorage.getItem("email") }),
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        if (response && response.length > 0) {
          let user = response[0];
          this.setState({ user: user });
          if (user.tagline) {
            this.setState({ tagline: user.tagline });
          }
          if (user.aboutus) {
            this.setState({ aboutus: user.aboutus });
          }
          if (user.email) {
            this.setState({ connectionId: user.email });
          }
          if (user.password) {
            this.setState({ password: user.password });
          }
          if (user.companyaddress) {
            this.setState({ location: user.companyaddress });
          }
          if (user.companywebsite) {
            this.setState({ website: user.companywebsite });
          }
        }
      })
      .catch((e) => {
        this.setState({ user: null });
        NotificationManager.error("Failed to fetch user");
      });
  };

  updateUserTagline = () => {
    fetch("http://localhost:1994/updatetagline", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("email"),
        tagline: this.state.tagline,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        alert(response);
        if (response && response.length > 0) {
          // this.setState({ user: response[0] });
          this.setState({ isEditTagLine: false });
        }
      })
      .catch((e) => {
        alert(JSON.stringify(e));
        // this.setState({ user: null });
        NotificationManager.error("Failed to fetch user");
      });
  };

  updateUserAboutUs = () => {
    fetch("http://localhost:1994/updateaboutus", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("email"),
        aboutus: this.state.aboutus,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        this.setState({ isEditAboutUs: false });
      })
      .catch((e) => {
        NotificationManager.error("Failed to fetch user");
      });
  };

  updateLogo = (logo) => {
    fetch("http://localhost:1994/updatelogo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("email"),
        logo: logo,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        this.setState({ isEditAboutUs: false });
        this.getUserDetails();
      })
      .catch((e) => {
        NotificationManager.error("Failed to fetch user");
      });
  };

  updateWebsite = () => {
    fetch("http://localhost:1994/update", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("email"),
        value: this.state.website,
        column: "companywebsite",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        this.setState({ isEditWebsite: false });
        this.getUserDetails();
      })
      .catch((e) => {
        NotificationManager.error("Failed to fetch user");
      });
  };
  updateLocation = () => {
    fetch("http://localhost:1994/update", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("email"),
        value: this.state.location,
        column: "companyaddress",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        this.setState({ isEditLocation: false });
        this.getUserDetails();
      })
      .catch((e) => {
        NotificationManager.error("Failed to fetch user");
      });
  };

  uploadImageAsync = async (uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    const ref = firebase.storage().ref().child(uuid.v4());
    const snapshot = await ref.put(blob);

    let getDownloadURL = await snapshot.ref.getDownloadURL();
    this.updateLogo(getDownloadURL);
    return getDownloadURL;
  };

  onChange = (e) => {
    alert(e.target.name)
    this.setState({ [e.target.name]: e.target.value });
  };

  cancelIsEdit = () => {
    this.setState({ isEditWebsite: false });
  };
  cancelIsEditLocation = () => {
    this.setState({ isEditLocation: false });
  };

  isEdit = (e) => {
    this.setState({[e]:true})
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App" style={{ backgroundColor: "white" }}>
        <header className="EG_header_area">
          <div className="EG_desktop_header_area">
            <div className="container">
              <div className="row">
                <div className="col-5">
                  <div className="mobile_nav_toggle" onclick="myFunction(this)">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                  </div>
                  <div className="eg_nav">
                    <ul>
                      <li>
                        <a href="#">
                          <img src={require("../../assets/EG.svg")} />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="active">
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
                <div className="col-5">
                  <div className="mobile_logo">
                    <a href="#">
                      <img src={require("../../assets/EG.svg")} />
                    </a>
                  </div>
                  <div className="eg_desktop_search">
                    <form>
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search"
                      />
                    </form>
                  </div>
                </div>
                <div className="col-2">
                  <div className="eg_header_notifications">
                    <ul>
                      <li>
                        <a href="#">
                          <img
                            src={require("../../assets/icons/box.svg")}
                            alt="icon"
                          />
                          <span>3</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={require("../../assets/icons/massege.svg")}
                            alt="icon"
                          />
                          <span>1</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="eg_nav eg_mobile_nav">
            <ul>
              <li>
                <div className="eg_desktop_search">
                  <form>
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search"
                    />
                  </form>
                </div>
              </li>
              <li>
                <a href="#" className="active">
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
        {user ? (
          <section className="eg_witget_area">
            <div className="container">
              <div className="row">
                <div className="col-md-5 mobile_none">
                  <div className="eg_companyinfo_area">
                    <div className="eg_companyinfo_box">
                      <div className="upload_pic_area">
                        <div className="form-group text-center">
                          <label for="upload_pic" className="upload_pic">
                            <img
                              src={user.logo}
                              style={{
                                width: "93px",
                                height: "48px",
                              }}
                            />
                          </label>
                          <input
                            type="file"
                            className="form-control-file upload_pic_input tagline-textarea"
                            id="upload_pic"
                            onChange={(e) => {
                              this.uploadImageAsync(
                                URL.createObjectURL(e.target.files[0])
                              );
                            }}
                          />
                        </div>
                      </div>
                      <h4 style={{ textAlign: "left" }}>{user.companyname}</h4>

                      <p style={{ textAlign: "left" }}>
                        {!this.state.isEditTagLine ? (
                          <p
                            onClick={() =>
                              this.setState({ isEditTagLine: true })
                            }
                          >
                            {user.tagline ? user.tagline : this.state.tagline}
                          </p>
                        ) : (
                          <form>
                            <div className="form-group">
                              <textarea
                                className="form-control text-area-tagline"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Write a tagline that explains more about you…"
                                value={this.state.tagline}
                                onChange={(e) =>
                                  this.setState({ tagline: e.target.value })
                                }
                              ></textarea>
                              <div>
                                <div
                                  className="btn tarea-done"
                                  onClick={() => this.updateUserTagline()}
                                >
                                  Done
                                </div>
                                <div
                                  className="btn tarea-cancel"
                                  onClick={() =>
                                    this.setState({ isEditTagLine: false })
                                  }
                                >
                                  Cancel
                                </div>
                              </div>
                            </div>
                          </form>
                        )}
                      </p>
                    </div>
                    <div className="eg_companyinfo_btns">
                      <ul style={{ textAlign: "left" }}>
                        {user.industry && user.industry !== ""
                          ? JSON.parse(user.industry).map((val, ind) => {
                              return (
                                <li key={ind}>
                                  <a href="#">{val}</a>
                                </li>
                              );
                            })
                          : null}
                        <li>
                          <button type="button">+</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="eg_information_area">
                    <div className="title_1">
                      <h3>Visible Information</h3>
                    </div>
                    <div className="info_list">
                      <ul>
                        <li>
                          <h5>Website</h5>
                          {!this.state.isEditWebsite ? (
                            <p onClick={() => this.isEdit("isEditWebsite")}>
                              {this.state.website}
                            </p>
                          ) : (
                            <Input
                              value={this.state.website}
                              name="website"
                              onChange={this.onChange}
                              onClick={this.updateWebsite}
                              cancel={this.cancelIsEdit}
                            />
                          )}
                        </li>
                        <li>
                          <h5>Location</h5>
                          {!this.state.isEditLocation ? (
                            <p onClick={() => this.isEdit("isEditLocation")}>
                              {this.state.location}
                            </p>
                          ) : (
                            <Input
                              value={this.state.location}
                              name="website"
                              onChange={this.onChange}
                              onClick={this.updateLocation}
                              cancel={this.cancelIsEditLocation}
                            />
                          )}
                        </li>
                        <li>
                          <h5>Company Size</h5>
                          <p>1 - 10 People</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="eg_about_us_area">
                    <h4 onClick={() => this.setState({ isEditAboutUs: true })}>
                      About Us
                    </h4>

                    {!this.state.isEditAboutUs ? (
                      <div className="eg_about_us_txt">
                        <p>{this.state.aboutus}</p>
                      </div>
                    ) : (
                      <form>
                        <div className="form-group">
                          <textarea
                            className="form-control text-area-aboutus"
                            id="exampleFormControlTextarea1"
                            rows="10"
                            value={this.state.aboutus}
                            onChange={(e) =>
                              this.setState({ aboutus: e.target.value })
                            }
                          ></textarea>
                          <div>
                            <div
                              className="btn tarea-done"
                              onClick={() => this.updateUserAboutUs()}
                            >
                              Done
                            </div>
                            <div
                              className="btn tarea-cancel"
                              onClick={() =>
                                this.setState({ isEditAboutUs: false })
                              }
                            >
                              Cancel
                            </div>
                          </div>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="eg_nav_tab">
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a
                          className="nav-item nav-link desktop_tab_none"
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
                          className="nav-item nav-link active"
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
                          className="nav-item nav-link"
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
                          className="nav-item nav-link"
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
                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav-Settings"
                        role="tabpanel"
                        aria-labelledby="nav-Settings-tab"
                      >
                        <div className="eg_loininfo_area">
                          <div className="title_1">
                            <h3>Log In Info</h3>
                          </div>
                          <div className="info_list">
                            <ul>
                              <li>
                                <h5>Connection ID</h5>
                                <p>{this.state.connectionId}</p>
                              </li>
                              <li>
                                <h5>Password</h5>
                                <p>{this.state.password}</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="eg_notifications_area">
                          <div className="title_1">
                            <h3>Notifications</h3>
                          </div>
                          <div className="info_list">
                            <ul>
                              <li>
                                <h5>Incoming Proposal</h5>
                                <p>
                                  Get notified everytime you receive a proposal
                                  from a freelancer.
                                </p>
                                <div className="custome_switch">
                                  <label className="switch">
                                    <input type="checkbox" checked />
                                    <span className="slider round"></span>
                                  </label>
                                </div>
                              </li>
                              <li>
                                <h5>Finished job</h5>
                                <p>Get notified everytime a job is finished.</p>
                                <div className="custome_switch">
                                  <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                  </label>
                                </div>
                              </li>
                              <li>
                                <h5>Notification 3</h5>
                                <p>
                                  Get notified everytime Notification 3 arrives.
                                </p>
                                <div className="custome_switch">
                                  <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                  </label>
                                </div>
                              </li>
                              <li>
                                <h5>Notification 4</h5>
                                <p>
                                  Get notified everytime Notification 4arrives.
                                </p>
                                <div className="custome_switch">
                                  <label className="switch">
                                    <input type="checkbox" checked />
                                    <span className="slider round"></span>
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-Plans"
                        role="tabpanel"
                        aria-labelledby="nav-Plans-tab"
                      >
                        <div className="plans_checkbox_area">
                          <div className="plans_checkbox">
                            <label className="plans_checkbox_label">
                              <input type="checkbox" checked="checked" />
                              <span className="checkmark"></span>
                              <div className="plans_box">
                                <h4>
                                  Title of the Plan <span>$1.000/mo</span>{" "}
                                </h4>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div className="plans_box_bottom">
                                  <div className="row">
                                    <div className="col-6">
                                      <a href="#" className="plans_LMore">
                                        Learn More
                                      </a>
                                    </div>
                                    <div className="col-6 text-right">
                                      <a href="#" className="plans_cancle">
                                        Cancel
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </div>
                          <div className="plans_checkbox">
                            <label className="plans_checkbox_label">
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                              <div className="plans_box">
                                <h4>
                                  Title of the Plan <span>$1.000/mo</span>{" "}
                                </h4>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div className="plans_box_bottom">
                                  <div className="row">
                                    <div className="col-6">
                                      <a href="#" className="plans_LMore">
                                        Learn More
                                      </a>
                                    </div>
                                    <div className="col-6 text-right">
                                      <a href="#" className="plans_cancle">
                                        Cancel
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </div>
                          <div className="plans_checkbox">
                            <label className="plans_checkbox_label">
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                              <div className="plans_box">
                                <h4>
                                  Title of the Plan <span>$1.000/mo</span>{" "}
                                </h4>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div className="plans_box_bottom">
                                  <div className="row">
                                    <div className="col-6">
                                      <a href="#" className="plans_LMore">
                                        Learn More
                                      </a>
                                    </div>
                                    <div className="col-6 text-right">
                                      <a href="#" className="plans_cancle">
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
                        className="tab-pane fade"
                        id="nav-Billing"
                        role="tabpanel"
                        aria-labelledby="nav-Billing-tab"
                      >
                        <div className="billing_area">
                          <div className="title_1 has_right_btn">
                            <h3>Payment info</h3>
                            <button type="button" className="btn save_btn">
                              Save
                            </button>
                          </div>
                          <div className="billing_tab_select_area">
                            <div className="tab">
                              <button
                                className="tablinks active"
                                onclick="openCity(event, 'billing_with_card')"
                              >
                                Credit / Debit Card
                              </button>
                              <button
                                className="tablinks"
                                onclick="openCity(event, 'billing_with_Bank')"
                              >
                                Bank Transfer
                              </button>
                            </div>

                            <div
                              id="billing_with_card"
                              className="tabcontent"
                              style={{ display: "block" }}
                            >
                              <div className="billing_form_controlls">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control input_with_visa"
                                    placeholder="Credit or debit card number"
                                  />
                                </div>
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className="form-group custom_select_group">
                                      <div className="custom-select-2">
                                        <select>
                                          <option>Exp Month</option>
                                          <option>#2</option>
                                          <option>#3</option>
                                          <option>#4</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group custom_select_group">
                                      <div className="custom-select-2">
                                        <select>
                                          <option>Exp Year</option>
                                          <option>#2</option>
                                          <option>#3</option>
                                          <option>#4</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="CVV"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name on the card"
                                  />
                                </div>
                              </div>
                            </div>

                            <div id="billing_with_Bank" className="tabcontent">
                              <div className="billing_form_controlls">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control input_with_italic_txt"
                                    placeholder="Name of account holder"
                                  />
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group custom_select_group">
                                      <div className="custom-select-2">
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
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Routing number"
                                  />
                                </div>
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Account number"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="billing_area pt_20">
                          <div className="title_1">
                            <h3>Billing info</h3>
                          </div>
                          <div className="billing_form_controlls">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Billing Address"
                              />
                            </div>
                            <div className="row">
                              <div className="col-md-4">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Zipcode"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="City"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group custom_select_group">
                                  <div className="custom-select-2">
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
                        className="tab-pane fade"
                        id="nav-General"
                        role="tabpanel"
                        aria-labelledby="nav-General-tab"
                      >
                        <div className="eg_companyinfo_area">
                          <div className="eg_companyinfo_box">
                            <div className="upload_pic_area">
                              <div className="form-group text-center">
                                <label for="upload_pic" className="upload_pic">
                                  <img src={user.logo} />
                                </label>

                                <input
                                  type="file"
                                  className="form-control-file upload_pic_input"
                                  id="upload_pic"
                                />
                              </div>
                            </div>
                            <h4>{user.companyname}</h4>
                            <p>Write a tagline that explains more about you…</p>
                          </div>
                          <div className="eg_companyinfo_btns">
                            <ul>
                              {user.industry && user.industry !== ""
                                ? JSON.parse(user.industry).map((val, ind) => {
                                    return (
                                      <li key={ind}>
                                        <a href="#">{val}</a>
                                      </li>
                                    );
                                  })
                                : null}
                              <li>
                                <button type="button">+</button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="eg_information_area">
                          <div className="title_1">
                            <h3>Visible Information</h3>
                          </div>
                          <div className="info_list">
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
                        <div className="eg_about_us_area">
                          <h4>About Us</h4>
                          <div className="eg_about_us_txt">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                              <br />
                              <br />
                              Ut enim ad minim veniam, quis nostrud exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo
                              consequat. Duis aute irure dolor in reprehenderit
                              in voluptate.
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
        ) : null}

        <div style={{ marginTop: "5%" }}>
          <NotificationContainer />
        </div>
      </div>
    );
  }
}

export default App;
