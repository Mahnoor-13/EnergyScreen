import React from "react";

function App({ ...props }) {
  console.log(props)
  return (
    <div className="App">
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
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Address (Second line)"
                  />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="City"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Zip Code"
                      />
                    </div>
                  </div>
                </div>

                <div class="next_btn_area">
                  <button
                    onClick={() => props.history.push("signupcompanysize")}
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
