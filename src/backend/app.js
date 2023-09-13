const express = require('express');
const path = require('path');
const routes = require('./routes/routes.js');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

app.use(session({
    secret: 'motdepasse',
    resave: false,
    saveUninitialized: true
  }));

app.use(express.static(path.join(__dirname, '../frontend')));

app.use('/', routes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'frontend', 'template'));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});