import { Router } from "express";
import { postLedRGBApagar, 
    postLedRGBAzulEncender, 
    postLedRGBRojoEncender, 
    postLedRGBVerdeEncender,
    postLedRGBAmarilloEncender,
    postLedRGBMagentaEncender,
    postLedRGBCyanEncender,
    postLedRGBBlancoEncender
         } from "../controladores/ledRGBAccion.controlador.js";


const routerLedRGBAccion = Router()

//ENDPOINTS PARA PRENDER Y APAGAR EL LED RGB
routerLedRGBAccion.post('/led/rgb/red', postLedRGBRojoEncender) //Ruta para el led rgb
routerLedRGBAccion.post('/led/rgb/blue', postLedRGBAzulEncender) //Ruta para el led rgb
routerLedRGBAccion.post('/led/rgb/green', postLedRGBVerdeEncender) //Ruta para el led rgb
routerLedRGBAccion.post('/led/rgb/off', postLedRGBApagar) //Ruta para el led rgb
routerLedRGBAccion.post('/led/rgb/cyan', postLedRGBCyanEncender)
routerLedRGBAccion.post('/led/rgb/yellow', postLedRGBAmarilloEncender)
routerLedRGBAccion.post('/led/rgb/white', postLedRGBBlancoEncender)
routerLedRGBAccion.post('/led/rgb/magenta', postLedRGBMagentaEncender)
export default routerLedRGBAccion //default deja que se importe con cualquier nombre