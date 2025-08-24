import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ handleLogout }) => {
  return (
    <div className="sidebar bg-dark text-white p-3">
      <h2 className="text-center mb-4">SmartHome</h2>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink
            to="control"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Control
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="reportes"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Reportes
          </NavLink>
        </li>
        <li className="nav-item">
          <button onClick={handleLogout} className="btn btn-link nav-link text-white-50">
            Salir
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;