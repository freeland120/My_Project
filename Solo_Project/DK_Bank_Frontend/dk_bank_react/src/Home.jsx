import React, { Component } from "react";
import LoginButton from "./LoginButton";
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <p>
          이 곳은 내가 재배한 농산물만을 파는 곳입니다. 정해진 양식에 맞춰서
          자유롭게 상품을 등록해주세요!🍅🍄🍉🍇🍓
        </p>
        <div>
          <LoginButton />
        </div>
      </div>
    );
  }
}

export default Home;
