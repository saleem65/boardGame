import React from "react";
class Calculator extends React.Component {
  state = {
    num1: null,
    num2: null,
    operator: null,
    result: null,
  };

  calculateResult = () => {
    var result = null;
    if (this.state.operator === "+") {
      result = this.state.num1 + this.state.num2;
    } else if (this.state.operator === "-") {
      result = this.state.num1 - this.state.num2;
    } else if (this.state.operator === "*") {
      result = this.state.num1 * this.state.num2;
    } else if (this.state.operator === "/") {
      result = this.state.num1 / this.state.num2;
    }

    return result;
  };
  // code with ternary operator........
  //this.state.operator
  // setInput = (data) => {
  //   this.state.operator === null
  //     ? this.setState({ num1: data })
  //     : this.setState({ num2: data });
  // };

  setInput = (data) => {
    if (this.state.operator === null) {
      this.setState({ num1: data });
    }
    if (this.state.operator !== null) {
      this.setState({ num2: data });
      if (this.state.result !== null) {
        this.setState({ num1: this.state.result, num2: data, result: null });
      }
    }
  };

  render() {
    //console.log(this.state);
    return (
      <div style={{ backgroundColor: "pink" }}>
        <br />
        <br />
        <p>Simple Calculator Application</p>

        <p>
          {this.state.num1 +
            "  " +
            this.state.operator +
            "  " +
            this.state.num2 +
            "  =  " +
            this.state.result}
        </p>

        <button style={{ width: "80px", height: "80px" }}>@</button>
        <button
          style={{ width: "80px", height: "80px" }}
          onClick={() => this.setInput(0)}
        >
          0
        </button>
        <button
          style={{ width: "80px", height: "80px" }}
          onClick={() => this.setInput(1)}
        >
          1
        </button>
        <button
          style={{ width: "80px", height: "80px" }}
          onClick={() => this.setInput(2)}
        >
          2
        </button>
        <br />
        <button
          style={{ width: "80px", height: "80px" }}
          onClick={() => this.setInput(3)}
        >
          3
        </button>
        <button
          style={{ width: "80px", height: "80px" }}
          onClick={() => this.setInput(4)}
        >
          4
        </button>
        <button
          style={{ width: "80px", height: "80px" }}
          onClick={() => this.setInput(5)}
        >
          5
        </button>
        <button
          style={{ width: "80px", height: "80px" }}
          onClick={() => this.setInput(6)}
        >
          6
        </button>
        <br />
        <button
          style={{ width: "80px", height: "80px" }}
          onClick={() => this.setInput(7)}
        >
          7
        </button>
        <button
          style={{ width: "80px", height: "80px" }}
          onClick={() => this.setInput(8)}
        >
          8
        </button>
        <button
          style={{ width: "80px", height: "80px" }}
          onClick={() => this.setInput(9)}
        >
          9
        </button>
        <button style={{ width: "80px", height: "80px" }}>#</button>

        <br />
        <br />
        <button
          onClick={() => this.setState({ operator: "+" })}
          style={{ width: "80px", height: "80px" }}
        >
          +
        </button>
        <button
          onClick={() => this.setState({ operator: "-" })}
          style={{ width: "80px", height: "80px" }}
        >
          -
        </button>
        <button
          onClick={() => this.setState({ operator: "*" })}
          style={{ width: "80px", height: "80px" }}
        >
          *
        </button>
        <button
          onClick={() => this.setState({ operator: "/" })}
          style={{ width: "80px", height: "80px" }}
        >
          /
        </button>
        <br />
        <br />

        <button
          onClick={() =>
            this.setState({
              result: this.calculateResult(),
            })
          }
          style={{ backgroundColor: "green", padding: 10 }}
        >
          CALCULATE
        </button>
        <button
          onClick={() =>
            this.setState({
              num1: null,
              operator: null,
              num2: null,
              result: null,
            })
          }
          style={{ margin: "20px", backgroundColor: "red" }}
        >
          Clear
        </button>
        <br />
        <br />
      </div>
    );
  }
}
export default Calculator;
