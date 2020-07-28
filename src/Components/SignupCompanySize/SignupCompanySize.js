
  


  import React from "react";

  function App({...props}) {
    return (
      <div className="App">
       
  <section class="signUpIn_witget_area">
    <div class="container">
      <div class="signUpIn_title">
        <h2>Company size</h2>
        <p>
            What is your company size?
        </p>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form_controlls_area">
              <div class="form-group">
                  <div class="custom-select-2">
                      <select>
                          <option>Company Size</option>
                          <option>1 - 100 employees</option>
                          <option>101 - 1000 employees</option>
                          <option>1000+ employees</option>
                      </select>
                  </div>
              </div>


            <div class="next_btn_area">
              <button onClick={()=>props.history.push("signupindustry")} class="btn next_btn">NEXT</button>
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
  
  
  
  