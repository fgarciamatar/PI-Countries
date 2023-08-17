const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes");//modulo que contiene las rutas y los controladores
const cors = require('cors');

//servidor de Node.js utilizando como framework Express para crear una api web

const server = express(); // utilizamos express para simplificar la creación de servidores y manejo de rutas
server.use(cors());//middleware para que el servidor responda a solicitudes desde diferentes orígenes
server.use(morgan("dev")); //middleware para el registro de solicitudes HTTP 
server.use(express.json());//middleware permite a Express interpretar las solicitudes entrantes con formato JSON y transformarlas en objetos JavaScript.


server.use(mainRouter);//se monta el enrutador, las rutas y controladores de mainRouter estaran disponibles en el servidor

module.exports = server;


