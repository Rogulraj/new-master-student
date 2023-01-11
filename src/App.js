import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./App.css";

import MasterHome from "./components/Master/MasterHome";
import StudentHome from "./components/Student/StudentHome";
import MasterSignup from "./components/Master/MasterSingup";
import MasterLogin from "./components/Master/MasterLogin";
import StudentSignup from "./components/Student/StudentSignup";
import StudentLogin from "./components/Student/StudentLogin";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/master/signup" component={MasterSignup} />
        <Route exact path="/master/login" component={MasterLogin} />
        <Route exact path="/master/home" component={MasterHome} />
        <Route exact path="/student/signup" component={StudentSignup} />
        <Route exact path="/student/login" component={StudentLogin} />
        <Route exact path="/student/home" component={StudentHome} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
