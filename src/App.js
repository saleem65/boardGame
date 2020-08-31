import React from "react";
import ReactDom from "react-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Square from "./Square";
import Board from "./Board";
import Game from "./Game";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
