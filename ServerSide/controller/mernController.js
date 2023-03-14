const MERN = require('../model/mernModel.js');

const addMERN = async (req, res) => {
    try {
        let data = req.body
        const newMern = await MERN.create(data)
        await newMern.save();

        return res.status(200).send(newMern);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllMern = async (req, res) => {
    try {
        const todos = await Todo.find({}).sort({ 'createdAt': -1 })

        return res.status(200).send(todos);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const toggleTodoDone = async (req, res) => {
    let paramId = req.params.id
    try {
        const todoRef = await Todo.findById(paramId);

        const todo = await Todo.findOneAndUpdate(
            { _id: paramId },
            { done: !todoRef.done }
        )

        await todo.save();

        return res.status(200).send(todo);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateTodo = async (req, res) => {
    try {
        let paramId = req.params.id
        let data = req.body
        await Todo.findOneAndUpdate(
            { _id: paramId },
            data
        )

        const todo = await Todo.findById(paramId);

        return res.status(200).send(todo);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteTodo = async (req, res) => {
    try {
        let paramId = req.params.id

        const todo = await Todo.findByIdAndDelete(paramId)

        return res.status(200).send(todo);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = { addTodo, getAllTodos, toggleTodoDone, updateTodo, deleteTodo }