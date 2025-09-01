import { Router } from "express";
import { postWaterPumpActive, postWaterPumpInactive } from "../controladores/waterPump.controlador.js";

const routerWaterPumpAction = Router();

routerWaterPumpAction.post('/waterpump/active', postWaterPumpActive);
routerWaterPumpAction.post('/waterpump/inactive', postWaterPumpInactive);

export default routerWaterPumpAction