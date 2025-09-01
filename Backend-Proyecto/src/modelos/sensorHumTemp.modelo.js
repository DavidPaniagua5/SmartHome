import mongoose from "mongoose";
import { obtenerDBEspecifica } from "../baseDatos.js";

const lecturaSensorHumTempSchema = new mongoose.Schema({
    name: {
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
    temperature: {
        type: Number,
        require: true
    },
    humidity: {
        type: Number,
        require: true
    },
    timestamp: {
        type: Date,
        require: true
    },
});

export default obtenerDBEspecifica("sensor_data").model("sensorHumTemp", lecturaSensorHumTempSchema, "sensor_hum_temp")