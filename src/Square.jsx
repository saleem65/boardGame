import React from "react";
class Square extends React.Component {
  render() {
    return (
      <button
        style={{ width: 80, height: 80 }}
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}
export default Square;
