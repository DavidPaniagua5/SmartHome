import { Router } from "express";
import { postLedEncender1, postLedApagar1, postLedEncender2, postLedApagar2, postLedEncender3, postLedApagar3 } from "../controladores/ledsAccion.controlador.js"; 

const routerLedsAccion = Router()

//ENDPOINTS PARA ENCENDER LOS LEDS
routerLedsAccion.post('/led/1/on', postLedEncender1) //Ruta para encender el primer led
routerLedsAccion.post('/led/1/off', postLedApagar1) //Ruta para apagar el primer led
routerLedsAccion.post('/led/2/on', postLedEncender2) //Ruta para encender el segundo led
routerLedsAccion.post('/led/2/off', postLedApagar2) //Ruta para apagar el segundo led
routerLedsAccion.post('/led/3/on', postLedEncender3) //Ruta para encender el tercer led
routerLedsAccion.post('/led/3/off', postLedApagar3) //Ruta para apagar el tercer led


export default routerLedsAccion //default deja que se importe con cualquier nombre