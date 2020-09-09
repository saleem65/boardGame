import React from "react";
import Logo1 from "./Eye.png";

class Togimage extends React.Component {
  state = {
    tog1: true,
    tog2: (
      <img
        src={Logo1}
        fill="#000000"
        height="20"
        viewBox="0 0 24 24"
        width="30"
        aria-hidden="true"
        focusable="false"
      />
    ),
  };

  togImage = () => {
    if (this.state.tog1 !== true) {
      console.log("eye is closed...");
      this.setState();
    } else {
      console.log("eye is open...");
    }
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.togImage();
          }}
        >
          <img
            src={Logo1}
            fill="#000000"
            height="20"
            viewBox="0 0 24 24"
            width="30"
            aria-hidden="true"
            focusable="false"
          />
        </button>
      </div>
    );
  }
}
export default Togimage;
