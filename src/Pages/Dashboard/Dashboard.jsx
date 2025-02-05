
import React from "react";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <p>You are logged in!</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Dashboard;
