import { Component } from "react";

import { Link, Redirect } from "react-router-dom";

import "./index.css";

export default class StudentLogin extends Component {
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

  submitTriggred = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    if (username !== "" && password !== "") {
      const validUser = localStorage.getItem("studentUserDetails");
      if (validUser !== null) {
        const masterUserDetails = JSON.parse(validUser);
        if (
          username === masterUserDetails.username &&
          password === masterUserDetails.password
        ) {
          const { history } = this.props;
          history.replace("/student/home");
        }
      }
    }
  };

  render() {
    const { username, password } = this.state;

    const validating = localStorage.getItem("studentUserDetails");

    if (validating === null) {
      return <Redirect to="/student/signup" />;
    }
    return (
      <div className="login-main-container">
        <form className="login-card" onSubmit={this.submitTriggred}>
          <h1 className="login-heading">Login</h1>

          <label htmlFor="name" className="login-email-label">
            NAME
          </label>
          <input
            type="text"
            id="name"
            value={username}
            onChange={this.onChangeUserName}
            className="login-email-input"
          />
          <label htmlFor="password" className="login-password-label">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="login-password-input"
            value={password}
            onChange={this.onChangeUserPassword}
          />

          <div className="login-btn-card">
            <button className="login-card-signup-btn" type="submit">
              Signin
            </button>
          </div>
        </form>
        <div className="signin-login-card">
          <h1 className="login-greeting">Not Have an Account!</h1>
          <Link to="/student/signup">
            <button className="login-greeting-btn">Signup</button>
          </Link>
        </div>
      </div>
    );
  }
}
