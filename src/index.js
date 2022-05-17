// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');
// import { v4 as uuidv4 } from 'uuid';
const { v4: uuidv4 } = require('uuid');
// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json());

// Arrancamos el servidor en el puerto 4000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const savedCards = [];

// Escribimos los endpoints que queramos
server.post('/card', (req, res) => {
  const newCard = {
    ...req.body,
    id: uuidv4(),
  };

  savedCards.push(newCard);

  const responseSuccess = {
    success: true,
    cardURL: `http://localhost/4000/card/${newCard.id}`,
  };

  res.json(responseSuccess);
});
