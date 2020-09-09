import React from "react";
import { useLayoutEffect } from "react";

class Reactlessons extends React.Component {
  render() {
    return (
      <form style={{ backgroundColor: "pink" }}>
        <div>
          <p style={{ backgroundColor: "yellow" }}>
            <h1> LEARN REACT IN URDU</h1>{" "}
          </p>

          <button
            style={{ backgroundColor: "pink" }}
            type="submit"
            value="Login"
          >
            Submit
          </button>

          <button
            style={{ margin: "10px", backgroundColor: "yellow" }}
            onClick={() => this.setState({ email: null, PassWord: null })}
          >
            REGISTER
          </button>
          <p>
            <div>
              <h2>TABLE OF CONTENTS {this.props.name}</h2>
              <div>
                <ul>
                  <li>Main Element(File)</li>
                  <li>Heading File</li>
                  <li>Paragraph File</li>
                  <li>Lable File</li>
                  <li>List File</li>
                  <li>Button File</li>
                  <li>Input File</li>
                  <li>Link File</li>
                  <li>Conditional File</li>
                </ul>
              </div>
            </div>
          </p>
        </div>
      </form>
    );
  }
}

export default Reactlessons;
