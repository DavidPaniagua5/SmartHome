import { Router } from "express";

//Metodo para hacer consultar los datos del sensor de temperatura-humedad
import { getLecturasHumTemp, getLecturasHumTempFechaHora } from "../controladores/sensorHumTemp.controlador.js";


const routerSensorHumTemp = Router()

//ENDPOINTS PARA LAS LECTURAS DEL SENSOR DE HUMEDAD-TEMPERATURA
routerSensorHumTemp.get('/sensor_hum_temp', getLecturasHumTemp) //Ruta para el inicio de Sesion del usuario
routerSensorHumTemp.get('/sensor_hum_temp/fecha_hora', getLecturasHumTempFechaHora)


export default routerSensorHumTemp //default deja que se importe con cualquier nombre
