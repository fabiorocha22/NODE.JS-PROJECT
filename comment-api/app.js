const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    { extended: true }
));

app.get('/', (req, res) => {
    res.send(401, 'END POINT INVÁLIDO!');
});

const routes = require('./app/routes/api');
app.use('/api', routes);

let port = 18091;
let host = 'localhost';

app.listen(port, host, () => {
    console.log('Servidor em execução na port: ' + port);
});