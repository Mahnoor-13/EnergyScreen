import React, { useState, useEffect } from "react";
import axios from "axios";
function App({ ...props }) {
  const [_props] = useState(props.location.state);
  const [arr, setArr] = useState([]);

  const manage = (e, value) => {
    if (e.target.checked) {
      arr.push(value);
      setArr(arr);
    } else {
      var index = arr.indexOf(value);
      if (index >= 0) {
        arr.splice(index, 1);
        setArr(arr);
      }
    }
  };

  return (
    <div className="App">
      <section className="signUpIn_witget_area">
        <div className="container">
          <div className="signUpIn_title">
            <h2>Company Industry</h2>
            <p>
              Can you tell us a bit more about your industry?
              <br />
              Pick the tag that represent your company
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="indursty_services_area">
                <div className="row">
                  <div className="col">
                    <div className="indursty_services_checkbox">
                      <label className="services_checkbox_label">
                        <input
                          type="checkbox"
                          onClick={(e) => manage(e, "Coal")}
                        />
                        <span className="checkmark">
                          <img
                            src={require("../../assets/icons/mine.svg")}
                            alt="img"
                          />
                        </span>
                        <span className="checkmark_txt">Coal</span>
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="indursty_services_checkbox">
                      <label className="services_checkbox_label">
                        <input
                          type="checkbox"
                          // checked="checked"
                          onClick={(e) => manage(e, "power")}
                        />
                        <span className="checkmark">
                          <img
                            src={require("../../assets/icons/power.svg")}
                            alt="img"
                          />
                        </span>
                        <span className="checkmark_txt">Solar</span>
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="indursty_services_checkbox">
                      <label className="services_checkbox_label">
                        <input
                          type="checkbox"
                          onClick={(e) => manage(e, "oil&gas")}
                        />
                        <span className="checkmark">
                          <img
                            src={require("../../assets/icons/fossil-fuel.svg")}
                            alt="img"
                          />
                        </span>
                        <span className="checkmark_txt">Oil & Gas</span>
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="indursty_services_checkbox">
                      <label className="services_checkbox_label">
                        <input
                          type="checkbox"
                          onClick={(e) => manage(e, "water")}
                        />
                        <span className="checkmark">
                          <img
                            src={require("../../assets/icons/water.svg")}
                            alt="img"
                          />
                        </span>
                        <span className="checkmark_txt">Water</span>
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="indursty_services_checkbox">
                      <label className="services_checkbox_label">
                        <input
                          type="checkbox"
                          onClick={(e) => manage(e, "nuclear")}
                        />
                        <span className="checkmark">
                          <img
                            src={require("../../assets/icons/sustainability.svg")}
                            alt="img"
                          />
                        </span>
                        <span className="checkmark_txt">Nuclear</span>
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="indursty_services_checkbox">
                      <label className="services_checkbox_label">
                        <input
                          type="checkbox"
                          onClick={(e) => manage(e, "transmission")}
                        />
                        <span className="checkmark">
                          <img
                            src={require("../../assets/icons/pole.svg")}
                            alt="img"
                          />
                        </span>
                        <span className="checkmark_txt">Transmission</span>
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="indursty_services_checkbox">
                      <label className="services_checkbox_label">
                        <input
                          type="checkbox"
                          // checked="checked"
                          onClick={(e) => manage(e, "transport")}
                        />
                        <span className="checkmark">
                          <img
                            src={require("../../assets/icons/wagon.svg")}
                            alt="img"
                          />
                        </span>
                        <span className="checkmark_txt">Transport</span>
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="indursty_services_checkbox">
                      <label className="services_checkbox_label">
                        <input
                          type="checkbox"
                          onClick={(e) => manage(e, "storage")}
                        />
                        <span className="checkmark">
                          <img
                            src={require("../../assets/icons/storage.svg")}
                            alt="img"
                          />
                        </span>
                        <span className="checkmark_txt">Storage</span>
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="indursty_services_checkbox">
                      <label className="services_checkbox_label">
                        <input
                          type="checkbox"
                          // checked="checked"
                          onClick={(e) => manage(e, "geothermal")}
                        />
                        <span className="checkmark">
                          <img
                            src={require("../../assets/icons/geothermal.svg")}
                            alt="img"
                          />
                        </span>
                        <span className="checkmark_txt">Geothermal</span>
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="indursty_services_checkbox">
                      <label className="services_checkbox_label">
                        <input
                          type="checkbox"
                          onClick={(e) => manage(e, "wind")}
                        />
                        <span className="checkmark">
                          <img
                            src={require("../../assets/icons/wind-turbine.svg")}
                            alt="img"
                          />
                        </span>
                        <span className="checkmark_txt">Wind</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="next_btn_area">
                  <button
                    onClick={
                      // () => add()
                      () =>
                        props.history.push("signuponlinepresence", {
                          details: _props.details,
                          comapnyAddress: _props.comapnyAddress,
                          addressSecond: _props.addressSecond,
                          zip: _props.zip,
                          city: _props.city,
                          conpanySize: _props.companySize,
                          industry:JSON.stringify(arr)
                        })
                    }
                    className="btn next_btn"
                  >
                    NEXT
                  </button>
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
