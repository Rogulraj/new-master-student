import { Component } from "react";
import { Link } from "react-router-dom";

import "./index.css";

export default class MasterSignup extends Component {
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
      const masterUserDetails = {
        username,
        password,
      };
      const convertToString = JSON.stringify(masterUserDetails);
      localStorage.setItem("masterUserDetails", convertToString);
      window.location.replace("/master/login");
    }
  };

  render() {
    const { username, password } = this.state;

    const userValidate = JSON.parse(localStorage.getItem("masterUserDetails"));
    return (
      <div className="master-signup-main-container">
        <div className="master-signup-login-card">
          <h1 className="master-signup-greeting">Welcome Back!</h1>
          <Link to="/master/login">
            <button className="master-signup-greeting-btn">Signin</button>
          </Link>
        </div>
        <form className="master-signup-card" onSubmit={this.signupTriggered}>
          <h1 className="master-signup-heading">Create an Account</h1>

          <label htmlFor="username" className="master-signup-email-label">
            NAME
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={this.onChangeUserName}
            className="master-signup-email-input"
          />
          <label htmlFor="password" className="master-signup-password-label">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="master-signup-password-input"
            value={password}
            onChange={this.onChangeUserPassword}
          />

          <div className="master-signup-btn-card">
            <button className="master-signup-card-signup-btn" type="submit">
              Signup
            </button>
          </div>
        </form>
      </div>
    );
  }
}
