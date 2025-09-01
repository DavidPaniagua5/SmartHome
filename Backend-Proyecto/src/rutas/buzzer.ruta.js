import { Router } from "express";

//Metodo para hacer consultar los datos del ventilador-fan
import { getDatosBuzzer, getDatosBuzzerFechaHora } from "../controladores/buzzer.controlador.js";


const routerBuzzer = Router()

//ENDPOINTS PARA LOS DATOS DEL VENTILADOR FAN
routerBuzzer.get('/buzzer', getDatosBuzzer)
routerBuzzer.get('/buzzer/fecha_hora', getDatosBuzzerFechaHora)


export default routerBuzzer //default deja que se importe con cualquier nombre