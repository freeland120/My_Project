import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div>
        <label htmlFor="name">이름</label>
        <br />
        <input id="name" ref={ref => (this.nameE = ref)} />
        <br />
        <label htmlFor="pw">패스워드</label>
        <br />
        <input id="pw" type="password" ref={ref => (this.pwE = ref)} />
        <br />
      </div>
    );
  }
}

export default Menu;
