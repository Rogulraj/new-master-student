import { Component } from "react";

import { Link } from "react-router-dom";

import "./index.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home-main-container">
        <h1 className="home-title">Welcom to YOU TELL, I DO !!</h1>
        <div className="home-main-card">
          <h1 className="home-sub-title">CHOOSE YOUR ROLE</h1>
          <p className="home-description">If you are a Teacher</p>
          <Link to="/master/signup">
            <button className="home-button" type="button">
              Teacher
            </button>
          </Link>
          <p className="home-description">If you are a Student</p>
          <Link to="/student/signup">
            <button className="home-button" type="button">
              Student
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
