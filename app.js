//importar dependencias
const express = require('express');
const morgan = require('morgan');
const cors = require ('cors');
require('dotenv').config();

const app = express();

//Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//RUTAS

//PUERTO

const port = 3000;
app.listen(port, ()=>{console.log(`Servidor corriendo en el puerto ${port}`)})


