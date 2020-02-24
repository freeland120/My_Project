import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div id="signup_header">
        <div id="signup_content">
          <h2>농산물 등록하기</h2>

          <label htmlFor="name">제품명</label>
          <br />
          <input id="name" ref={ref => (this.nameE = ref)} />
          <br />
          <label htmlFor="pw">제품종류</label>
          <br />
          <input id="pw" ref={ref => (this.pwE = ref)} />
          <br />
          <label htmlFor="pw">생산지</label>
          <br />
          <input id="pw" ref={ref => (this.emailE = ref)} />
          <br />
          <label htmlFor="pw">생산날짜</label>
          <br />
          <input id="pw" ref={ref => (this.phoneE = ref)} />
          <br />

          <button
            className="btn btn-success btn-lg"
            onClick={this.memberInsert}
          >
            등록하기
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
