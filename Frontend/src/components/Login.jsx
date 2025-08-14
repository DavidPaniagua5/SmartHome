import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Estilos y animaciones
import LIcon from '../assets/Login-icon.gif'

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [animate, setAnimate] = useState(false);

  const correctUsername = import.meta.env.VITE_CORRECT_USERNAME;
  const correctPassword = import.meta.env.VITE_CORRECT_PASSWORD;

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === correctUsername && password === correctPassword) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="login-container">
      {/* Columna izquierda */}
      <div className={`login-form-container ${animate ? 'fade-in-up' : ''}`}>
        <div className="text-center mb-4">
          <img
            src={LIcon}
            alt="Smart Home"
            className="login-icon"
          />
          <h3 className="mt-3 fw-bold" style={{ color: '#ff8c42' }}>
            Residencial Pinos Altos
          </h3>
          <p className="text-muted">Bienvenido, ingresa tus credenciales para empezar a gestionar tu SmartHome</p>
        </div>

        <form onSubmit={handleLogin}>
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-semibold">
              Nombre de Usuario
            </label>
            <input
              type="text"
              className="form-control rounded-pill"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control rounded-pill"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
  <div className="d-flex justify-content-center">

          <button type="submit" className="btn-Entrar">
            Ingresar
          </button>
          </div>
        </form>
      </div>

      {/* Columna derecha */}
      <div className="login-image-container d-none d-md-block">
        <div className="overlay"></div>
        <img
          src="/Fondo.png"
          alt="Casa inteligente"
        />
      </div>
    </div>
  );
};

export default Login;
