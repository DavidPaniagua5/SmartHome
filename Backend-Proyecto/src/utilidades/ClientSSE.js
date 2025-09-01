import clienteMqtt from "../mqtt.js";

export const iniciarClienteSSE = (req, res) => {
  // Escucha los mensajes entrantes de MQTT
  clienteMqtt.on("message", (topic, message) => {
    const msg = message.toString();
    console.log(topic);
    console.log(msg);
    if (topic === "/alerts" && msg == "ALERT:ON") {
      res.write(`data: ${msg}\n\n`);
    }
    else if(topic === "/alerts" && msg == "ALERT:OFF"){
      res.write(`data: ${msg}\n\n`);
    }
    
  });

  // Manejar el cierre de la conexión por parte del cliente
  req.on("close", () => {
    console.log("Conexión SSE cerrada por el cliente.");
    res.end(); // Cierra la respuesta del lado servidor
  });
};
