import React, { useState } from "react";
import "../../App.css";
import Loader from "react-loader-spinner";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import * as firebase from "firebase";
import uuid from "uuid";

function App({ ...props }) {
  const [_props] = useState(props.location.state);
  const [uploadLogo, setUploadLogo] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);

  const createUser = () => {
    let _subProps = _props;
    _subProps.uploadLogo = uploadLogo;
    setCreatingUser(true);
    // fetch("http://3.136.83.24:1994/companyusers", {
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
        setCreatingUser(false);
        localStorage.setItem("email", _subProps.details.companyEmailAddress);
        props.history.push("home");
      })
      .catch((e) => {
        NotificationManager.error("Operation failed");
        console.log("e", e);
        setCreatingUser(false);
      });
  };

  const uploadImageAsync = async (uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    const ref = firebase.storage().ref().child(uuid.v4());
    const snapshot = await ref.put(blob);

    // We're done with the blob, close and release it
    // blob.close();
    // this.setState({imageIndex: this.state.imageIndex + 1});
    // this.setState({isLoading: false});
    let getDownloadURL = await snapshot.ref.getDownloadURL();
    setUploadLogo(getDownloadURL);
    return getDownloadURL;
  };

  return (
    <div className="App" style={{ backgroundColor: "white" }}>
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
                  <img
                    for="upload_pic"
                    src={`${uploadLogo}`}
                    class="logo-img"
                  />
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
                        uploadImageAsync(
                          URL.createObjectURL(e.target.files[0])
                        );
                      }}
                    />
                  </div>
                )}
                <div class="next_btn_area">
                  <button
                    class="btn next_btn"
                    disabled={creatingUser ? true : false}
                    onClick={() => createUser()}
                  >
                    {creatingUser ? (
                      <Loader
                        type="Circles"
                        color="white"
                        height={20}
                        width={20}
                      />
                    ) : (
                      "Next"
                    )}
                  </button>
                </div>
                <div class="skip_btn_area">
                  <button
                    onClick={() => props.history.goBack()}
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
      <div style={{ marginTop: "5%" }}>
        <NotificationContainer />
      </div>
    </div>
  );
}

export default App;
