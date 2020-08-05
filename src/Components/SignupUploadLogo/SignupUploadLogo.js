import React, { useState } from "react";
import "../../App.css"
function App({ ...props }) {
  const [_props] = useState(props.location.state);
  const [uploadLogo, setUploadLogo] = useState("");

  const add = () => {
    let _subProps = _props;
    _subProps.uploadLogo = uploadLogo;
    fetch("http://localhost:1994/companyusers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: _subProps }),
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        // alert(JSON.stringify(data));
        props.history.push("home");
      })
      .catch(e=>console.log(e))
  };

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
                {uploadLogo !== "" ? (
                  <img for="upload_pic" src={`${uploadLogo}`} class="logo-img" />
                ) : (
                  <div class="form-group text-center">
                    <label for="upload_pic" class="upload_pic">
                      Upload Picture
                    </label>
                    <input
                      type="file"
                      class="form-control-file upload_pic_input"
                      id="upload_pic"
                      onChange={(e) => {
                        setUploadLogo(URL.createObjectURL(e.target.files[0]));
                      }}
                    />
                  </div>
                )}
                <div class="next_btn_area">
                  <button class="btn next_btn" onClick={() => add()}>
                    NEXT
                  </button>
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
