import React from "react";
class Formsaleem extends React.Component {
  state = {
    email: null,
    password: null,
  };

  render() {
    console.log("render");
    return (
      <form style={{ backgroundColor: "pink" }}>
        <div>
          <p style={{ backgroundColor: "yellow" }}>
            <h2> login Form To Learn React In Urdu</h2>{" "}
          </p>
          <label>Login</label>
          <input
            style={{ margin: "20px" }}
            placeholder="Enter  username"
            onChange={(data) => {
              console.log(data.target.value);
              this.setState({ email: data.target.value });
            }}
          ></input>

          <br />
          <label>Password</label>
          <input
            style={{ margin: "10px" }}
            onChange={(data) => {
              console.log(data.target.value);
              this.setState({ password: data.target.value });
            }}
            placeholder="Enter  password"
            type="password"
          ></input>
          <br />
          <br />
          <button
            style={{ backgroundColor: "yellow" }}
            type="submit"
            value="Login"
          >
            Submit
          </button>

          {/* <button
            style={{ margin: "10px" }}
            onClick={() => this.setState({ email: null, PassWord: null })}
          >
            Clear
          </button> */}
          <p>
            <h3>Not register yet, Register now</h3>
          </p>
          <button
            style={{ margin: "10px", backgroundColor: "yellow" }}
            onClick={() => this.setState({ email: null, PassWord: null })}
          >
            REGISTER
          </button>
        </div>
      </form>
    );
  }
}

export default Formsaleem;
