import React from "react";

function App({...props}) {
  return (
    <div className="App">
      <section class="signUpIn_witget_area">
        <div class="container">
          <div class="signUpIn_title">
            <h2>Company Industry</h2>
            <p>
              Can you tell us a bit more about your industry?
              <br />
              Pick the tag that represent your company
            </p>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="indursty_services_area">
                <div class="row">
                  <div class="col">
                    <div class="indursty_services_checkbox">
                      <label class="services_checkbox_label">
                        <input type="checkbox" />
                        <span class="checkmark">
                          <img
                            src={require("../../assets/icons/mine.svg")}
                            alt="img"
                          />
                        </span>
                        <span class="checkmark_txt">Coal</span>
                      </label>
                    </div>
                  </div>
                  <div class="col">
                    <div class="indursty_services_checkbox">
                      <label class="services_checkbox_label">
                        <input type="checkbox" checked="checked" />
                        <span class="checkmark">
                          <img
                            src={require("../../assets/icons/power.svg")}
                            alt="img"
                          />
                        </span>
                        <span class="checkmark_txt">Solar</span>
                      </label>
                    </div>
                  </div>
                  <div class="col">
                    <div class="indursty_services_checkbox">
                      <label class="services_checkbox_label">
                        <input type="checkbox" />
                        <span class="checkmark">
                          <img
                            src={require("../../assets/icons/fossil-fuel.svg")}
                            alt="img"
                          />
                        </span>
                        <span class="checkmark_txt">Oil & Gas</span>
                      </label>
                    </div>
                  </div>
                  <div class="col">
                    <div class="indursty_services_checkbox">
                      <label class="services_checkbox_label">
                        <input type="checkbox" />
                        <span class="checkmark">
                          <img
                            src={require("../../assets/icons/water.svg")}
                            alt="img"
                          />
                        </span>
                        <span class="checkmark_txt">Water</span>
                      </label>
                    </div>
                  </div>
                  <div class="col">
                    <div class="indursty_services_checkbox">
                      <label class="services_checkbox_label">
                        <input type="checkbox" />
                        <span class="checkmark">
                          <img
                            src={require("../../assets/icons/sustainability.svg")}
                            alt="img"
                          />
                        </span>
                        <span class="checkmark_txt">Nuclear</span>
                      </label>
                    </div>
                  </div>
                  <div class="col">
                    <div class="indursty_services_checkbox">
                      <label class="services_checkbox_label">
                        <input type="checkbox" />
                        <span class="checkmark">
                          <img
                            src={require("../../assets/icons/pole.svg")}
                            alt="img"
                          />
                        </span>
                        <span class="checkmark_txt">Transmission</span>
                      </label>
                    </div>
                  </div>
                  <div class="col">
                    <div class="indursty_services_checkbox">
                      <label class="services_checkbox_label">
                        <input type="checkbox" checked="checked" />
                        <span class="checkmark">
                          <img
                            src={require("../../assets/icons/wagon.svg")}
                            alt="img"
                          />
                        </span>
                        <span class="checkmark_txt">Transport</span>
                      </label>
                    </div>
                  </div>
                  <div class="col">
                    <div class="indursty_services_checkbox">
                      <label class="services_checkbox_label">
                        <input type="checkbox" />
                        <span class="checkmark">
                          <img
                            src={require("../../assets/icons/storage.svg")}
                            alt="img"
                          />
                        </span>
                        <span class="checkmark_txt">Storage</span>
                      </label>
                    </div>
                  </div>
                  <div class="col">
                    <div class="indursty_services_checkbox">
                      <label class="services_checkbox_label">
                        <input type="checkbox" checked="checked" />
                        <span class="checkmark">
                          <img
                            src={require("../../assets/icons/geothermal.svg")}
                            alt="img"
                          />
                        </span>
                        <span class="checkmark_txt">Geothermal</span>
                      </label>
                    </div>
                  </div>
                  <div class="col">
                    <div class="indursty_services_checkbox">
                      <label class="services_checkbox_label">
                        <input type="checkbox" />
                        <span class="checkmark">
                          <img
                            src={require("../../assets/icons/wind-turbine.svg")}
                            alt="img"
                          />
                        </span>
                        <span class="checkmark_txt">Wind</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="next_btn_area">
                  <button onClick={()=>props.history.push("signuponlinepresence")} class="btn next_btn">NEXT</button>
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
