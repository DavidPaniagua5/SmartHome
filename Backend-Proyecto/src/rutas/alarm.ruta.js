import { Router } from "express";
import { postAlarmActive, postAlarmInactive } from "../controladores/alarm.controlador.js";
const routerAlarmAction = Router();

routerAlarmAction.post('/alarms/active', postAlarmActive);
routerAlarmAction.post('/alarms/inactive', postAlarmInactive);

export default routerAlarmAction