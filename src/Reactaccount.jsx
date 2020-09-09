import React from "react";
import Logo from "./Eye.png";

class Reactaccount extends React.Component {
  state = {
    email: null,
    password: null,
    eyeimag: true,
  };
  pwshowhide = () => {
    if (this.state.eyeimag === false) {
      console.log("eye is closed");
    } else {
      console.log("eye is open");
    }
  };
  pwShow = () => {};
  pwHide = () => {};

  render() {
    return (
      <form style={{ backgroundColor: "pink" }}>
        <div>
          <p style={{ backgroundColor: "yellow" }}>
            <h2>Creat Your React Account</h2>
          </p>
          <br />
          <input
            style={{
              margin: "10px",
              height: "40px",
              boxSizing: "50px",
            }}
            placeholder="Enter User Name "
            type="text"
            onChange={(data) => {
              console.log(data.target.value);
              this.setState({ password: data.target.value });
            }}
          ></input>
          <br />
          <br />
          {/* <button style={{ padding: "5px", margin: "5px", height: "40px" }}>
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Use my current email address as user name
            </a>
            <br />
            <br />
          </button> */}

          <br />
          <br />
          <img
            src={Logo}
            fill="#000000"
            height="20"
            viewBox="0 0 24 24"
            width="30"
            aria-hidden="true"
            focusable="false"
          />
          <br />
          <br />
          <input
            style={{ margin: "5px", height: "40px" }}
            placeholder="Enter Password"
            type="password"
            onChange={(data) => {
              console.log(data.target.value);
              this.setState({ password: data.target.value });
            }}
          ></input>
          <br />
          <br />
          <input
            style={{ margin: "10px", height: "40px" }}
            placeholder="Confirm Password"
            type="password"
            onChange={(data) => {
              console.log(data.target.value);
              this.setState({ password: data.target.value });
            }}
          ></input>
          <span class="JIzqne IMVfif"></span>
          <br />
          <button
            style={{
              margin: "10px",
              height: "40px",
              borderRadius: 20,
              borderColor: "red",
              backgroundColor: "yellow",
            }}
            onClick={() => this.setState({ email: null, PassWord: null })}
          >
            Register
          </button>
        </div>
      </form>
    );
  }
}

export default Reactaccount;
