import React, { Component } from "react";
import Home from "./Home";
import SignUp from "./SignUp";
import Product from "./Product";
import Show from "./Show";
import { Route, NavLink, HashRouter } from "react-router-dom";

class App extends Component {
  /* constructor(props) {
    this.state = {
      visible: false
    };
  } */
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">🌾DK's Product Mall🍖</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                HOME🍲
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign Up📞</NavLink>
            </li>
            <li>
              <NavLink to="/product">Upload Product🌽</NavLink>
            </li>
            <li>
              <NavLink to="/show">Show Goods🎁</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/signup" component={SignUp}></Route>
            <Route exact path="/product" component={Product}></Route>
            <Route exact path="/show" component={Show}></Route>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
