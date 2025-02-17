import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupForm from "./pages/signup";
import Profile from "./pages/profile";
import "./App.css"
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
