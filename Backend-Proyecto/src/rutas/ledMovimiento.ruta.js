import { Router } from "express";

//Metodo para hacer consultar los datos del ventilador-fan
import { getDatosLedMovimiento, getDatosLedMovimientoFechaHora } from "../controladores/ledMovimiento.controlador.js";


const routerLedMovimiento = Router()

//ENDPOINTS PARA LOS DATOS DEL VENTILADOR FAN
routerLedMovimiento.get('/led_movimiento', getDatosLedMovimiento)
routerLedMovimiento.get('/led_movimiento/fecha_hora', getDatosLedMovimientoFechaHora)


export default routerLedMovimiento //default deja que se importe con cualquier nombre