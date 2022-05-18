// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');
// import { v4 as uuidv4 } from 'uuid';
const { v4: uuidv4 } = require('uuid');
// Creamos el servidor
const server = express();
//importamos ejs
server.set('view engine', 'ejs');

// Configuramos el servidor
server.use(cors());
server.use(express.json());

// Arrancamos el servidor en el puerto 4000
const serverPort = process.env.PORT || 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const savedCards = [];

// servidor de estaticos
const pathServerPublicStyles = './public/styles';
server.use(express.static(pathServerPublicStyles));

// Escribimos los endpoints que queramos
server.post('/card', (req, res) => {
  if (
    req.body.name !== '' &&
    req.body.job !== '' &&
    req.body.pallete !== '' &&
    req.body.email !== '' &&
    req.body.phone !== '' &&
    req.body.linkedin !== '' &&
    req.body.github !== '' &&
    req.body.photo !== ''
  ) {
    console.log('están rellenos');
    const newCard = {
      ...req.body,
      id: uuidv4(),
    };
    savedCards.push(newCard);
    const responseSuccess = {
      success: true,
      cardURL: `http://localhost:4000/card/${newCard.id}`,
    };

    res.json(responseSuccess);
  } else {
    console.log('no están rellenos');
    const responseError = {
      success: false,
      cardURL: 'Rellena todos los campos',
    };
    res.json(responseError);
  }
});

server.get('/card/:id', (req, res) => {
  console.log(req.params.id);
  const dataCardPreview = savedCards.find((item) => item.id === req.params.id);

  res.render('cardPreview', dataCardPreview);
  console.log(dataCardPreview);
});
