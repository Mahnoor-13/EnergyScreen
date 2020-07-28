import React from "react";

function App({...props}) {
  return (
    <div className="App">
        
  <section class="signUpIn_witget_area">
    <div class="container">
      <div class="signUpIn_title">
        <h2>Online presence</h2>
        <p>
            Do you have a Company website?
        </p>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form_controlls_area">
              <div class="form-group">
                <input type="email" class="form-control" placeholder="Company Website" />
              </div>
              <div class="next_btn_area">
                <button class="btn next_btn" onClick={()=>props.history.push("signupuploadlogo")}>NEXT</button>
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
