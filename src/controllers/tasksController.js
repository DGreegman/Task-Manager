const Task = require('../models/taskModel')
// get all tasks
const getAllTasks = async(req, res) =>{
    try{
        const tasks = await Task.find({})
        return res.status(200).json({tasks})
    }catch(error){
       return res.status(500).json({msg: error})
    }
}

const createTask = async(req, res) =>{
    try{
        const task = await Task.create(req.body)
        return res.status(201).json({task})
    }catch(error){
       return res.status(500).json({msg: error})
    }
}

// get a specific task
const getTask = async(req, res) =>{
    try {

        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task) {
            return res.status(404).json({msg:'No task found'})
        }
        return res.status(200).json({task})
        // const task = await Task.findOne({_id:req.params.id})
        // if(!task || task === null) {
        //     return res.status(404).json({msg:'No task found'})

        // }
    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
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