import React, { useState } from 'react';
import './Control.css'; 

const Control = () => {
  // Estados para los LEDs
  const [ledRGBColor, setLedRGBColor] = useState('#ffffff');
  const [led1State, setLed1State] = useState(false);
  const [led2State, setLed2State] = useState(false);
  const [led3State, setLed3State] = useState(false);

  // Estado para la puerta
  const [doorState, setDoorState] = useState(false);

  // Funciones de control
  const handleColorChange = (e) => setLedRGBColor(e.target.value);
  const toggleLed1 = () => setLed1State(!led1State);
  const toggleLed2 = () => setLed2State(!led2State);
  const toggleLed3 = () => setLed3State(!led3State);
  const toggleDoor = () => setDoorState(!doorState);
const ledIconClass = (state) => 
    state ? 'bi bi-lightbulb-fill f-encendido' : 'bi bi-lightbulb text-muted';
  return (
    <div className="container-fluid p-0">
      <h1 className="mb-4">Control de Dispositivos</h1>
      <div className="row g-4">
        {/* Tarjeta 1: LED RGB */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 p-3 text-center">
            <h5 className="card-title">LED RGB</h5>
            <div className="d-flex flex-column align-items-center">
              <input 
                type="color" 
                className="form-control form-control-color mb-3"
                value={ledRGBColor}
                onChange={handleColorChange}
              />
              <div
                className="led-indicator"
                style={{ backgroundColor: ledRGBColor }}
                  
              ></div>
            </div>
            <button>Seleccionar</button>
          </div>
        </div>

        {/* Tarjeta 2: LED 1 */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 p-3 text-center">
            <h5 className="card-title">LED 1</h5>
            <i className={`fs-1 ${ledIconClass(led1State)}`}></i> {/* Icono */}
            <div className="d-flex justify-content-center">
              <button 
                className={`${led1State ? 'btn-encendido' : 'btn-apagado'}`} 
                onClick={toggleLed1}
              >
                {led1State ? 'Encendido' : 'Apagado'}
              </button>
            </div>
          </div>
        </div>

        {/* Tarjeta 3: LED 2 */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 p-3 text-center">
            <h5 className="card-title">LED 2</h5>
            <div className="d-flex justify-content-center">
              <button 
                className={`btn ${led2State ? 'btn-success' : 'btn-danger'} w-75`} 
                onClick={toggleLed2}
              >
                {led2State ? 'Encendido' : 'Apagado'}
              </button>
            </div>
          </div>
        </div>

        {/* Tarjeta 4: LED 3 */}
        <div className="col-md-6">
          <div className="card shadow-sm h-100 p-3 text-center">
            <h5 className="card-title">LED 3</h5>
            <div className="d-flex justify-content-center">
              <button 
                className={`btn ${led3State ? 'btn-success' : 'btn-danger'} w-50`} 
                onClick={toggleLed3}
              >
                {led3State ? 'Encendido' : 'Apagado'}
              </button>
            </div>
          </div>
        </div>
        
        {/* Tarjeta 5: Abrir Puerta */}
        <div className="col-md-6">
          <div className="card shadow-sm h-100 p-3 text-center">
            <h5 className="card-title">Abrir Puerta</h5>
            <div className="d-flex justify-content-center">
              <button 
                className={`btn ${doorState ? 'btn-success' : 'btn-secondary'} w-50`} 
                onClick={toggleDoor}
              >
                {doorState ? 'Abierta' : 'Cerrada'}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Control;