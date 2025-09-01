import clienteMqtt from "../mqtt.js";

export const iniciarClienteSSE = (req, res) => {
  // Escucha los mensajes entrantes de MQTT
  clienteMqtt.on("message", (topic, message) => {
    const msg = message.toString();
    if (topic === "/alerts" && msg == "TEMPERATURA CRITICA MAYOR A 26°C") {
      res.write(`data: ${msg}\n\n`);
    }
    else if(topic === "/alerts" && msg == "LA TEMPERATURA HA BAJADO A VALORES NORMALES"){
      res.write(`data: ${msg}\n\n`);
    }
    else{
      console.log(topic);
      console.log(msg)
    }
  });

  // Manejar el cierre de la conexión por parte del cliente
  req.on("close", () => {
    console.log("Conexión SSE cerrada por el cliente.");
    res.end(); // Cierra la respuesta del lado servidor
  });
};
