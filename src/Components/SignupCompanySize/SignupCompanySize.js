import React, { useState } from "react";
import "../../App.css"
function App({ ...props }) {
  const [_props] = useState(props.location.state);
  const [companySize, setCompanySize] = useState("");
  return (
    <div className="App" style={{backgroundColor:"white"}}>
      <section class="signUpIn_witget_area">
        <div class="container">
          <div class="signUpIn_title">
            <h2>Company size</h2>
            <p>What is your company size?</p>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="form_controlls_area">
                <div class="form-group">
                  {/* <div class="custom-select-2"> */}
                  <div class="">

                    <select className="select-options" onChange={(e)=> setCompanySize(e.target.value)}>
                      <option value="0">Company Size</option>
                      <option value="1 - 100 employees">1 - 100 employees</option>
                      <option value="101 - 1000 employees">101 - 1000 employees</option>
                      <option value="1000+ employees">1000+ employees</option>
                    </select>
                  </div>
                </div>

                <div class="next_btn_area">
                  <button
                    onClick={() => props.history.push("signupindustry",{
                      details: _props.details,
                      comapnyAddress: _props.comapnyAddress,
                      addressSecond: _props.addressSecond,
                      zip: _props.zip,
                      city: _props.city,
                      conpanySize: companySize
                    })}
                    class="btn next_btn"
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
