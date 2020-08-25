import React, { useState } from "react";

function App({ ...props }) {
  const [_props] = useState(props.location.state);
  const [companyWebsite, setCompanyWebsite] = useState("");

  return (
    <div className="App" style={{backgroundColor:"white"}}>
      <section class="signUpIn_witget_area">
        <div class="container">
          <div class="signUpIn_title">
            <h2>Online presence</h2>
            <p>Do you have a Company website?</p>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="form_controlls_area">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Company Website"
                    onChange={(e) => setCompanyWebsite(e.target.value)}
                  />
                </div>
                <div class="next_btn_area">
                  <button
                    class="btn next_btn"
                    onClick={() =>
                      props.history.push("signupuploadlogo", {
                        details: _props.details,
                        comapnyAddress: _props.comapnyAddress,
                        addressSecond: _props.addressSecond,
                        zip: _props.zip,
                        city: _props.city,
                        conpanySize: _props.companySize,
                        industry: _props.industry,
                        companyWebsite: companyWebsite,
                      })
                    }
                  >
                    NEXT
                  </button>
                </div>
                <div class="skip_btn_area">
                  <button
                    // onClick={()=>props.history.goBack()}
                    onClick={() =>
                      props.history.push("signupuploadlogo", {
                        details: _props.details,
                        comapnyAddress: _props.comapnyAddress,
                        addressSecond: _props.addressSecond,
                        zip: _props.zip,
                        city: _props.city,
                        conpanySize: _props.companySize,
                        industry: _props.industry,
                        companyWebsite: companyWebsite,
                      })
                    }
                    class="btn skip_btn"
                  >
                    Skip
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
