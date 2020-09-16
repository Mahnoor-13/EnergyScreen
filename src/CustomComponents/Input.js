import React from "react";
import "./responsive.css";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isEditTagLine: false,
      isEditAboutUs: false,
      connectionId: "",
      password: "",
      aboutus: `Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in
      voluptate.`,
      tagline: `Write a tagline that explains more about you…`,
    };
  }

  render() {
    const { props } = this;
    return (
      <form>
        <div className="form-group">
          <textarea
            style={{ margin: "0 auto" }}
            className="form-control text-area-tagline"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Write a tagline that explains more about you…"
            value={props.value}
            name={props.name}
            onChange={(e) => props.onChange(e)}
          ></textarea>
          <div>
            <div className="btn tarea-done" onClick={() => props.onClick()}>
              Done
            </div>
            <div className="btn tarea-cancel" onClick={() => props.cancel()}>
              Cancel
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default App;
