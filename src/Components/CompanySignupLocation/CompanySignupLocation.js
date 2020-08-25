import React,{useState} from "react";

function App({ ...props }) {
  const [_props] = useState(props.location.state);
  const [comapnyAddress, setCompanyAddress]=useState(props.location.state);
  const [city, setCity]=useState(props.location.state);
  const [addressSecond, setAddressSecond]=useState(props.location.state);
  const [zip, setZip]=useState(props.location.state);

  return (
    <div className="App" style={{backgroundColor:"white"}}>
      <section class="signUpIn_witget_area">
        <div class="container">
          <div class="signUpIn_title">
            <h2>Location</h2>
            <p>
              To be able to match you with freelancers, we need to know the
              location of your company
            </p>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="form_controlls_area">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Company Address"
                    onChange={(e) => setCompanyAddress(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Address (Second line)"
                    onChange={(e) => setAddressSecond(e.target.value)}
                  />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="City"
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Zip Code"
                        onChange={(e) => setZip(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div class="next_btn_area">
                  <button
                    onClick={() =>
                      props.history.push("signupcompanysize", {
                        details: _props.details,
                        comapnyAddress: comapnyAddress,
                        addressSecond: addressSecond,
                        zip: zip,
                        city: city,
                      })
                    }
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
