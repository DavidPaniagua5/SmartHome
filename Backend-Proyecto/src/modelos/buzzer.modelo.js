import mongoose from "mongoose";
import { obtenerDBEspecifica } from "../baseDatos.js";

const buzzerSchema = new mongoose.Schema({
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
    temperature: {
        type: Number,
        require: true
    },
    timestamp: {
        type: Date,
        require: true
    },
});

export default obtenerDBEspecifica("alert_data").model("buzzer", buzzerSchema, "buzzer_alert")