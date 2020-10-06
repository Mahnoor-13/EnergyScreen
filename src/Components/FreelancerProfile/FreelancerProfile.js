import React from "react";
import "./style.css";
import "./responsive.css";

export const FreelancerProfile = () => {
  return (
    <div>
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
                      <a href="#">Profile</a>
                    </li>
                    <li>
                      <a href="#" className="active">
                        Freelancers
                      </a>
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

      <div class="sitebar_area">
        <div class="sitebar_mobile_head">
          <div class="sitebar_mobile_head_box">
            <div class="row">
              <div class="col-4">
                <div class="sitebar_mobile_back_btn">
                  <button class="btn open_sidebar_toggle">
                    <img src={require("../../assets/icons/back-arrow.png")} />
                  </button>
                </div>
              </div>
              <div class="col-4">
                <div class="sitebar_mobile_logo">
                  <img src="images/EG-white.svg" alt="img" />
                  <img src={require("../../assets/EG-white.svg")} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sitebar_box scroolbar_1">
          <div class="siteber_header siteber_checkbox_area">
            <div class="row">
              <div class="col-4">
                <label class="siteber_checkbox">
                  Saved
                  <input type="checkbox" checked="checked" name="radio1" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="col-4">
                <label class="siteber_checkbox">
                  Blocked
                  <input type="checkbox" name="radio2" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="col-4">
                <label class="siteber_checkbox">
                  Contacted
                  <input type="checkbox" checked="checked" name="radio3" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <div class="sitebar_list">
            <h3>Freelancer Profile</h3>
            <div class="accordion">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button
                      class="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Industry
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  class="collapse"
                  aria-labelledby="headingOne"
                >
                  <div class="card-body">
                    <ul class="sitebar_list_links">
                      <li>
                        <a href="#">Link Here</a>
                      </li>
                      <li>
                        <a href="#">Link Here</a>
                      </li>
                      <li>
                        <a href="#">Link Here</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h2 class="mb-0">
                    <button
                      class="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Skills
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="headingTwo"
                >
                  <div class="card-body">
                    <ul class="sitebar_list_links">
                      <li>
                        <a href="#">Link Here</a>
                      </li>
                      <li>
                        <a href="#">Link Here</a>
                      </li>
                      <li>
                        <a href="#">Link Here</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h2 class="mb-0">
                    <button
                      class="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Salary
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                >
                  <div class="card-body">
                    <ul class="sitebar_list_links">
                      <li>
                        <a href="#">Link Here</a>
                      </li>
                      <li>
                        <a href="#">Link Here</a>
                      </li>
                      <li>
                        <a href="#">Link Here</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingFour">
                  <h2 class="mb-0">
                    <button
                      class="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Years of Experience
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFour"
                  class="collapse"
                  aria-labelledby="headingFour"
                >
                  <div class="card-body">
                    <ul class="sitebar_list_links">
                      <li>
                        <a href="#">Link Here</a>
                      </li>
                      <li>
                        <a href="#">Link Here</a>
                      </li>
                      <li>
                        <a href="#">Link Here</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sitebar_list border-0">
            <h3>Location</h3>
            <div class="siteber_checkbox_area">
              <label class="siteber_checkbox">
                Onsite
                <input type="checkbox" name="radio4" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="accordion not_active">
              <div class="card">
                <div class="card-header" id="headingFive">
                  <h2 class="mb-0">
                    <button
                      class="btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Location
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFive"
                  class="collapse"
                  aria-labelledby="headingFive"
                >
                  <div class="card-body">
                    <ul class="sitebar_list_links">
                      <li>
                        <a href="#">Link Here</a>
                      </li>
                      <li>
                        <a href="#">Link Here</a>
                      </li>
                      <li>
                        <a href="#">Link Here</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="siteber_button_area">
            <button type="button" class="btn">
              Clear Search
            </button>
          </div>
        </div>
      </div>

      <section class="freelance_witget_area">
        <div class="freelance_witget_box">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="freelancer_filter_area">
                  <div class="d-flex justify-content-between">
                    <div class="dropdown">
                      <button
                        class="btn"
                        type="button"
                        id="all-projects-filter"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        All Projects{" "}
                        <img
                          src={require("../../assets/icons/arrow-down.png")}
                          alt="img"
                        />
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="all-projects-filter"
                      >
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                    <div class="dropdown">
                      <span>Sort By:</span>
                      <button
                        class="btn"
                        type="button"
                        id="salaries-filter"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Salaries{" "}
                        <img
                          src={require("../../assets/icons/arrow-down.png")}
                          alt="img"
                        />
                      </button>
                      <div
                        class="dropdown-menu dropdown-menu-right"
                        aria-labelledby="salaries-filter"
                      >
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="freelance_user_area">
                  <div
                    class="freelancer_user_box"
                    data-toggle="modal"
                    data-target="#freelancer_modal"
                  >
                    <div class="user_left_area">
                      <div class="user_info_area">
                        <div class="user_pic">
                          <img
                            src={require("../../assets/img-1.png")}
                            alt="img"
                          />
                        </div>

                        <h4>Vincent Luggers</h4>
                        <p>O&G Lean Expert</p>
                        <div class="user_ratting">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                          <span>
                            (<a href="#">123</a>)
                          </span>
                        </div>
                        <div class="user_external_link">
                          <a href="#">
                            <img
                              src={require("../../assets/icons/external-link.svg")}
                              alt="img"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="user_details">
                        <div class="row">
                          <div class="col-4">
                            <div class="user_rate_details">
                              <ul>
                                <li>
                                  <img
                                    src={require("../../assets/icons/map-marker.svg")}
                                    alt="img"
                                  />
                                  Houston, TX
                                </li>
                                <li>
                                  <img
                                    src={require("../../assets/icons/clock.svg")}
                                    alt="img"
                                  />
                                  Exp 3 years
                                </li>
                                <li>
                                  <img
                                    src={require("../../assets/icons/usd.svg")}
                                    alt="img"
                                  />
                                  $75.00/Hr
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="col-8">
                            <div class="user_profile_comment">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua…
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="user_right_area">
                      <div class="user_checkboxes">
                        <div class="d-flex justify-content-between">
                          <label class="user_right_checkbox">
                            <input type="checkbox" checked="checked" name="" />
                            <span class="user_checkbox_txt">Star</span>
                            <span class="checkmark">
                              <i class="fas fa-heart"></i>
                            </span>
                          </label>
                          <label class="user_right_checkbox">
                            <input type="checkbox" name="" />
                            <span class="user_checkbox_txt">Hide</span>
                            <span class="checkmark">
                              <i class="fas fa-ban"></i>
                            </span>
                          </label>
                        </div>
                      </div>
                      <div class="search_usar_match">
                        <h4>
                          75%
                          <span>Match</span>
                        </h4>
                        <div class="search_usar_match_note">
                          <a href="#">
                            <i class="fas fa-info-circle"></i>
                          </a>
                        </div>
                      </div>
                      <div class="usar_contact_area">
                        <ul>
                          <li>
                            <a href="#">
                              <img
                                src={require("../../assets/icons/share.svg")}
                                alt="img"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src={require("../../assets/icons/file.svg")}
                                alt="img"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src={require("../../assets/icons/comment-color.svg")}
                                alt="img"
                              />
                            </a>
                          </li>
                        </ul>
                        <div class="clearfix"></div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>

                  <div class="modal" id="freelancer_modal">
                    <div class="modal-dialog modal-width">
                      <div class="modal-content modl-con">
                        <div class="modal-body">
                          <div
                            class="freelancer_user_box_modal"
                            data-toggle="modal"
                            data-target="#sortitems"
                          >
                            <div class="user_left_area">
                              <div class="user_info_area">
                                <div class="user_pic">
                                  <img
                                    src={require("../../assets/img-1.png")}
                                    alt="img"
                                  />
                                </div>
                                <h4>Vincent Luggers</h4>
                                <p>O&G Lean Expert</p>
                                <div class="user_ratting">
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="far fa-star"></i>
                                  <span>
                                    (<a href="#">123</a>)
                                  </span>
                                </div>
                                <div class="user_external_link">
                                  <a href="#">
                                    <img
                                      src={require("../../assets/icons/external-link.svg")}
                                      alt="img"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div class="user_rate_details_modal">
                                <li>
                                  <img
                                    src={require("../../assets/icons/map-marker.svg")}
                                    alt="img"
                                  />
                                  <span className="name_experience">
                                    Houston, TX{" "}
                                  </span>
                                </li>
                                <li>
                                  <img
                                    src={require("../../assets/icons/clock.svg")}
                                    alt="img"
                                  />
                                  <span className="name_experience">
                                    {" "}
                                    Exp 3 years
                                  </span>
                                </li>
                                <li>
                                  <img
                                    src={require("../../assets/icons/usd.svg")}
                                    alt="img"
                                  />
                                  <span className="name_experience">
                                    {" "}
                                    $75.00/Hr
                                  </span>
                                </li>
                              </div>
                            </div>
                            <div class="user_right_area">
                              <div class="user_checkboxes">
                                <div class="d-flex justify-content-between">
                                  <label class="user_right_checkbox">
                                    <input
                                      type="checkbox"
                                      checked="checked"
                                      name=""
                                    />
                                    <span class="user_checkbox_txt">Star</span>
                                    <span class="checkmark">
                                      <i class="fas fa-heart"></i>
                                    </span>
                                  </label>
                                  <label class="user_right_checkbox">
                                    <input type="checkbox" name="" />
                                    <span class="user_checkbox_txt">Hide</span>
                                    <span class="checkmark">
                                      <i class="fas fa-ban"></i>
                                    </span>
                                  </label>
                                </div>
                              </div>
                              <div class="search_usar_match">
                                <h4>
                                  75%
                                  <span>Match</span>
                                </h4>
                                <div class="search_usar_match_note">
                                  <a href="#">
                                    <i class="fas fa-info-circle"></i>
                                  </a>
                                </div>
                              </div>
                              <div class="usar_contact_area">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <img
                                        src={require("../../assets/icons/share.svg")}
                                        alt="img"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src={require("../../assets/icons/file.svg")}
                                        alt="img"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <img
                                        src={require("../../assets/icons/comment-color.svg")}
                                        alt="img"
                                      />
                                    </a>
                                  </li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="clearfix"></div>
                            </div>
                          </div>
                          <div className="border"></div>

                          {/*   <ul class="nav nav2 ">
                            <li class="active">
                              <p
                                href="#home"
                                data-toggle="tab"
                                className="general-color font_cursor"
                              >
                                General
                              </p>
                              <div className="general"></div>
                            </li>
                            <li>
                              <p
                                data-toggle="tab"
                                href="#menu1"
                                className="font_color font_color2 font_cursor"
                              >
                                Education
                              </p>
                            </li>
                            <li>
                              <p
                                data-toggle="tab"
                                href="#menu2"
                                className="font_color font_color2 font_cursor"
                              >
                                Experience
                              </p>
                            </li>

                            <li>
                              <p
                                data-toggle="tab"
                                href="#menu3"
                                className="font_color font_color2 font_cursor"
                              >
                                Rating
                              </p>
                            </li>
                          </ul>
  */}

                          <nav>
                            <div class="nav" id="nav-tab" role="tablist">
                              <p
                                class="nav-item nav-link active font_color"
                                id="general-tab"
                                data-toggle="tab"
                                href="#general"
                                role="tab"
                                aria-controls="general"
                                aria-selected="true"
                              >
                                General
                              </p>
                              <p
                                class="nav-item nav-link font_color"
                                id="education-tab"
                                data-toggle="tab"
                                href="#education"
                                role="tab"
                                aria-controls="education"
                                aria-selected="false"
                              >
                                Education
                              </p>
                              <p
                                class="nav-item nav-link font_color"
                                id="experience-tab"
                                data-toggle="tab"
                                href="#experience"
                                role="tab"
                                aria-controls="experience"
                                aria-selected="false"
                              >
                                Experience
                              </p>

                              <p
                                class="nav-item nav-link font_color"
                                id="ratings-tab"
                                data-toggle="tab"
                                href="#ratings"
                                role="tab"
                                aria-controls="ratings"
                                aria-selected="false"
                              >
                                Ratings
                              </p>
                            </div>
                          </nav>
                          <div class="tab-content" id="nav-tabContent">
                            <div
                              class="tab-pane fade show active"
                              id="general"
                              role="tabpanel"
                              aria-labelledby="general-tab"
                            >
                              <div className="border"></div>

                              <div className="freelance_summary_modal">
                                <div class="container">
                                  <div class="row justify-content-md-center">
                                    <div class="col-4 summary summary-color">
                                      Summary
                                    </div>

                                    <div class="col-8 summary">
                                      I provide lean, strategy and agile
                                      consulting services.
                                    </div>

                                    <div class="col-4 summary summary-color">
                                      Skills
                                    </div>

                                    <div class="col-8 summary">
                                      C++, JAva ,Ruby on Rails, Programming
                                      frameworks, Another skill
                                    </div>

                                    <div class="col-4 summary summary-color">
                                      Language
                                    </div>

                                    <div class="col-8 summary">
                                      <p className="english">- English</p>
                                      <p className="english">- French</p>
                                      <p className="english">- German</p>
                                    </div>

                                    <div class="col-4 summary summary-color">
                                      Achievement
                                    </div>

                                    <div class="col-8 summary">
                                      <p className="english">
                                        - Name of achievement
                                      </p>
                                      <p className="english">
                                        - Name of achievement
                                      </p>
                                    </div>

                                    <div class="col-4 summary summary-color">
                                      <p>Publications & </p>
                                      <p>Patterns</p>
                                    </div>
                                    <div className="col-8 summary"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="tab-pane fade"
                              id="education"
                              role="tabpanel"
                              aria-labelledby="education-tab"
                            >
                              <div className="border"></div>
                              <div className="freelance_summary_modal">
                                <div class="container">
                                  <div class="row justify-content-md-center">
                                    <div class="col-4 summary summary-color">
                                      <p>Certification & </p>
                                      <p>Licences</p>
                                    </div>
                                    <div class="col-8 summary">
                                      <p className="english">
                                        - Lean Six Sigma Belt
                                      </p>
                                      <p className="english">
                                        - Scrum Alliance Certified Scrum Master
                                      </p>
                                    </div>
                                    <div class="col-4 summary summary-color">
                                      School
                                    </div>
                                    <div className="col-8 summary ">
                                      <p className="school_name">
                                        Name of the School (2003 - 2004)
                                      </p>
                                      <p className="name">
                                        Name of the specialy Studied
                                      </p>

                                      <p className="school_name2">
                                        Name of the School (2003 - 2004)
                                      </p>
                                      <p className="name">
                                        Name of the specialy Studied
                                      </p>

                                      <p className="school_name2">
                                        Name of the School (2003 - 2004)
                                      </p>
                                      <p className="name">
                                        Name of the specialy Studied
                                      </p>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="tab-pane fade"
                              id="experience"
                              role="tabpanel"
                              aria-labelledby="nav-contact-tab"
                            >
                              <div className="border"></div>
                              <div className="freelance_summary_modal">
                                <div class="container">
                                  <div class="row justify-content-md-center">
                                    {/* <div class="col-8 summary">
                                      <p className="solution_heading">
                                        Solution Consulting Business Analyst
                                      </p>
                                      
                                      <div>
                                        <img
                                          src={require("../../assets/img-1.png")}
                                          alt="img"
                                          className="modal_experience_pic"
                                        />
                                        <span className="english">
                                          Name of the company
                                        </span>
                                        </div>
                                        <p>Skill</p>
                            
                                 
                                    </div>*/}

                                    <div class="col-4 summary summary-color summary_display">
                                      <a href="#">
                                        <img
                                          src={require("../../assets/EG.svg")}
                                        />
                                      </a>

                                      <p className="experience_date">
                                        Jan 2018{" "}
                                      </p>
                                    </div>

                                    <div class="col-8 summary">
                                      <p className="solution_heading">
                                        Solution Consulting Business Analyst
                                      </p>

                                      <div className="img-modal-div">
                                        <img
                                          src={require("../../assets/img-1.png")}
                                          alt="img"
                                          className="modal_experience_pic"
                                        />
                                        <span className="english">
                                          Name of the company
                                        </span>
                                      </div>
                                      <p className="skill-color">
                                        Skill 1, Skill 2, Skill 3
                                      </p>
                                    </div>
                                    <div className="col-3"></div>
                                    <div className="col-8">
                                      <ul className="ul-experience">
                                        <li>
                                          <p className="experience_para">
                                            Solution CoLorem ipsum dolor sit
                                            amet, consectetur adipiscing elit,
                                            sed do eiusmod incididunt ut labore
                                            et dolore magna aliqua.
                                          </p>
                                        </li>
                                      </ul>

                                      <ul className="ul-experience">
                                        <li>
                                          <p className="experience_para">
                                            Sed do eiusmod incididunt ut labore
                                            et dolore magna aliqua.
                                          </p>
                                        </li>
                                      </ul>
                                    </div>

                                    <div className="col-4"></div>
                                    <div className="col-8 ">
                                      <div className="rating_star-div">
                                        <div>
                                          <span className="rating-experience">
                                            Rating
                                          </span>
                                          <span class="user_ratting stars_experience">
                                            <i class="fas fa-star star-color"></i>
                                            <i class="fas fa-star star-color"></i>
                                            <i class="fas fa-star star-color"></i>
                                            <i class="fas fa-star star-color"></i>
                                            <i class="far fa-star star-color"></i>
                                          </span>

                                          <ul>
                                            <li>
                                              <p className="experience_para">
                                                Solution CoLorem ipsum dolor sit
                                                amet, consectetur adipiscing
                                                elit, sed do eiusmod incididunt
                                                ut labore et dolore magna
                                                aliqua.
                                              </p>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="col-4 summary summary-color summary_display">
                                      <p className="experience_date">
                                        Jan 2018{" "}
                                      </p>
                                    </div>

                                    <div class="col-8 summary">
                                      <p className="solution_heading">
                                        Solution Consulting Business Analyst
                                      </p>

                                      <div className="img-modal-div">
                                        <span className="english">
                                          Name of the company
                                        </span>
                                      </div>
                                      <p className="skill-color">
                                        Skill 1, Skill 2, Skill 3
                                      </p>
                                    </div>

                                    <div className="col-3"></div>
                                    <div className="col-8">
                                      <ul className="ul-experience">
                                        <li>
                                          <p className="experience_para">
                                            Solution CoLorem ipsum dolor sit
                                            amet, consectetur adipiscing elit,
                                            sed do eiusmod incididunt ut labore
                                            et dolore magna aliqua.
                                          </p>
                                        </li>
                                      </ul>

                                      <ul className="ul-experience">
                                        <li>
                                          <p className="experience_para">
                                            Sed do eiusmod incididunt ut labore
                                            et dolore magna aliqua.
                                          </p>
                                        </li>
                                      </ul>
                                    </div>

                                    <div class="col-4 summary summary-color summary_display">
                                      <a href="#">
                                        <img
                                          src={require("../../assets/EG.svg")}
                                        />
                                      </a>

                                      <p className="experience_date">
                                        Jan 2018{" "}
                                      </p>
                                    </div>

                                    <div class="col-8 summary">
                                      <p className="solution_heading">
                                        Solution Consulting Business Analyst
                                      </p>

                                      <div className="img-modal-div">
                                        <img
                                          src={require("../../assets/img-1.png")}
                                          alt="img"
                                          className="modal_experience_pic"
                                        />
                                        <span className="english">
                                          Name of the company
                                        </span>
                                      </div>
                                      <p className="skill-color">
                                        Skill 1, Skill 2, Skill 3
                                      </p>
                                    </div>
                                    <div className="col-3"></div>
                                    <div className="col-8">
                                      <ul className="ul-experience">
                                        <li>
                                          <p className="experience_para">
                                            Sed do eiusmod incididunt ut labore
                                            et dolore magna aliqua.
                                          </p>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="tab-pane fade"
                              id="ratings"
                              role="tabpanel"
                              aria-labelledby="nav-contact-tab"
                            >
                              <div className="border"></div>
                              <div className="freelance_summary_modal">
                                <div class="container">
                                  <div class="row justify-content-md-center">
                                    <div class="col-4 summary summary-color ">
                                      <div className="img-modal-div">
                                        <img
                                          src={require("../../assets/EG.svg")}
                                        />
                                        <span className="english-rating">
                                          Name of the company
                                        </span>
                                        <p className="experience_date_rating">
                                          Jan 2018{" "}
                                        </p>
                                      </div>
                                    </div>

                                    <div class="col-8 summary">
                                      <p className="solution_heading">
                                        Solution Consulting Business Analyst
                                      </p>

                                      <div class="stars_rating">
                                        <i class="fas fa-star star-color"></i>
                                        <i class="fas fa-star star-color"></i>
                                        <i class="fas fa-star star-color"></i>
                                        <i class="fas fa-star star-color"></i>
                                        <i class="far fa-star star-color"></i>
                                      </div>
                                    </div>
                                    <div className="col-3"></div>
                                    <div className="col-8">
                                      <p className="rating_para">
                                        " Solution CoLorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do
                                        eiusmod incididunt ut labore et dolore
                                        magna aliqua. "
                                      </p>

                                    
                                    </div>



                                    <div class="col-4 summary summary-color ">
                                      <div className="img-modal-div">
                                        <img
                                          src={require("../../assets/EG.svg")}
                                        />
                                        <span className="english-rating">
                                          Name of the company
                                        </span>
                                        <p className="experience_date_rating">
                                          Jan 2018{" "}
                                        </p>
                                      </div>
                                    </div>

                                    <div class="col-8 summary">
                                      <p className="solution_heading">
                                        Solution Consulting Business Analyst
                                      </p>

                                      <div class="stars_rating">
                                        <i class="fas fa-star star-color"></i>
                                        <i class="fas fa-star star-color"></i>
                                        <i class="fas fa-star star-color"></i>
                                        <i class="fas fa-star star-color"></i>
                                        <i class="far fa-star star-color"></i>
                                      </div>
                                    </div>
                                    <div className="col-3"></div>
                                    <div className="col-8">
                                      <p className="rating_para">
                                        " Solution CoLorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do
                                        eiusmod incididunt ut labore et dolore
                                        magna aliqua. "
                                      </p>

                                    
                                    </div>





                                    <div class="col-4 summary summary-color ">
                                      <div className="img-modal-div">
                                        <img
                                          src={require("../../assets/EG.svg")}
                                        />
                                        <span className="english-rating">
                                          Name of the company
                                        </span>
                                        <p className="experience_date_rating">
                                          Jan 2018{" "}
                                        </p>
                                      </div>
                                    </div>

                                    <div class="col-8 summary">
                                      <p className="solution_heading">
                                        Solution Consulting Business Analyst
                                      </p>

                                      <div class="stars_rating">
                                        <i class="fas fa-star star-color"></i>
                                        <i class="fas fa-star star-color"></i>
                                        <i class="fas fa-star star-color"></i>
                                        <i class="fas fa-star star-color"></i>
                                        <i class="far fa-star star-color"></i>
                                      </div>
                                    </div>
                                    <div className="col-3"></div>
                                    <div className="col-8">
                                      <p className="rating_para">
                                        " Solution CoLorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do
                                        eiusmod incididunt ut labore et dolore
                                        magna aliqua. "
                                      </p>

                                    
                                    </div>



                                    <div class="col-4 summary summary-color ">
                                      <div className="img-modal-div">
                                        <img
                                          src={require("../../assets/EG.svg")}
                                        />
                                        <span className="english-rating">
                                          Name of the company
                                        </span>
                                        <p className="experience_date_rating">
                                          Jan 2018{" "}
                                        </p>
                                      </div>
                                    </div>

                                    <div class="col-8 summary">
                                      <p className="solution_heading">
                                        Solution Consulting Business Analyst
                                      </p>

                                      <div class="stars_rating">
                                        <i class="fas fa-star star-color"></i>
                                        <i class="fas fa-star star-color"></i>
                                        <i class="fas fa-star star-color"></i>
                                        <i class="fas fa-star star-color"></i>
                                        <i class="far fa-star star-color"></i>
                                      </div>
                                    </div>
                                    <div className="col-3"></div>
                                    <div className="col-8">
                                      <p className="rating_para">
                                        " Solution CoLorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do
                                        eiusmod incididunt ut labore et dolore
                                        magna aliqua. "
                                      </p>

                                    
                                    </div>


                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="freelancer_user_box">
                    <div class="user_left_area">
                      <div class="user_info_area">
                        <div class="user_pic">
                          <img
                            src={require("../../assets/img-1.png")}
                            alt="img"
                          />
                        </div>
                        <h4>Vincent Luggers</h4>
                        <p>O&G Lean Expert</p>
                        <div class="user_ratting">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                          <span>
                            (<a href="#">123</a>)
                          </span>
                        </div>
                        <div class="user_external_link">
                          <a href="#">
                            <img
                              src={require("../../assets/icons/external-link.svg")}
                              alt="img"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="user_details">
                        <div class="row">
                          <div class="col-4">
                            <div class="user_rate_details">
                              <ul>
                                <li>
                                  <img
                                    src={require("../../assets/icons/map-marker.svg")}
                                    alt="img"
                                  />
                                  Houston, TX
                                </li>
                                <li>
                                  <img
                                    src={require("../../assets/icons/clock.svg")}
                                    alt="img"
                                  />
                                  Exp 3 years
                                </li>
                                <li>
                                  <img
                                    src={require("../../assets/icons/usd.svg")}
                                    alt="img"
                                  />
                                  $75.00/Hr
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="col-8">
                            <div class="user_profile_comment">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua…
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="user_right_area">
                      <div class="user_checkboxes">
                        <div class="d-flex justify-content-between">
                          <label class="user_right_checkbox">
                            <input type="checkbox" checked="checked" name="" />
                            <span class="user_checkbox_txt">Star</span>
                            <span class="checkmark">
                              <i class="fas fa-heart"></i>
                            </span>
                          </label>
                          <label class="user_right_checkbox">
                            <input type="checkbox" name="" />
                            <span class="user_checkbox_txt">Hide</span>
                            <span class="checkmark">
                              <i class="fas fa-ban"></i>
                            </span>
                          </label>
                        </div>
                      </div>
                      <div class="search_usar_match">
                        <h4>
                          75%
                          <span>Match</span>
                        </h4>
                        <div class="search_usar_match_note">
                          <a href="#">
                            <i class="fas fa-info-circle"></i>
                          </a>
                        </div>
                      </div>
                      <div class="usar_contact_area">
                        <ul>
                          <li>
                            <a href="#">
                              <img
                                src={require("../../assets/icons/share.svg")}
                                alt="img"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src={require("../../assets/icons/file.svg")}
                                alt="img"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src={require("../../assets/icons/comment-color.svg")}
                                alt="img"
                              />
                            </a>
                          </li>
                        </ul>
                        <div class="clearfix"></div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                  <div class="freelancer_user_box">
                    <div class="user_left_area">
                      <div class="user_info_area">
                        <div class="user_pic">
                          <img
                            src={require("../../assets/img-1.png")}
                            alt="img"
                          />
                        </div>
                        <h4>Vincent Luggers</h4>
                        <p>O&G Lean Expert</p>
                        <div class="user_ratting">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                          <span>
                            (<a href="#">123</a>)
                          </span>
                        </div>
                        <div class="user_external_link">
                          <a href="#">
                            <img
                              src={require("../../assets/icons/external-link.svg")}
                              alt="img"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="user_details">
                        <div class="row">
                          <div class="col-4">
                            <div class="user_rate_details">
                              <ul>
                                <li>
                                  <img
                                    src={require("../../assets/icons/map-marker.svg")}
                                    alt="img"
                                  />
                                  Houston, TX
                                </li>
                                <li>
                                  <img
                                    src={require("../../assets/icons/clock.svg")}
                                    alt="img"
                                  />
                                  Exp 3 years
                                </li>
                                <li>
                                  <img
                                    src={require("../../assets/icons/usd.svg")}
                                    alt="img"
                                  />
                                  $75.00/Hr
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="col-8">
                            <div class="user_profile_comment">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua…
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="user_right_area">
                      <div class="user_checkboxes">
                        <div class="d-flex justify-content-between">
                          <label class="user_right_checkbox">
                            <input type="checkbox" checked="checked" name="" />
                            <span class="user_checkbox_txt">Star</span>
                            <span class="checkmark">
                              <i class="fas fa-heart"></i>
                            </span>
                          </label>
                          <label class="user_right_checkbox">
                            <input type="checkbox" name="" />
                            <span class="user_checkbox_txt">Hide</span>
                            <span class="checkmark">
                              <i class="fas fa-ban"></i>
                            </span>
                          </label>
                        </div>
                      </div>
                      <div class="search_usar_match">
                        <h4>
                          75%
                          <span>Match</span>
                        </h4>
                        <div class="search_usar_match_note">
                          <a href="#">
                            <i class="fas fa-info-circle"></i>
                          </a>
                        </div>
                      </div>
                      <div class="usar_contact_area">
                        <ul>
                          <li>
                            <a href="#">
                              <img
                                src={require("../../assets/icons/share.svg")}
                                alt="img"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src={require("../../assets/icons/file.svg")}
                                alt="img"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src={require("../../assets/icons/comment-color.svg")}
                                alt="img"
                              />
                            </a>
                          </li>
                        </ul>
                        <div class="clearfix"></div>
                      </div>
                      <div class="clearfix"></div>
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
};

export default FreelancerProfile;
