import mongoose from "mongoose";
import { obtenerDBEspecifica } from "../baseDatos.js";

const lecturaSensorProximidadSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    pin_trigger: {
        type: String,
        require: true
    },
    pin_echo: {
        type: String,
        require: true
    },
    distance: {
        type: Number,
        require: true
    },
    is_near: {
        type: Boolean,
        require: true
    },
    timestamp: {
        type: Date,
        require: true
    }
});

export default obtenerDBEspecifica("sensor_data").model("sensorProximidad", lecturaSensorProximidadSchema, "sensor_pir")