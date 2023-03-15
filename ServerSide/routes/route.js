const express = require('express');
const TodoController= require('../controller/todoController.js');
const route = express.Router();

route.post('/todos',TodoController.addTodo)
route.get('/todos', TodoController.getAllTodos);
route.get('/todos/:id', TodoController.toggleTodoDone);
route.put('/todos/:id', TodoController.updateTodo);
route.delete('/todos/:id', TodoController.deleteTodo);

module.exports = route;