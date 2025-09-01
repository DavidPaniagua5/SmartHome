import { config } from "dotenv";
config();

export const PUERTO_SERVIDOR_BACKEND = process.env.PUERTO_SERVIDOR_BACKEND || 4000; //Puerto del backend
export const URL_BD_MONGO = process.env.URL_BD_MONGO; //URL para conectarse a la base de datos de mongodb en la nube
export const URL_BD_MONGO_GRUPO = process.env.URL_BD_MONGO_GRUPO; //URL para conectarse a la base de datos de mongodb en la nube del grupo definitivo
export const HMQ_U = process.env.HMQ_U
export const HMQ_P = process.env.HMQ_P
export const HMQ_CLUSTER = process.env.HMQ_CLUSTER
export const HMQ_PORT = process.env.HMQ_PORT
export const PUERTO_SERVIDOR_FRONTEND = process.env.PUERTO_SERVIDOR_FRONTEND