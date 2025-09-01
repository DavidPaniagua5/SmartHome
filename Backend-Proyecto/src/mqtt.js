import { HMQ_CLUSTER, HMQ_P, HMQ_U, HMQ_PORT, PUERTO_SERVIDOR_FRONTEND } from "./configuracion.js"
import mqtt from "mqtt"

const opciones = {
    host: HMQ_CLUSTER,
    port: HMQ_PORT,
    protocol: 'mqtts',
    username: HMQ_U,
    password: HMQ_P
}

//Conectar al broker de HiveMQ
const clienteMqtt = mqtt.connect(opciones);


clienteMqtt.on('connect', function () {
    console.log('Conectado a HiveMQ');
    //Suscripcion al canal de /ilumination
    clienteMqtt.subscribe('/ilumination');
    clienteMqtt.subscribe('/alerts');
    clienteMqtt.subscribe('/irrigation');
    clienteMqtt.subscribe('/ventilation');
    clienteMqtt.subscribe("sensores/temperatura");
});

clienteMqtt.on('error', function (error) {
    console.log(error);
})

export default clienteMqtt
