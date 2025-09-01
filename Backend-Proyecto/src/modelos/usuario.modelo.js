import mongoose from "mongoose";
import { obtenerDBEspecifica } from "../baseDatos.js";

const usuarioSchema = new mongoose.Schema({
    nombreUsuario: {
        type: String,
        trim: true,
        require: true
    },
    passwordUsuario: {
        type: String,
        require: true
    }
});

export default obtenerDBEspecifica("sensor_data").model("usuario", usuarioSchema, "usuarios")