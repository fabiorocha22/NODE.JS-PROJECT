const express = require('express');
const { comment } = require('./app/models');

console.log(comment)

comment.create({ comment: "Estou só testando pai" });

const app = express();

app.get('/', (req, res) => {
    res.send(401, 'END POINT INVÁLIDO!');
});

const routes = require('./app/routes/api');
app.use('/api', routes);

let port = 8080;
let host = 'localhost';

app.listen(port, host, () => {
    console.log('Servidor em execução na port: ' + port);
});