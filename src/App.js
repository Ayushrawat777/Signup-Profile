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
        <Route path="/Signup-Profile" element={<SignupForm />} />
        <Route path="/Signup-Profile/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
