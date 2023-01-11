import { Component } from "react";

import { v4 as uuidv4 } from "uuid";

import "./index.css";

import Navbar from "../../Navbar";

import StudentActivity from "../StudentActivity";

export default class StudentHome extends Component {
  state = { num1: "", num2: "", method: "+", answer: "", activityList: [] };

  componentDidMount() {
    this.setState({
      activityList: JSON.parse(localStorage.getItem("activities")),
    });
  }

  num1Change = (event) => {
    this.setState({
      num1: parseInt(event.target.value),
    });
  };

  num2Change = (event) => {
    this.setState({
      num2: parseInt(event.target.value),
    });
  };

  methodChange = (event) => {
    this.setState({
      method: event.target.value,
    });
  };

  findNum = (num) => {
    function zero(operation) {
      return operation ? operation(0) : 0;
    }
    function one(operation) {
      return operation ? operation(1) : 1;
    }
    function two(operation) {
      return operation ? operation(2) : 2;
    }
    function three(operation) {
      return operation ? operation(3) : 3;
    }
    function four(operation) {
      return operation ? operation(4) : 4;
    }
    function five(operation) {
      return operation ? operation(5) : 5;
    }
    function six(operation) {
      return operation ? operation(6) : 6;
    }
    function seven(operation) {
      return operation ? operation(7) : 7;
    }
    function eight(operation) {
      return operation ? operation(8) : 8;
    }
    function nine(operation) {
      return operation ? operation(9) : 9;
    }

    switch (num) {
      case 0:
        return zero;

      case 1:
        return one;

      case 2:
        return two;

      case 3:
        return three;

      case 4:
        return four;

      case 5:
        return five;

      case 6:
        return six;

      case 7:
        return seven;

      case 8:
        return eight;

      case 9:
        return nine;

      default:
        return null;
    }
  };

  findMethod = (method) => {
    function plus(num) {
      return function (a) {
        return a + num;
      };
    }
    function minus(num) {
      return function (a) {
        return a - num;
      };
    }
    function times(num) {
      return function (a) {
        return a * num;
      };
    }
    function divided_by(num) {
      return function (a) {
        return Math.floor(a / num);
      };
    }

    switch (method) {
      case "+":
        return plus;
      case "-":
        return minus;
      case "x":
        return times;
      case "/":
        return divided_by;

      default:
        return null;
    }
  };

  submitTriggered = (event) => {
    event.preventDefault();
    const { num1, num2, method } = this.state;

    if (num1 !== "" && num2 !== "" && method !== "") {
      let firstNum = this.findNum(num1);
      let secondNum = this.findNum(num2);
      let calculationMethod = this.findMethod(method);

      let functionMethod = firstNum(calculationMethod(secondNum()));

      this.setState({
        answer: functionMethod,
      });

      let getList = JSON.parse(localStorage.getItem("activities"));

      let content = {
        id: uuidv4(),
        num1,
        num2,
        method,
        solution: functionMethod,
      };

      if (getList === null) {
        localStorage.setItem("activities", JSON.stringify([content]));
      } else {
        getList.push(content);
        localStorage.setItem("activities", JSON.stringify(getList));
      }
      this.setState({
        activityList: JSON.parse(localStorage.getItem("activities")),
      });
    }
  };

  removeItem = (idValue) => {
    const { activityList } = this.state;

    let removeList = activityList.filter((each) => each.id !== idValue);

    localStorage.setItem("activities", JSON.stringify(removeList));

    this.setState({
      activityList: JSON.parse(localStorage.getItem("activities")),
    });
  };

  render() {
    const { activityList, answer } = this.state;

    const validating = localStorage.getItem("studentUserDetails");

    if (validating === null) {
      return window.location.replace("/student/signup");
    }

    return (
      <div className="student-home-main-container">
        <Navbar />
        <div className="student-home-card">
          <h1 className="student-home-title">STUDENT</h1>
          <h1 className="student-home-sub-heading">Provide values</h1>
          <div className="student-home-sub-containers">
            <div>
              <form
                className="student-home-form-card"
                onSubmit={this.submitTriggered}
              >
                <div>
                  <label className="student-home-label" htmlFor="first-num">
                    FIRST NUMBER
                  </label>
                  <br />
                  <input
                    id="first-num"
                    className="first-num-input"
                    type="number"
                    onChange={this.num1Change}
                  />
                </div>
                <div>
                  <label className="student-home-label" htmlFor="method">
                    METHOD
                  </label>
                  <br />
                  <select
                    id="method"
                    className="student-home-select"
                    onChange={this.methodChange}
                  >
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="x">x</option>
                    <option value="/">/</option>
                  </select>
                </div>
                <div>
                  <label className="student-home-label" htmlFor="second-num">
                    SECOND NUMBER
                  </label>
                  <br />
                  <input
                    className="second-num-input"
                    id="second-num"
                    type="number"
                    onChange={this.num2Change}
                  />
                </div>
                <br />
                <div>
                  <button type="submit" className="student-submit-button">
                    Submit
                  </button>
                </div>
              </form>
              {answer !== "" && <h1>Answer: {answer}</h1>}
            </div>
            <div className="student-home-activity">
              <h1 className="student-home-activity-title">Activities</h1>
              <StudentActivity
                activityList={activityList}
                removeItem={this.removeItem}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
