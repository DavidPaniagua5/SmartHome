import mongoose from "mongoose";
import { URL_BD_MONGO_GRUPO } from "./configuracion.js";

export const conexionDB = async () => {
    try {
        await mongoose.connect(URL_BD_MONGO_GRUPO)
        console.log("La conexión al cluster ha sido exitosa")    
    } catch (error) {
        console.log(error)
    }
};

// Helper para obtener una base de datos del cluster
export const obtenerDBEspecifica = (dbNombre) => {
  return mongoose.connection.useDb(dbNombre, { useCache: true });
};