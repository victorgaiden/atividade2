const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use o body-parser para processar dados JSON nas solicitações:
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Olá mundo! :D');
});

app.get('/login', (req, res) => {
    res.send('Estamos na tela de login');
});

app.listen(port, () => {
    console.log(`O servidor está rodando em http://localhost:${port}`)
});