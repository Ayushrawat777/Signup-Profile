/* import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "./authSlice";

const SignupForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // State to store form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
 // ✅ Redirect to Profile if user is already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
    }
  }, [isAuthenticated, navigate]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      alert("All fields are required!");
      return;
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Generate random access token
    const accessToken = Math.random().toString(36).substring(2) + Date.now().toString(36);

    // Store user details in local storage
    const userDetails = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password, // ⚠️ In real-world apps, never store passwords in local storage!
      accessToken: accessToken,
    };
    localStorage.setItem("user", JSON.stringify(userDetails));
    dispatch(signup({ user: formData, token }));
    // Success message
    alert("Signup Successful!");

    // Redirect to profile page
    navigate("/profile");
  };

  return (
    <div className="signup-container">
        <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form></div>
    </div>
  );
};

export default SignupForm;

 */

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "./authSlice";

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [error, setError] = useState(" ");
  const [message, setMessage] = useState(" ");
  // ✅ Redirect to Profile if user is already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      setMessage("Successfully Signed Up!");
      navigate("/profile");
    }
  }, [isAuthenticated, navigate]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Check if all fields are filled
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Error: All the fields are mandatory");
      return;
    }

    // ✅ Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // ✅ Generate random access token
    const accessToken =
      Math.random().toString(36).substring(2) + Date.now().toString(36);

    // ✅ Store user details in Redux
    dispatch(
      signup({
        user: {
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password, 
          token: accessToken,
        },
      })
    );
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <p style={{ color: "#c00303" }} className="text">
          {error}
        </p>
        <p style={{ color: "#008e06" }} className="text">
          {message}
        </p>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;
