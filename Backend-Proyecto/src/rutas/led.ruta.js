import { Router } from "express";

//Metodo para hacer consultar los datos de los leds
import { getDatosLed, getDatosLedFechaHora } from "../controladores/led.controlador.js";


const routerBuzzer = Router()

//ENDPOINTS PARA LOS DATOS DE LOS LEDS
routerBuzzer.get('/led_simple', getDatosLed)
routerBuzzer.get('/led_simple/fecha_hora', getDatosLedFechaHora)


export default routerBuzzer //default deja que se importe con cualquier nombre