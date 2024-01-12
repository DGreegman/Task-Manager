const Task = require('../models/taskModel')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../Errors/custom-errors')


// get all tasks
const getAllTasks = asyncWrapper(async(req, res) =>{
    
        const tasks = await Task.find({})
        return res.status(200).json({tasks})

})

const createTask = asyncWrapper(async(req, res) =>{
   
        const task = await Task.create(req.body)
        return res.status(201).json({task})
})

// get a specific task
const getTask = asyncWrapper(async(req, res, next) =>{
  

        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task) {
            return next(createCustomError(`No Task with id: ${taskID}`, 404))
        }
        return res.status(200).json({task})
        // const task = await Task.findOne({_id:req.params.id})
        // if(!task || task === null) {
        //     return res.status(404).json({msg:'No task found'})

        // }
})

const updateTask = asyncWrapper(async(req, res, next) =>{
   
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, 
            {
                new:true,
                runValidators:true,
            })
            if(!task) {
                return next(createCustomError(`No Task with id: ${taskID}`, 404))
            }
            return res.status(200).json({task})
})

const deleteTask = asyncWrapper(async(req, res) =>{
 
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task) {
            return next(createCustomError(`No Task with id: ${taskID}`, 404))
        }
        return res.status(200).json({task})
        
    
})

module.exports = {
    getAllTasks, 
    createTask,
    getTask,
    updateTask,
    deleteTask
}