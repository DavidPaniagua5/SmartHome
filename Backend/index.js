const express = require('express');
const app = express();
const morgan = require('morgan');
const { MongoClient } = require('mongodb');

require('dotenv').config();

const port = 3000;

const uri = process.env.DB_URI;
const client = new MongoClient(uri);

let db;
let collection;


app.use(morgan('dev'));
// Middleware para permitir CORS (necesario para que el frontend se comunique con el servidor)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});



async function connectDB() {
  try {
    await client.connect();
    console.log('Conectado a MongoDB');
    db = client.db("AYCE1");
    collection = db.collection("Temperatura");
    
    // Monitorear cambios en la colección
    watchChanges();
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


app.get('/readings', async (req, res) => {
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
    
    res.json({
      data: readings,
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

app.get('/', (req,res) => {
    res.send("Hola mundo");
});

connectDB().then(() => {
   app.listen(port, () => {
   console.log(`Servidor corriendo en http://localhost:${port}`);
     });
});

// Cerrar conexión al finalizar
process.on('SIGINT', async () => {
  console.log('Cerrando conexión a MongoDB...');
  await client.close();
  process.exit(0);
});