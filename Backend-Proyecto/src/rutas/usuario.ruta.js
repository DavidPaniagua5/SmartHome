import { Router } from "express";

//Metodo para hacer el login de un usuario
import { loginUsuario } from "../controladores/usuario.controlador.login.js";


const routerUsuarios = Router()

//ENDPOINTS PARA LOS USUARIOS
routerUsuarios.post('/usuarios/iniciar_sesion', loginUsuario) //Ruta para el inicio de Sesion del usuario


export default routerUsuarios //default deja que se importe con cualquier nombre