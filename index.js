const express = require('express');

const app = express();

const port = 3000;

app.get('/', (request, response) => {
    response.send('Bok!');
});

app.listen(port, () => {
    console.log('Spreman sam!');
});