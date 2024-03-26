// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css'; // Import CSS file

const Dashboard = ({ onLogout, children }) => {
  const handleLogout = () => {
    // Call onLogout function to perform logout action
    onLogout();
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome to Your Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <div>
        {children} {/* Render child components here */}
      </div>
    </div>
  );
};

export default Dashboard;
