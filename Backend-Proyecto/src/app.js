import express from "express"
import morgan from "morgan";
import cors from "cors";

import sensorHumTempRutas from "./rutas/sensorHumTemp.ruta.js";
import sensorProximidad from "./rutas/sensorProximidad.ruta.js";
import ledRGBAccion from "./rutas/ledRGBAccion.ruta.js";
import ledsAccion from "./rutas/ledsAccion.ruta.js";
import fanVentilador from "./rutas/fanVentilador.ruta.js";
import buzzer from "./rutas/buzzer.ruta.js";
import ledMovimiento from "./rutas/ledMovimiento.ruta.js";
import servo from "./rutas/servo.ruta.js";
import led from "./rutas/led.ruta.js";
import servoAccion from "./rutas/servoAccion.ruta.js";

import ClienteSSERuta from "./rutas/clientSSE.ruta.js";
import routerFanAction from "./rutas/fanAction.ruta.js"
import routerWaterPumpAction from "./rutas/waterpump.ruta.js";
import routerAlarmAction from "./rutas/alarm.ruta.js";


const app = express()
app.use(express.urlencoded({ extended: true }))  // Habilita la lectura de datos de formularios
app.use(express.json()) // Para que express pueda leer json
app.use(morgan("dev"));
app.use(cors());


// Rutas
app.use('/', sensorHumTempRutas);
app.use('/', sensorProximidad);
app.use('/', ledRGBAccion);
app.use('/', ledsAccion);
app.use('/', fanVentilador);
app.use('/', buzzer);
app.use('/', ledMovimiento);
app.use('/', servo);
app.use('/', led);
app.use('/', servoAccion);
app.use('/', ClienteSSERuta);
app.use('/', routerFanAction);
app.use('/', routerWaterPumpAction);
app.use('/', routerAlarmAction);
export default app;