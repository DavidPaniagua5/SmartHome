import mongoose from "mongoose";
import { obtenerDBEspecifica } from "../baseDatos.js";

const servoSchema = new mongoose.Schema({
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
    timestamp: {
        type: Date,
        require: true
    },
});

export default obtenerDBEspecifica("component_data").model("servo", servoSchema, "servo_data")