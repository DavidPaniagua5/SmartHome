import { Router } from "express";
import { postAccionServo } from "../controladores/servoAccion.controlador.js"; 

const routerServoAccion = Router()

//ENDPOINTS PARA ACCIONAR EL SERVO MOTOR
routerServoAccion.post('/servo/on', postAccionServo) //Ruta para encender el servo


export default routerServoAccion //default deja que se importe con cualquier nombre