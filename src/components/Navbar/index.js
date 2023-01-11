import { Component } from "react";

import { Link, withRouter } from "react-router-dom";

import { MdLogout } from "react-icons/md";

import "./index.css";

class Navbar extends Component {
  logoutTriggered = () => {
    localStorage.removeItem("activities");
    localStorage.removeItem("masterUserDetails");
    localStorage.removeItem("studentUserDetails");
    const { history } = this.props;
    history.replace("/");
  };

  render() {
    return (
      <nav className="nav-main-container">
        <div>
          <h1 className="nav-main-title">You tell, I do</h1>
        </div>
        <ul className="nav-list-container">
          <Link to="/master/home">
            <li>
              <button className="nav-button">Master</button>
            </li>
          </Link>
          <Link to="/student/home">
            <li>
              <button className="nav-button">Student</button>
            </li>
          </Link>
          <li>
            <MdLogout
              size={25}
              color="#ffffff"
              onClick={this.logoutTriggered}
              className="nav-logout-button"
            />
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Navbar);
