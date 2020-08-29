import React from "react";
import ReactDom from "react-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Square from "./Square";

class App extends React.Component {
  state = null;
  render() {
    return (
      <div className="App">
        <Square />
      </div>
    );
  }
}

export default App;
