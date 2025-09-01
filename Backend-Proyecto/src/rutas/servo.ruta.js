import { Router } from "express";

//Metodo para hacer consultar los datos del servo
import { getDatosServo, getDatosServoFechaHora } from "../controladores/servo.controlador.js";


const routerServo = Router()

//ENDPOINTS PARA LOS DATOS DEL SERVO
routerServo.get('/servo', getDatosServo)
routerServo.get('/servo/fecha_hora', getDatosServoFechaHora)


export default routerServo //default deja que se importe con cualquier nombre