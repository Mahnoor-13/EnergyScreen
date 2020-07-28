import React from "react";

function App({...props}) {
  return (
    <div className="App">
      <section class="signUpIn_witget_area">
        <div class="container">
          <div class="signUpIn_title">
            <h2>Logo</h2>
            <p>
              It is better for a company to add their logo as they will be
              recognized and interacted with easier
            </p>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="form_controlls_area">
                <div class="form-group text-center">
                  <label for="upload_pic" class="upload_pic">
                    Upload Picture
                  </label>
                  <input
                    type="file"
                    class="form-control-file upload_pic_input"
                    id="upload_pic"
                  />
                </div>
                <div class="next_btn_area">
                  <button class="btn next_btn" onClick={()=>props.history.push("home")}>NEXT</button>
                </div>
                <div class="skip_btn_area">
                  <button class="btn skip_btn">Skip</button>
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
