import React, { Component } from "react";
import "./css/loginbutton.css";
class LoginButton extends Component {
  render() {
    return (
      <button
        id="roundButton"
        className="btn btn-info btn-lg"
        onMouseDown={this.props.handleMouseDown}
      >
        로그인하기
      </button>
    );
  }
}

export default LoginButton;
