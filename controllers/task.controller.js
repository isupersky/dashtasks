const { Tasks } = require("../models/task.model");

const addTask =async (req, res) => {
    const newTask = new Tasks({
        heading : req.body.heading, 
        description :req.body.description,
        assignedTo :req.body.assignedTo,
    })
    newTask.save()
    .then((response)=>{
        console.log("response: ", response)
        res.send(response)
    }).catch(err => {
        res.send(err)
    })
};

const getAllTasks = async (req, res) => {
    Tasks.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        res.send(err)
    })
}

const getTasksbyUser = async (req, res) => {
    Tasks.find({assignedTo : req.body.assignedTo})
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        res.send(err)
    })
}

const deleteTask = async (req, res) => {
    Tasks.deleteOne({ _id: req.body._id })
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        res.send(err)
    })
}

const updateTask = async (req, res) =>{
    Tasks.findOneAndUpdate({ _id: req.body._id },
    { $set: {
        heading : req.body.heading, 
        description :req.body.description,
        assignedTo :req.body.assignedTo,
    } })
    .then((result)=>{
       res.send("Task Updated")
    })
    .catch((err)=>{
        res.send(err)
    })
}

module.exports = {
addTask,
getAllTasks,
getTasksbyUser,
deleteTask,
updateTask
};