import mongoose from "mongoose";
import { obtenerDBEspecifica } from "../baseDatos.js";

const ledMovimientoSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    room: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    pin: {
        type: String,
        require: true
    },
    mov_detected: {
        type: Boolean,
        require: true
    },
    timestamp: {
        type: Date,
        require: true
    },
});

export default obtenerDBEspecifica("alert_data").model("ledMovimiento", ledMovimientoSchema, "movement_alert")