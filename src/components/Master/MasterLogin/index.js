import { Component } from "react";

import { Link, Redirect } from "react-router-dom";

import "./index.css";

export default class MasterLogin extends Component {
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
      const validUser = localStorage.getItem("masterUserDetails");
      if (validUser !== null) {
        const masterUserDetails = JSON.parse(validUser);
        if (
          username === masterUserDetails.username &&
          password === masterUserDetails.password
        ) {
          const { history } = this.props;
          history.replace("/master/home");
        }
      }
    }
  };

  render() {
    const { username, password } = this.state;

    const validating = localStorage.getItem("masterUserDetails");

    if (validating === null) {
      return <Redirect to="/master/signup" />;
    }
    return (
      <div className="master-login-main-container">
        <form className="master-login-card" onSubmit={this.submitTriggred}>
          <h1 className="master-login-heading">Login</h1>

          <label htmlFor="name" className="master-login-email-label">
            NAME
          </label>
          <input
            type="text"
            id="name"
            value={username}
            onChange={this.onChangeUserName}
            className="master-login-email-input"
          />
          <label htmlFor="password" className="master-login-password-label">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="master-login-password-input"
            value={password}
            onChange={this.onChangeUserPassword}
          />

          <div className="master-login-btn-card">
            <button className="master-login-card-signup-btn" type="submit">
              Signin
            </button>
          </div>
        </form>
        <div className="master-login-login-card">
          <h1 className="master-login-greeting">Not Have an Account!</h1>
          <Link to="/master/signup">
            <button className="master-login-greeting-btn">Signup</button>
          </Link>
        </div>
      </div>
    );
  }
}
