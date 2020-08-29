import React from "react";
class Square extends React.Component {
  state = {
    value: "Good",
    name: "Change Back Ground Color",
    changeColor: false,
  };

  render() {
    //console.log("code is runnng...");
    return (
      <div
        style={{
          backgroundColor:
            this.state.changeColor === true ? "red" : "transparent",
        }}
      >
        <p s>
          <h1> "TICK TOC GAME..square calss..."</h1>
        </p>

        <br />
        <button
          onClick={() => {
            this.setState({ value: 123 });
          }}
          style={{ padding: 20, backgroundColor: "yellow" }}
        >
          {this.state.value}
        </button>
        <button
          onClick={() => {
            this.setState({ value: 123 });
          }}
          style={{ padding: 20, backgroundColor: "yellow" }}
        >
          {this.state.value}
        </button>
        <button
          onClick={() => {
            this.setState({ value: 123 });
          }}
          style={{ padding: 20, backgroundColor: "yellow" }}
        >
          {this.state.value}
        </button>
        <br />

        <button
          onClick={() => {
            this.setState({ value: 123 });
          }}
          style={{ padding: 20, backgroundColor: "yellow" }}
        >
          {this.state.value}
        </button>
        <button
          onClick={() => {
            this.setState({ value: 123 });
          }}
          style={{ padding: 20, backgroundColor: "yellow" }}
        >
          {this.state.value}
        </button>
        <button
          onClick={() => {
            this.setState({ value: 123 });
          }}
          style={{ padding: 20, backgroundColor: "yellow" }}
        >
          {this.state.value}
        </button>
        <br />
        <button
          onClick={() => {
            this.setState({ value: 123 });
          }}
          style={{ padding: 20, backgroundColor: "yellow" }}
        >
          {this.state.value}
        </button>
        <button
          onClick={() => {
            this.setState({ value: 123 });
          }}
          style={{ padding: 20, backgroundColor: "yellow" }}
        >
          {this.state.value}
        </button>
        <button
          onClick={() => {
            this.setState({ value: 123 });
          }}
          style={{ padding: 20, backgroundColor: "yellow" }}
        >
          {this.state.value}
        </button>
        <br />
        <button
          onClick={() => {
            this.setState({ changeColor: true });
          }}
          style={{ margin: 10, padding: 20, backgroundColor: "yellow" }}
        >
          {this.state.name}
        </button>
      </div>
    );
  }
}
export default Square;
