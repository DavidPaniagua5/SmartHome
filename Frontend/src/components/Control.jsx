import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Form } from 'react-bootstrap';
import './Control.css';

const Control = () => {
  // Estados para los LEDs
  const [ledRGBColor, setLedRGBColor] = useState('#000000');
  const [led1State, setLed1State] = useState(false);
  const [led2State, setLed2State] = useState(false);
  const [led3State, setLed3State] = useState(false);


  // Estado para la puerta
  const [doorState, setDoorState] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  // Funciones de control
//  const handleColorChange = (e) => setLedRGBColor(color);
  const toggleLed1 = () => setLed1State(!led1State);
  const toggleLed2 = () => setLed2State(!led2State);
  const toggleLed3 = () => setLed3State(!led3State);
  const toggleDoor = () => setDoorState(!doorState);
  const [alertState, setAlertState] = useState({
    show: false,
    message: '',
    variant: ''
  });

   const hideAlert = () => {
    setAlertState({ show: false, message: '', variant: '' });
  };


  //Funciones para conectar con el backend (envia señales de encendido y apagado para ser enviadas al canal de HiveMQ)
  //Funcion para encender/apagar led rgb

  const handleColorChange = (e) => {
    const nuevoColor = e.target.value;
    setLedRGBColor(nuevoColor);
    handleClickRGB(nuevoColor);
  };
  const handleClickRGB = async (color) => {

    // Aquí usamos el color pasado como argumento
    try {
      const estado = (color === '#000000ff') ? 'Apagado' : 'Encendido';
      console.log(color);
      const response = await fetch('http://localhost:3000/led/rgb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ estado: 'Encendido', color: color }),
      });
      const dato = await response.json();
      
      if (dato.State === "Encendido") {
        setAlertState({
          show: true,
          message: "LED RGB ENCENDIDO CON ÉXITO",
          variant: "success"
        });
      } else {
        setAlertState({
          show: true,
          message: "ERROR AL ENCENDER EL LED, INTENTE DE NUEVO",
          variant: "danger"
        });
      }
      setTimeout(hideAlert, 3000);
    } catch (error) {
      console.error('Error al comunicarse con la API:', error);
      setAlertState({
        show: true,
        message: "Error de conexión con el servidor.",
        variant: "danger"
      });
      setTimeout(hideAlert, 3000);
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

        const dato = await response.json();
      if (response.ok) {
        setAlertState({
          show: true,
          message: "LED RGB apagado.",
          variant: "info"
        });
        setLedRGBColor('#000000'); // Opcional: reiniciar el color
      } else {
        setAlertState({
          show: true,
          message: "Error al apagar el LED.",
          variant: "danger"
        });
      }
      setTimeout(hideAlert, 3000);
    }
    catch (error){
    console.error('Error al comunicarse con la API:', error);
    }
  }
  //Funciones para encender/apagar los 3 diferentes Leds
const handleToggle1 = async (e) => {
    const isChecked = e.target.checked;
    setLed1State(isChecked);
try {
      let endpoint = '';
      let estado = '';
      if (isChecked) {
        // El toggle se acaba de encender
        endpoint = 'http://localhost:3000/led/1/on';
        estado = 'encendido';
      } else {
        // El toggle se acaba de apagar
        endpoint = 'http://localhost:3000/led/1/off';
        estado = 'apagado';
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ estado: estado }),
      });
      const data = await response.json();
      console.log(data.Estado);
    } catch (error) {
      console.error('Error al comunicarse con la API:', error);
    }
  };

  const handleToggle2 = async (e) => {
    const isChecked = e.target.checked;
    setLed2State(isChecked);
try {
      let endpoint = '';
      let estado = '';
      if (isChecked) {
        // El toggle se acaba de encender
        endpoint = 'http://localhost:3000/led/2/on';
        estado = 'encendido';
      } else {
        // El toggle se acaba de apagar
        endpoint = 'http://localhost:3000/led/2/off';
        estado = 'apagado';
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ estado: estado }),
      });
      const data = await response.json();
      console.log(`Respuesta del servidor (${estado}):`, data);
    } catch (error) {
      console.error('Error al comunicarse con la API:', error);
    }
  };


  const handleToggle3 = async (e) => {
    const isChecked = e.target.checked;
    setLed3State(isChecked);
try {
      let endpoint = '';
      let estado = '';
      if (isChecked) {
        // El toggle se acaba de encender
        endpoint = 'http://localhost:3000/led/3/on';
        estado = 'encendido';
      } else {
        // El toggle se acaba de apagar
        endpoint = 'http://localhost:3000/led/3/off';
        estado = 'apagado';
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ estado: estado }),
      });
      const data = await response.json();
      console.log(`Respuesta del servidor (${estado}):`, data);
    } catch (error) {
      console.error('Error al comunicarse con la API:', error);
    }
  };

// const HandletoggleDoor = async (e) => {
//   let endpoint = 'http://localhost:3000/porton/on';
// };

const toggleDoorWithDelay = async (e) => {
    let endpoint = 'http://localhost:3000/porton';
    try{
   const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ estado: "abrir" }),
      });
      const data = await response.json();
      console.log(data.State);

      if(data.State == "Abierto"){
      setIsButtonDisabled(true);
      setDoorState(true);
      setTimeout(() => {
      setDoorState(false);
      setIsButtonDisabled(false);
    }, 5000);
    
  }else{
      setAlertState({
        show: true,
        message: "ERROR AL ABRIR EL PORTÓN, INTENTE DE NUEVO",
        variant: "danger"
      });
        }
        setTimeout(hideAlert, 3000);
}catch (error){
  console.error('Error al comunicarse con la API:', error);
}
  };

const ledIconClass = (state) => 
    state ? 'bi bi-lightbulb-fill f-encendido' : 'bi bi-lightbulb text-dark';

  return (
    
    <div className="container-fluid p-0">
      {alertState.show && (
                <Alert variant={alertState.variant} onClose={hideAlert} dismissible>
                    {alertState.message}
                </Alert>
            )}
      <h1 className="mb-4">Control de Dispositivos</h1>
      <div className="row g-4">        
      
    {/* Tarjeta 1: LED 1 */}
  <div className="col-md-4">
    <div className="card shadow-sm h-100 p-3 text-center d-flex flex-column card-color">
      <h5 className="card-title">LED CUARTO 1</h5>
      <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
        <i className={`fs-1 ${ledIconClass(led1State)}`}></i>
        <Form.Check
          type="switch"
          id="led-1-switch"
          checked={led1State}
          onChange={handleToggle1}
        />
      </div>
    </div>
  </div>

  {/* Tarjeta 2: LED 2 */}
  <div className="col-md-4">
    <div className="card shadow-sm h-100 p-3 text-center d-flex flex-column card-color">
      <h5 className="card-title">LED CUARTO 2</h5>
      <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
        <i className={`fs-1 ${ledIconClass(led2State)}`}></i>
        <Form.Check
          type="switch"
          id="led-2-switch"
          checked={led2State}
          onChange={handleToggle2}
        />
      </div>
    </div>
  </div>

  {/* Tarjeta 3: LED 3 */}
  <div className="col-md-4">
    <div className="card shadow-sm h-100 p-3 text-center d-flex flex-column card-color">
      <h5 className="card-title">LED CUARTO 3</h5>
      <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
        <i className={`fs-1 ${ledIconClass(led3State)}`}></i>
        <Form.Check
          type="switch"
          id="led-3-switch"
          checked={led3State}
          onChange={handleToggle3}
        />
      </div>
    </div>
  </div>

{/* Tarjeta 4: LED RGB */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 p-3 text-center card-color">
            <h5 className="card-title">LED RGB</h5>
                            <i 
                             className={`fs-1 bi bi-lightbulb${ledRGBColor === '#000000' ? '' : '-fill'}`}
                                style={{ color: ledRGBColor, transition: 'color 0.5s' }}
                            ></i>

            <div className="d-flex flex-column align-items-center">
              {/* Aquí usamos el selector */}
              <Form.Select 
                aria-label="Selecciona un color" 
                onChange={handleColorChange}
                value={ledRGBColor} // Esto asegura que el selector refleje el color actual
                className="mb-3"
              >
                <option value="#000000">Selecciona un color</option>
                <option value="#FF0000">Rojo</option>
                <option value="#00FF00">Verde</option>
                <option value="#0000FF">Azul</option>
              </Form.Select>
                            

              {/* Indicador visual del color seleccionado */}
              {/* <div 
                className="led-indicator" 
                style={{ backgroundColor: ledRGBColor }}
              ></div> */}
            </div>
            <button onClick={handleClickRGB_A} className='btn btn-danger rounded-pill mb-2' > Apagar </button>
          </div>
        </div>
            

       {/* Tarjeta 5: Abrir Puerta */}
      <div className="col-md-4">
            <div className="card shadow-sm h-100 p-3 text-center d-flex flex-column card-color">
              <h5 className="card-title">ABRIR PORTÓN</h5>
              <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
                {/* Icono de la puerta */}
                {doorState ? (
                  <i className="bi bi-door-open fs-1 mb-3 text-dark"></i>
                ) : (
                  <i className="bi bi-door-closed fs-1 mb-3 text-dark"></i>
                )}
                <button 
                  className={`btn ${doorState ? 'btn-warning' : 'btn-success'} w-50 rounded-pill`} 
                  onClick={toggleDoorWithDelay}
                  disabled={isButtonDisabled}
                >
                  {doorState ? 'Portón abierto' : 'Abrir portón'}
                </button>
              </div>
            </div>
      </div>
      </div>
      
    </div>
    
  );
};

export default Control;