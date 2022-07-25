import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentInfo from "./components/StudentInfo/StudentInfo";
import Login from "./components/Login/Login";
import ClassRoutine from "./components/ClassRoutine/ClassRoutine";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="student" element={<StudentInfo />}></Route>
        <Route path="classRoutine" element={<ClassRoutine />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
