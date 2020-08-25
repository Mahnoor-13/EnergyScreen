import React from "react";
import "./style.css";
import "./responsive.css";

function App({...props}) {
  return (
    <div className="App" style={{backgroundColor:"white"}}>
      <header className="header_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="site_logos">
                <a href="#">
                  <img src={require("../../assets/logo-colored.svg")} width="183" alt="img" />
                </a>
              </div>
            </div>
            {/* <div className="col-md-6 mobile_none">
          <div className="login_btn">
            <button type="button" className="btn">Log in</button>
          </div>
        </div> */}
          </div>
        </div>
      </header>

      <section className="hero_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero_article">
                <h2>
                  Find energy
                  <br />
                  FREELANCERS
                </h2>
                <p>
                  Whether you're looking for just-in-time energy talent or long
                  term projects, you'll find it all here.
                </p>
                <div className="hero_btn">
                  <button
                    type="button"
                    className="btn"
                    data-toggle="modal"
                    data-target="#modal_001"
                  >
                    GET STARTED
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brands_area">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="brands_item">
                <a href="#">
                  <img src={require("../../assets/brands/forbes.svg")} alt="img" />
                </a>
              </div>
            </div>
            <div className="col-3 mobile_none">
              <div className="brands_item text-center">
                <a href="#">
                  <img src={require("../../assets/brands/new-york-times.svg")} alt="img" />
                </a>
              </div>
            </div>
            <div className="col-3">
              <div className="brands_item text-center">
                <a href="#">
                  <img src={require("../../assets/brands/techcrunch.svg")} alt="img" />
                </a>
              </div>
            </div>
            <div className="col-3">
              <div className="brands_item text-right">
                <a href="#">
                  <img src={require("../../assets/brands/bloomberg-business.svg")} alt="img" />
                </a>
              </div>
            </div>
            <div className="col-12 desktop_none">
              <div className="brands_item text-center">
                <a href="#">
                  <img src={require("../../assets/brands/new-york-times.svg")} alt="img" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product_area">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="product_content">
                <h3 className="has_left_rectangle">Our product</h3>
                <p>
                  We created a platform that offer unprecedented access to
                  energy professionals across all areas of the Energy industry.
                </p>
                <ul>
                  <li>Easily and quickly set up your account</li>
                  <li>
                    Post freelance projects for <span>FREE</span>
                  </li>
                  <li>
                    We value and protect our clients privacy. <br /> Your data
                    is safe with us.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="product_img">
                <img src={require("../../assets/product.png")} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="element_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul>
                <li>
                  <a href="#">
                    <span>
                      <img src={require("../../assets/icons/mine.svg")} alt="img" />
                    </span>
                    Coal
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <img src={require("../../assets/icons/power.svg")} alt="img" />
                    </span>
                    Solar
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <img src={require("../../assets/icons/fossil-fuel.svg")} alt="img" />
                    </span>
                    Oil & Gas
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <img src={require("../../assets/icons/water.svg")} alt="img" />
                    </span>
                    Water
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <img src={require("../../assets/icons/sustainability.svg")} alt="img" />
                    </span>
                    Nuclear
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <img src={require("../../assets/icons/pole.svg")} alt="img" />
                    </span>
                    Transmission
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <img src={require("../../assets/icons/wagon.svg")} alt="img" />
                    </span>
                    Transport
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <img src={require("../../assets/icons/storage.svg")} alt="img" />
                    </span>
                    Storage
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <img src={require("../../assets/icons/geothermal.svg")} alt="img" />
                    </span>
                    Geothermal
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <img src={require("../../assets/icons/wind-turbine.svg")} alt="img" />
                    </span>
                    Wind
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="works_area">
        <div className="container">
          <div className="works_title">
            <h3>
              <span className="has_left_rectangle has_right_rectangle">
                How it works
              </span>
            </h3>
          </div>
          <div className="row flex-row">
            <div className="col">
              <div className="works_item">
                <did className="count_green">1</did>
                <div className="works_item_box">
                  <did className="count_yellow">1</did>
                  <img src={require("../../assets/icons/post.svg")} alt="img" />
                </div>
                <p>Post a Project</p>
              </div>
            </div>
            <div className="col has_left_arrow">
              <div className="works_item">
                <did className="count_green">2</did>
                <div className="works_item_box">
                  <did className="count_yellow">2</did>
                  <img
                    className="mt_8"
                    src={require("../../assets/icons/candidate.svg"
                   )} alt="img"
                  />
                </div>
                <p>Choose a candidate</p>
              </div>
            </div>
            <div className="col has_left_arrow">
              <div className="works_item">
                <did className="count_green">3</did>
                <div className="works_item_box">
                  <did className="count_yellow">3</did>
                  <img className="mt_5" src={require("../../assets/icons/tools.svg")} alt="img" />
                </div>
                <p>Get the work done</p>
              </div>
            </div>
            <div className="col desktop_none"></div>
            <div className="col has_left_arrow">
              <div className="works_item">
                <did className="count_green">4</did>
                <div className="works_item_box">
                  <did className="count_yellow">4</did>
                  <img className="mt_15" src={require("../../assets/icons/payment.svg")} alt="img" />
                </div>
                <p>Pay</p>
              </div>
            </div>
            <div className="col has_left_arrow">
              <div className="works_item">
                <did className="count_green">5</did>
                <div className="works_item_box">
                  <did className="count_yellow">5</did>
                  <img className="mt_15" src={require("../../assets/icons/stars.svg")} alt="img" />
                </div>
                <p>Give a review</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="freelancer_area">
        <div className="container">
          <div className="freelancer_title">
            <h3>Are you a freelancer?</h3>
          </div>
          <div className="freelancer_area_box">
            <div className="row">
              <div className="col-md-8">
                <div className="freelancer_area_content">
                  <p>
                    If you are an energy freelancer, you might be interested!
                  </p>
                  <p>
                    With a rich network of Energy company projects, we provide
                    project-based work for professionals.
                  </p>
                  <p>
                    Retirees who are looking to leverage their talents are
                    welcome too!
                  </p>
                  <button type="button" className="btn">
                    Create Freelancer Account
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <div className="freelancer_area_list">
                  <ul>
                    <li>Engineering</li>
                    <li>Project Management</li>
                    <li>IT & Software</li>
                    <li>HR</li>
                    <li>Finance, Acounting, Tax</li>
                    <li>HSSE</li>
                    <li>Technical & Administration</li>
                    <li>Operations</li>
                    <li>Manufacturing</li>
                    <li>Law</li>
                    <li>Geology</li>
                    <li>Research & Technology</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact_area">
        <div className="container">
          <div className="contact_form_box">
            <div className="contact_form_title">
              <h3>Contact us</h3>
            </div>
            <div className="contact_form">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <label>
                      <p className="label-txt">Name</p>
                      <input type="text" className="input" />
                      <div className="line-box">
                        <div className="line"></div>
                      </div>
                    </label>
                  </div>
                  <div className="col-md-6">
                    <label>
                      <p className="label-txt">Email Address</p>
                      <input type="email" className="input" />
                      <div className="line-box">
                        <div className="line"></div>
                      </div>
                    </label>
                  </div>
                  <div className="col-md-6">
                    <label>
                      <p className="label-txt">Subject</p>
                      <input type="text" className="input" />
                      <div className="line-box">
                        <div className="line"></div>
                      </div>
                    </label>
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Type your message"
                    ></textarea>
                  </div>
                </div>
                <div className="contact_form_btn">
                  <button type="button" className="btn">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="Inspirative_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>Where the Energy industry finds freelance talent</p>
              <button onClick={()=>props.history.push("register")} type="button" className="btn">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer_social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter-square"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div
        className="modal fade"
        id="modal_001"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal_content_area">
                <div className="container">
                  <div className="site_logos" style={{display:"flex"}}>
                    <a href="#">
                      <img src={require("../../assets/logo-colored.svg")} alt="img" />
                    </a>
                  </div>
                  <div className="modal_content_box">
                    <button
                      type="button"
                      className="close close_btn"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <img src={require("../../assets/icons/close.png")} alt="img" />
                    </button>
                    <div className="modal_content">
                      <h2>coming Soon !</h2>
                      <p>
                        Our teams are doing our best to release the best
                        platform in no time.
                      </p>
                      <h5>
                        <a href="#">Sign up</a> to get updates on our progress
                      </h5>
                    </div>
                    <div className="modal_form">
                      <form>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your email to receive updates..."
                        />
                        <button type="submit" className="btn">
                          Suscribe
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
