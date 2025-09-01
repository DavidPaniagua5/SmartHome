import { Router } from "express";
import { postFanActive, postFanInactive } from "../controladores/fan.controlador.js";
const routerFanAction = Router();

routerFanAction.post('/fan/active', postFanActive);
routerFanAction.post('/fan/inactive', postFanInactive);

export default routerFanAction