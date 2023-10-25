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
app.get('/users', (req, res) => {
    res.json(todos)
});

//ROTA POST
app.post('/users', (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

//Rota PUT para atualizar uma tarefa pelo ID
app.put('/users/:id', (req, res) => {
    const idToUpdate = parseInt(req.params.id);
    const updatedTask = req.body;

    const index = todos.findIndex(todo => todo.id === idToUpdate)

    if (index !== -1) {
        todos[index] = updatedTask;
        res.json(updatedTask);
    } else {
      res.status(404).json({ error: 'Tarefa não encontrada'}) ;       
    }
});

//Rota DELETE para excluir uma tarefa pelo ID
app.delete('/users/:id', (req, res) => {
    const idToDelete = parseInt(req.params.id);
    const index = todos.findIndex(todo => todo.id === idToDelete)

    if (index !== -1) {
        todos.splice(index, 1);
        res.status(204)
        }else {
      res.status(404).json({ error: 'Tarefa não encontrada'});       
    }
});

app.post('/users', (req, res) => {

})

app.get('/login', (req, res) => {
    res.send('Estamos na tela de login');
});

app.listen(port, () => {
    console.log(`O servidor está rodando em http://localhost:${port}`)
});

