import React from "react";

function App({...props}) {
  return (
    <div className="App">
      <header class="header_area">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="site_logos">
                <a href="#">
                  <img src={require("../../assets/logo-colored.svg")} width="183" alt="img" />
                </a>
              </div>
            </div>
            {/* <div class="col-md-6 mobile_none">
          <div class="login_btn">
            <button type="button" class="btn">Log in</button>
          </div>
        </div> */}
          </div>
        </div>
      </header>

      <section class="hero_area">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="hero_article">
                <h2>
                  Find energy
                  <br />
                  FREELANCERS
                </h2>
                <p>
                  Whether you're looking for just-in-time energy talent or long
                  term projects, you'll find it all here.
                </p>
                <div class="hero_btn">
                  <button
                    type="button"
                    class="btn"
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

      <section class="brands_area">
        <div class="container">
          <div class="row">
            <div class="col-3">
              <div class="brands_item">
                <a href="#">
                  <img src={require("../../assets/brands/forbes.svg")} alt="img" />
                </a>
              </div>
            </div>
            <div class="col-3 mobile_none">
              <div class="brands_item text-center">
                <a href="#">
                  <img src={require("../../assets/brands/new-york-times.svg")} alt="img" />
                </a>
              </div>
            </div>
            <div class="col-3">
              <div class="brands_item text-center">
                <a href="#">
                  <img src={require("../../assets/brands/techcrunch.svg")} alt="img" />
                </a>
              </div>
            </div>
            <div class="col-3">
              <div class="brands_item text-right">
                <a href="#">
                  <img src={require("../../assets/brands/bloomberg-business.svg")} alt="img" />
                </a>
              </div>
            </div>
            <div class="col-12 desktop_none">
              <div class="brands_item text-center">
                <a href="#">
                  <img src={require("../../assets/brands/new-york-times.svg")} alt="img" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="product_area">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="product_content">
                <h3 class="has_left_rectangle">Our product</h3>
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
            <div class="col-md-6">
              <div class="product_img">
                <img src={require("../../assets/product.png")} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="element_area">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
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

      <section class="works_area">
        <div class="container">
          <div class="works_title">
            <h3>
              <span class="has_left_rectangle has_right_rectangle">
                How it works
              </span>
            </h3>
          </div>
          <div class="row flex-row">
            <div class="col">
              <div class="works_item">
                <did class="count_green">1</did>
                <div class="works_item_box">
                  <did class="count_yellow">1</did>
                  <img src={require("../../assets/icons/post.svg")} alt="img" />
                </div>
                <p>Post a Project</p>
              </div>
            </div>
            <div class="col has_left_arrow">
              <div class="works_item">
                <did class="count_green">2</did>
                <div class="works_item_box">
                  <did class="count_yellow">2</did>
                  <img
                    class="mt_8"
                    src={require("../../assets/icons/candidate.svg"
                   )} alt="img"
                  />
                </div>
                <p>Choose a candidate</p>
              </div>
            </div>
            <div class="col has_left_arrow">
              <div class="works_item">
                <did class="count_green">3</did>
                <div class="works_item_box">
                  <did class="count_yellow">3</did>
                  <img class="mt_5" src={require("../../assets/icons/tools.svg")} alt="img" />
                </div>
                <p>Get the work done</p>
              </div>
            </div>
            <div class="col desktop_none"></div>
            <div class="col has_left_arrow">
              <div class="works_item">
                <did class="count_green">4</did>
                <div class="works_item_box">
                  <did class="count_yellow">4</did>
                  <img class="mt_15" src={require("../../assets/icons/payment.svg")} alt="img" />
                </div>
                <p>Pay</p>
              </div>
            </div>
            <div class="col has_left_arrow">
              <div class="works_item">
                <did class="count_green">5</did>
                <div class="works_item_box">
                  <did class="count_yellow">5</did>
                  <img class="mt_15" src={require("../../assets/icons/stars.svg")} alt="img" />
                </div>
                <p>Give a review</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="freelancer_area">
        <div class="container">
          <div class="freelancer_title">
            <h3>Are you a freelancer?</h3>
          </div>
          <div class="freelancer_area_box">
            <div class="row">
              <div class="col-md-8">
                <div class="freelancer_area_content">
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
                  <button type="button" class="btn">
                    Create Freelancer Account
                  </button>
                </div>
              </div>
              <div class="col-md-4">
                <div class="freelancer_area_list">
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

      <section class="contact_area">
        <div class="container">
          <div class="contact_form_box">
            <div class="contact_form_title">
              <h3>Contact us</h3>
            </div>
            <div class="contact_form">
              <form>
                <div class="row">
                  <div class="col-md-6">
                    <label>
                      <p class="label-txt">Name</p>
                      <input type="text" class="input" />
                      <div class="line-box">
                        <div class="line"></div>
                      </div>
                    </label>
                  </div>
                  <div class="col-md-6">
                    <label>
                      <p class="label-txt">Email Address</p>
                      <input type="email" class="input" />
                      <div class="line-box">
                        <div class="line"></div>
                      </div>
                    </label>
                  </div>
                  <div class="col-md-6">
                    <label>
                      <p class="label-txt">Subject</p>
                      <input type="text" class="input" />
                      <div class="line-box">
                        <div class="line"></div>
                      </div>
                    </label>
                  </div>
                  <div class="col-md-12">
                    <textarea
                      class="form-control"
                      rows="3"
                      placeholder="Type your message"
                    ></textarea>
                  </div>
                </div>
                <div class="contact_form_btn">
                  <button type="button" class="btn">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section class="Inspirative_area">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <p>Where the Energy industry finds freelance talent</p>
              <button onClick={()=>props.history.push("register")} type="button" class="btn">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer_area">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="footer_social">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-twitter-square"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div
        class="modal fade"
        id="modal_001"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <div class="modal_content_area">
                <div class="container">
                  <div class="site_logos">
                    <a href="#">
                      <img src={require("../../assets/logo-colored.svg")} alt="img" />
                    </a>
                  </div>
                  <div class="modal_content_box">
                    <button
                      type="button"
                      class="close close_btn"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <img src={require("../../assets/icons/close.png")} alt="img" />
                    </button>
                    <div class="modal_content">
                      <h2>coming Soon !</h2>
                      <p>
                        Our teams are doing our best to release the best
                        platform in no time.
                      </p>
                      <h5>
                        <a href="#">Sign up</a> to get updates on our progress
                      </h5>
                    </div>
                    <div class="modal_form">
                      <form>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter your email to receive updates..."
                        />
                        <button type="submit" class="btn">
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
