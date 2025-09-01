import { Router } from "express";

//Metodo para hacer consultar los datos del ventilador-fan
import { getDatosFanVentilador, getDatosFanVentiladorFechaHora } from "../controladores/fanVentilador.controlador.js";


const routerFanVentilador = Router()

//ENDPOINTS PARA LOS DATOS DEL VENTILADOR FAN
routerFanVentilador.get('/fan_ventilador', getDatosFanVentilador)
routerFanVentilador.get('/fan_ventilador/fecha_hora', getDatosFanVentiladorFechaHora)



export default routerFanVentilador //default deja que se importe con cualquier nombre