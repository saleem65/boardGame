import React from "react";
class Square extends React.Component {
  state = {
    value: null,
    name: "Change Back Ground Color",
    changeColor: false,
    xIsNext: true,
    move: "",
    move1: "X",
    // move2: "Y",
  };

  selectPlayer = () => {
    console.log("Click happened");
    const { move1 } = this.state;
    if (move1) {
      console.log("Xb");
    } else {
      console.log("Yb");
    }
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
          <h1> TICK TOC GAME</h1>
          <h4> SELECT FIRST PLAYER..X</h4>
          <h4> SELECT SECOND PLAYER..O</h4>
        </p>

        <br />
        <button
          onClick={() => this.selectPlayer()}
          style={{ padding: 20, backgroundColor: "yellow" }}
        >
          {this.state.value}
        </button>
        {/* <button
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
        <br />*/}
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
