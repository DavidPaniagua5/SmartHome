import { Router } from "express";

//Metodo para hacer consultar los datos del sensor de proximidad
import { getLecturasProximidad, getLecturasProximidadFechaHora } from "../controladores/sensorProximidad.controlador.js";


const routerSensorHumTemp = Router()

//ENDPOINTS PARA LAS LECTURAS DEL SENSOR DE PROXIMIDAD
routerSensorHumTemp.get('/sensor_proximidad', getLecturasProximidad) //Ruta para los datos del sensor de proximidad
routerSensorHumTemp.get('/sensor_proximidad/fecha_hora', getLecturasProximidadFechaHora)


export default routerSensorHumTemp //default deja que se importe con cualquier nombre