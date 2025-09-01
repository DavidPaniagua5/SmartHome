import { Router } from "express";
import { iniciarClienteSSE } from "../utilidades/ClientSSE.js";

const ClienteSSERuta = Router();

ClienteSSERuta.get("/sse-cliente", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
  });

  // Enviar un "ping" inicial para abrir la conexión
  res.write(":ok\n\n");

  // Llamar con req y res
  iniciarClienteSSE(req, res);
});

export default ClienteSSERuta;

