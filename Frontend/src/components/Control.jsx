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


  //Funciones para conectar con el backend (envia señales de encendido y apagado para ser enviadas al canal de HiveMQ)
  //Funcion para encender/apagar led rgb
  const handleClickRGB = async () => {
    try {
      console.log(ledRGBColor);
      const response = await fetch('http://localhost:3000/led/rgb', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ estado: 'Encendido', color: ledRGBColor }),
        });
        const data = await response.json();
        console.log('Respuesta del servidor (encendido):', data);
    } catch (error) {
      console.error('Error al comunicarse con la API:', error);
    }
  };  

  const handleClickRGB_A = async () =>{
    try{
      const response = await fetch('http://localhost:3000/led/rgb', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ estado: 'Apagado'}),
        });
    }
    catch (error){
    console.error('Error al comunicarse con la API:', error);
    }
  }
  //Funciones para encender/apagar los 3 diferentes Leds
  const handleClick1 = async () => {
    try {
      setLed1State(!led1State);
      if (!led1State) {
        // Primer click: Enviar a la API para "encender"
        const response = await fetch('http://localhost:3000/led/1/on', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ estado: 'encendido' }),
        });
        const data = await response.json();
        console.log('Respuesta del servidor (encendido):', data);
      } else {
        // Segundo click: Enviar a la API para "apagar"
        const response = await fetch('http://localhost:3000/led/1/off', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ estado: 'apagado' }),
        });
        const data = await response.json();
        console.log('Respuesta del servidor (apagado):', data);
      }      
    } catch (error) {
      console.error('Error al comunicarse con la API:', error);
    }
  };

  const handleClick2 = async () => {
    try {
      setLed2State(!led2State);
      if (!led2State) {
        // Primer click: Enviar a la API para "encender"
        const response = await fetch('http://localhost:3000/led/2/on', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ estado: 'encendido' }),
        });
        const data = await response.json();
        console.log('Respuesta del servidor (encendido):', data);
      } else {
        // Segundo click: Enviar a la API para "apagar"
        const response = await fetch('http://localhost:3000/led/2/off', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ estado: 'apagado' }),
        });
        const data = await response.json();
        console.log('Respuesta del servidor (apagado):', data);
      }      
    } catch (error) {
      console.error('Error al comunicarse con la API:', error);
    }
  };

  const handleClick3 = async () => {
    try {
      setLed3State(!led3State);
      if (!led3State) {
        // Primer click: Enviar a la API para "encender"
        const response = await fetch('http://localhost:3000/led/3/on', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ estado: 'encendido' }),
        });
        const data = await response.json();
        console.log('Respuesta del servidor (encendido):', data);
      } else {
        // Segundo click: Enviar a la API para "apagar"
        const response = await fetch('http://localhost:3000/led/3/off', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ estado: 'apagado' }),
        });
        const data = await response.json();
        console.log('Respuesta del servidor (apagado):', data);
      }      
    } catch (error) {
      console.error('Error al comunicarse con la API:', error);
    }
  };
  

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
              >
              </div>
            </div>
            <button onClick={handleClickRGB}>Seleccionar</button>
            <button onClick={handleClickRGB_A} className='btn btn-danger'> Apagar </button>
          </div>
        </div>

        {/* Tarjeta 2: LED 1 */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 p-3 text-center">
            <h5 className="card-title">LED CUARTO 1</h5>
            <i className={`fs-1 ${ledIconClass(led1State)}`}></i> {/* Icono */}
            <div className="d-flex justify-content-center">
              <button 
                className={`${led1State ? 'btn-encendido' : 'btn-apagado'}`} 
                onClick={handleClick1}
              >
                {led1State ? 'Encendido' : 'Apagado'}
              </button>
            </div>
          </div>
        </div>

        {/* Tarjeta 3: LED 2 */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 p-3 text-center">
            <h5 className="card-title">LED CUARTO 2</h5>
            <div className="d-flex justify-content-center">
              <button 
                className={`btn ${led2State ? 'btn-success' : 'btn-danger'} w-75`} 
                onClick={handleClick2}
              >
                {led2State ? 'Encendido' : 'Apagado'}
              </button>
            </div>
          </div>
        </div>

        {/* Tarjeta 4: LED 3 */}
        <div className="col-md-6">
          <div className="card shadow-sm h-100 p-3 text-center">
            <h5 className="card-title">LED CUARTO 3</h5>
            <div className="d-flex justify-content-center">
              <button 
                className={`btn ${led3State ? 'btn-success' : 'btn-danger'} w-50`} 
                onClick={handleClick3}
              >
                {led3State ? 'Encendido' : 'Apagado'}
              </button>
            </div>
          </div>
        </div>
        
        {/* Tarjeta 5: Abrir Puerta */}
        <div className="col-md-6">
          <div className="card shadow-sm h-100 p-3 text-center">
            <h5 className="card-title">ABRIR PORTÓN</h5>
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