import app from "./app.js";
import { PUERTO_SERVIDOR_BACKEND } from "./configuracion.js";
import { conexionDB } from "./baseDatos.js";


async function inicio() {
    try {
        
        await conexionDB();        
        app.listen(5000);
        console.log(`Servidor en el puerto: http://localhost:${PUERTO_SERVIDOR_BACKEND}`);

    } catch (error) {
        console.error(error);
    }
}

inicio();