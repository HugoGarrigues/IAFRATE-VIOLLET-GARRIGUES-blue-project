const express = require('express');
const path = require('path');
const routes = require('./routes/routes.js');
const session = require('express-session');

const app = express();
const port = 3000;

// Middlewares pour gérer les requêtes entrantes
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded forms
app.use(express.json()); // Parse JSON payloads

app.use(session({
    secret: 'motdepasse',
    resave: false,
    saveUninitialized: true
  }));

// Serveur de fichiers statiques (pour votre frontend)
app.use(express.static(path.join(__dirname, '../frontend')));

// Routes
app.use('/', routes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'frontend', 'template'));



// Lancement du serveur
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});