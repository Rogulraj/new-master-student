import { Component } from "react";
import { Link } from "react-router-dom";

import "./index.css";

export default class StudentSignup extends Component {
  state = { username: "", password: "" };

  onChangeUserName = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onChangeUserPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  signupTriggered = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    if (username !== "" && password !== "") {
      const studentUserDetails = {
        username,
        password,
      };
      const convertToString = JSON.stringify(studentUserDetails);
      localStorage.setItem("studentUserDetails", convertToString);
      window.location.replace("/student/login");
    }
  };

  render() {
    const { username, password } = this.state;

    const userValidate = JSON.parse(localStorage.getItem("studentUserDetails"));

    return (
      <div className="signup-main-container">
        <div className="signup-login-card">
          <h1 className="signup-greeting">Welcome Back!</h1>
          <Link to="/student/login">
            <button className="signup-greeting-btn">Signin</button>
          </Link>
        </div>
        <form className="signup-card" onSubmit={this.signupTriggered}>
          <h1 className="signup-heading">Create an Account</h1>

          <label htmlFor="username" className="signup-email-label">
            NAME
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={this.onChangeUserName}
            className="signup-email-input"
          />
          <label htmlFor="password" className="signup-password-label">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="signup-password-input"
            value={password}
            onChange={this.onChangeUserPassword}
          />

          <div className="signup-btn-card">
            <button className="signup-card-signup-btn" type="submit">
              Signup
            </button>
          </div>
        </form>
      </div>
    );
  }
}
