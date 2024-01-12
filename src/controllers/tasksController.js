const Task = require('../models/taskModel')
// get all tasks
const getAllTasks = async(req, res) =>{
    res.send('get all tasks')
}

const createTask = async(req, res) =>{
    const task = await Task.create(req.body)
    res.status(201).json({task})
    res.send('create task')
}

const getTask = async(req, res) =>{
    res.json({id:req.params.id})
}

const updateTask = async(req, res) =>{
    res.send('Update task')
}

const deleteTask = async(req, res) =>{
    res.send('Delete Task')
}

module.exports = {
    getAllTasks, 
    createTask,
    getTask,
    updateTask,
    deleteTask
}