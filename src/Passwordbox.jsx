import React from "react";

class Passwordbox extends React.Component {
  state = {
    icon: "eye-off",
    password: true,
  };
  changeicon = () => {
    this.state.eye === "eye"
      ? this.setState({ icon: "data" })
      : this.setState({ password: "data" });
  };

  render() {
    const { lable, icon, changeicon } = this.props;
    return (
      <div>
        <floatingLable>
          <icon />
          <label>{lable}</label>
          <input
            style={{ backgroundColor: "yellow" }}
            secureTextEntry={this.state.password}
            onChangeText={(e) => onchange(e)}
          ></input>
          <icon name={this.state.icon} onPress={() => this.changeicon()}></icon>
        </floatingLable>
      </div>
    );
  }
}

export default Passwordbox;
