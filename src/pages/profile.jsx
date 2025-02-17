import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./authSlice";
const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user1 = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // Retrieve user data from local storage
  const user = JSON.parse(localStorage.getItem("user"));


  // ✅ Redirect to Signup if user is not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/Signup-Profile");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => { localStorage.removeItem("user");
    alert("Logged out successfully!");
    dispatch(logout());
    navigate("/Signup-Profile");
  };

  if (!user1) return <p>Loading...</p>;
  return (
    <div className="profile-container">
       <h2>Profile</h2>
      <h2>Full Name: {user?.fullName}!</h2>
      <h2>Email: {user?.email}</h2>
      <h2>Password: {user?.password}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
