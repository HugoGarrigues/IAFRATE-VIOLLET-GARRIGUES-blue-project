const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.use(express.static('../frontend'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

app.listen(port, () => console.log('Server listening on port ' + port));
