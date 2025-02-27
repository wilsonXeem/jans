import "./App.css";

import Homepage from "./components/Homepage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Vote from "./components/Vote";
import Login from "./components/Login";
import Code from "./components/Code";

function App() {
  return (
    <div className="app">
      <div className="log">
        <div className="logo"></div>
        <h1>JOINT ASSOCIATION OF NATURAL SCIENCE STUDENTS, JANSS.</h1>
      </div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/vote/:code" exact element={<Vote />} />
          <Route path="/admin/generate-code" exact element={<Code />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
