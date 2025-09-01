import mongoose from "mongoose";
import { obtenerDBEspecifica } from "../baseDatos.js";

const ledSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    room: {
        type: String,
        require: true
    },
    description: {
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
    state: {
        type: String,
        require: true
    },
    timestamp: {
        type: Date,
        require: true
    },
});

export default obtenerDBEspecifica("component_data").model("led", ledSchema, "led_data")