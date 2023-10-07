const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use o body-parser para processar dados JSON nas solicitações:
app.use(bodyParser.json());

const todos = [
    {id: 1, task: "Fazer compras"},
    {id: 2, task: "Estudar"},
    {id: 3, task: "Estudar redes"},
    {id: 4, task: "Curso SharkEduca"}
]

app.get('/', (req, res) => {
    res.send('Olá mundo! :D');
});

//ROTA GET
app.get('/todos', (req, res) => {
    res.json(todos)
});

//ROTA POST
app.post('/todos', (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.post('/todos', (req, res) => {

})

app.get('/login', (req, res) => {
    res.send('Estamos na tela de login');
});

app.listen(port, () => {
    console.log(`O servidor está rodando em http://localhost:${port}`)
});

