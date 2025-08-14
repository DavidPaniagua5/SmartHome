import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  return (
    <div className="d-flex dashboard-container">
      <Sidebar handleLogout={handleLogout} />
      <div className="content-area p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;