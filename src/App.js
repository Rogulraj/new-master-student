import { Route, Routes, BrowserRouter } from "react-router-dom";

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
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/master/signup" element={<MasterSignup />} />
        <Route exact path="/master/login" element={<MasterLogin />} />
        <Route exact path="/master/home" element={<MasterHome />} />
        <Route exact path="/student/signup" element={<StudentSignup />} />
        <Route exact path="/student/login" element={<StudentLogin />} />
        <Route exact path="/student/home" element={<StudentHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
