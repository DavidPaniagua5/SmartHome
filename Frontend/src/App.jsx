import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Control from './components/Control.jsx';
import Reportes from './components/Reportes.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route path="control" element={<Control />} />
        <Route path="reportes" element={<Reportes />} />
        <Route path="*" element={<h1>Página no encontrada</h1>} /> {/* Ruta por defecto o error 404 */}
      </Route>
    </Routes>
  );
}

export default App;