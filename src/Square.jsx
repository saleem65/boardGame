import React from "react";
class Square extends React.Component {
  state = {
    value: null,
  };

  render() {
    return (
      <button style={{ padding: 30 }} onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}
export default Square;
