import React from "react";
class Board extends React.Component {
  history = [
    // Before first move
    {
      squares: [null, null, null, null, null, null, null, null, null],
    },
    // After first move
    {
      squares: [null, null, null, null, "X", null, null, null, null],
    },
    // After second move
    {
      squares: [null, null, null, null, "X", null, null, null, "O"],
    },
    // ...
  ];

  render() {
    return (
      <div>
        {/* <div className="status"></div> */}
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
