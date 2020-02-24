import React, { Component } from "react";
import axios from "axios";
import "./css/signup.css";

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class SignUp extends Component {
  state = {
    name: ""
  };

  memberSignup = () => {
    const send_param = {
      name: this.nameE.value,
      pw: this.pwE.value,
      email: this.emailE.value
    };
    axios
      .post("http://localhost:8080/member/signup", send_param)
      .then(returnData => {
        console.log(returnData);
        if (returnData.data.message) {
          this.setState({
            name: returnData.data.message
          });
        } else {
          alert("가입실패!❌");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (this.state.name) {
      return (
        <div>
          <h2>{this.state.name}님 회원가입 해주셔서 감사합니다✅</h2>
        </div>
      );
    } else {
      return (
        <div id="signup_header">
          <div id="signup_content">
            <h2>회원가입</h2>

            <label htmlFor="name">이름</label>
            <br />
            <input id="name" ref={ref => (this.nameE = ref)} />
            <br />
            <label htmlFor="pw">패스워드</label>
            <br />
            <input id="pw" type="password" ref={ref => (this.pwE = ref)} />
            <br />
            <label htmlFor="pw">이메일</label>
            <br />
            <input id="pw" ref={ref => (this.emailE = ref)} />
            <br />
            <label htmlFor="pw">전화번호</label>
            <br />
            <input id="pw" ref={ref => (this.phoneE = ref)} />
            <br />
            <button
              className="btn btn-warning btn-lg"
              onClick={this.memberSignup}
            >
              회원가입
            </button>
          </div>
        </div>
      );
    }
  }
}
export default SignUp;
