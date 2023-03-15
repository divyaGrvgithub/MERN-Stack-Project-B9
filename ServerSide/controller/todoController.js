const Todo = require('../model/todoModel.js');

const CreateTodo = async (req, res) => {
    try {
        let data = req.body
        const newTodo = await Todo.create(data)
        await newTodo.save();

        return res.status(200).send({status:true,data:newTodo});
    } catch (error) {
        return res.status(500).send({status:false,error:error.message});
    }
}

const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find({}).sort({ 'createdAt': -1 })
        return res.status(200).send({status:true,data:todos});
    } catch (error) {
        return res.status(500).send({status:false,error:error.message});
    }
}

const toggleTodo = async (req, res) => {
    let paramId = req.params.id
    try {
        const todoRef = await Todo.findById(paramId);

        const todo = await Todo.findOneAndUpdate(
            { _id: paramId },
            { done: !todoRef.done }
        )

        await todo.save();

        return res.status(200).send({status:true,data:todo});
    } catch (error) {
        return res.status(500).send({status:false,error:error.message});
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

        return res.status(200).send({status:true,data:todo});
    } catch (error) {
        return res.status(500).send({status:false,error:error.message});
    }
}

const deleteTodo = async (req, res) => {
    try {
        let paramId = req.params.id

        const todo = await Todo.findByIdAndDelete(paramId)

        return res.status(200).send({status:true,data:todo});
    } catch (error) {
        return res.status(500).send({status:false,error:error.message});
    }
}

module.exports.CreateTodo=CreateTodo; 
module.exports.getAllTodos=getAllTodos;
module.exports.toggleTodo =toggleTodo;
module.exports.updateTodo=updateTodo;
module.exports.deleteTodo=deleteTodo;