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
server.use(express.json({ limit: '10mb' }));

//importamos SQLite
const Database = require('better-sqlite3');

// Arrancamos el servidor en el puerto 4000
const serverPort = process.env.PORT || 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const savedCards = [];

// Escribimos los endpoints que queramos
const db = Database('./src/db/database.db', { verbose: console.log });
server.post('/card', (req, res) => {
  if (
    req.body.name !== '' &&
    req.body.job !== '' &&
    req.body.palette !== '' &&
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
    console.log(newCard);

    const query = db.prepare(
      `INSERT INTO savedcards (id, name, job, photo, phone, email, linkedin, github, palette) VALUES (?, ?, ?, ? ,?, ?, ?, ?, ?)`
    );
    const result = query.run(
      newCard.id,
      newCard.name,
      newCard.job,
      newCard.photo,
      newCard.phone,
      newCard.email,
      newCard.linkedin,
      newCard.github,
      newCard.palette
    );
    console.log(result);
    const responseSuccess = {
      success: true,
      cardURL: `https://promo-p-module-4-team-1.herokuapp.com/card/${newCard.id}`,
      // cardURL: `http://localhost:${serverPort}/card/${newCard.id}`,
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
  const query = db.prepare('SELECT * FROM savedCards WHERE id = ?');

  const result = query.get(req.params.id);
  res.render('cardPreview', result);
});

// servidor de estaticos
const pathServerPublic = './public';
server.use(express.static(pathServerPublic));

const staticServerPath = './src/public-react';
server.use(express.static(staticServerPath));
