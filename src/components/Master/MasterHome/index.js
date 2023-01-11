import { Component } from "react";

import { Link, Redirect } from "react-router-dom";

import Navbar from "../../Navbar";
import MasterActivity from "../MasterActivity";

import "./index.css";

export default class MasterHome extends Component {
  render() {
    const validating = localStorage.getItem("masterUserDetails");

    if (validating === null) {
      return <Redirect to="/master/signup" />;
    }
    return (
      <div className="master-home-conatiner">
        <Navbar />
        <h1 className="master-home-title">Master</h1>
        <div className="master-content-card">
          <div className="master-qustion-card">
            <img
              src="https://res.cloudinary.com/dy0mnmvem/image/upload/v1673374125/master/7367529_3646394-removebg-preview_c978nz.png"
              className="teaching-image"
            />
            <p className="master-home-question">Do you have a question?</p>
            <Link to="/student/home">
              <button className="master-home-enter-value">
                Enter the Value
              </button>
            </Link>
          </div>
          <div className="master-home-activity">
            <h1 className="master-home-activity-title">Activities</h1>
            <MasterActivity />
          </div>
        </div>
      </div>
    );
  }
}
