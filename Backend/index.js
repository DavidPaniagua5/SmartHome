const express = require('express');
const app = express();
const morgan = require('morgan');
const { MongoClient } = require('mongodb');
const mqtt = require('mqtt');

require('dotenv').config();

const port = 3000;
//Mondgobd
const uri = process.env.DB_URI;
//HiveMQ
const hmqU = process.env.HMQ_U;
const hmqP = process.env.HMQ_P;
const hmqC = process.env.HMQ_Cluster;
const hmqPort = process.env.HVQ_Port;


const client = new MongoClient(uri);

let db;
let collection;

//******************HIVEMQ******************* */
var options = {
    host: hmqC,
    port: hmqPort,
    protocol: 'mqtts',
    username: hmqU,
    password: hmqP
}


//Conectar al broker de HiveMQ
const clientMqtt = mqtt.connect(options);


clientMqtt.on('connect', function () {
    console.log('Conectado a HiveMQ');
});

//Suscripcion al canal de /ilumination
clientMqtt.subscribe('/ilumination');
clientMqtt.subscribe('/entrance');

clientMqtt.on('error', function (error) {
    console.log(error);
});



//******************************************* */

//Middlewares:
app.use(morgan('dev'));
app.use(express.json());

// Middleware para permitir CORS (necesario para que el frontend se comunique con el servidor)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//Funcion para convertir de hexadecimal a rgb
function hexToRgb(hex) {
  // Elimina el '#' si está presente
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  // Si encuentra una coincidencia, devuelve el objeto RGB, de lo contrario, null
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}


async function connectDB() {
  try {
    await client.connect();
    db = client.db("sensor_data");
    collection = db.collection("dht11_readings");
    
    // Monitorear cambios en la colección
    db.watch();
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error conectando a MongoDB:', error);
  }
}

async function getLatestReading() {
  try {
    const latest = await collection
      .findOne({}, { sort: { timestamp: -1 } });
    return latest;
  } catch (error) {
    console.error('Error obteniendo última lectura:', error);
    return null;
  }
}


app.get('/lecturas/temperatura', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 50;
    const skip = (page - 1) * limit;
    
    const readings = await collection
      .find({})
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();
    
  const total = await collection.countDocuments();

  const newReadings = readings.map(reading => {
  const dateObject = new Date(reading.timestamp);
  const fecha = dateObject.toLocaleDateString();
  const hora = dateObject.toLocaleTimeString();
  return {
    ...reading,
    fecha,
    hora,
  };
});

console.log(newReadings);

    res.json({
      data: newReadings,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error obteniendo lecturas:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
});


app.post('/led/rgb', (req,res) => {
  try{
  const data = req.body;

  if(data.estado == "Encendido"){
    const colorRgb = hexToRgb(data.color);
    console.log(colorRgb);
    
    var valor = "LEDRGB:";
    valor += parseInt(colorRgb.r)
    valor += ","
    valor += parseInt(colorRgb.g)
    valor += ","
    valor += parseInt(colorRgb.b)
    clientMqtt.publish('/ilumination', valor);
    res.json({State: 'Encendido'});
  }else if(data.estado == "Apagado"){
    clientMqtt.publish('/ilumination', 'LEDRGB:OFF');  
    res.json({State:'Apagado'});
  }
}
catch (error){
  console.error("Error: ", error);
  res.status(500).json({error: error})
}
});

app.post('/led/1/on', (req, res) => {
  try{ 
    clientMqtt.publish('/ilumination', 'LED1:ON');
    console.log('Recibida solicitud para encender:', req.body);
  }catch(error){
    console.error('Error conectando con led de cuarto 1:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

app.post('/led/1/off', (req, res) => {
  try{ 
  clientMqtt.publish('/ilumination', 'LED1:OFF');
  console.log('Recibida solicitud para apagar:', req.body);
  }catch(error){
    console.error('Error conectando con led de cuarto 1:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

app.post('/led/2/on', (req, res) => {
  try{ 
    clientMqtt.publish('/ilumination', 'LED2:ON');
    console.log('Recibida solicitud para encender:', req.body);
  }catch(error){
    console.error('Error conectando con led de cuarto 2:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

app.post('/led/2/off', (req, res) => {
  try{ 
  clientMqtt.publish('/ilumination', 'LED2:OFF');
  console.log('Recibida solicitud para apagar:', req.body);
  }catch(error){
    console.error('Error conectando con led de cuarto 2:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

app.post('/led/3/on', (req, res) => {
  try{ 
    clientMqtt.publish('/ilumination', 'LED3:ON');
    console.log('Recibida solicitud para encender:', req.body);
  }catch(error){
    console.error('Error conectando con led de cuarto 3:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

app.post('/led/3/off', (req, res) => {
  try{ 
  clientMqtt.publish('/ilumination', 'LED3:OFF');
  console.log('Recibida solicitud para apagar:', req.body);
  }catch(error){
    console.error('Error conectando con led de cuarto 3:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

app.post( '/porton', (req,res) =>{
try {
  const resp = req.body;
  console.log(resp);
  if(resp.estado == "abrir"){
  clientMqtt.publish('/entrance', 'ON');
  res.json({State: 'Abierto'});
  } else {
   res.json({error: 'Comando invalido'});
  }
} catch (error) {
  console.error('Error conectando con el porton', error)
  res.status(500).json({ error: 'Error del servidor'})
}
});


app.get('/', (req,res) => {
    res.send("Inicio");
});

connectDB().then(() => {
   app.listen(port, () => {
   console.log(`Servidor corriendo en http://localhost:${port}`);
     });
});

// Cerrar conexión al finalizar
process.on('SIGINT', async () => {
  console.log('Cerrando conexión a MongoDB...');
  //Cerrando conexion con MongoDB
  await client.close();
// Manejar la desconexión de HiveMq
  clientMqtt.on('close', () => {
    console.log('Desconectado del bróker de HiveMQ.');
  });

  process.exit(0);
});