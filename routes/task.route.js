const route = require("express").Router();
const {
    addTask,
    getAllTasks,
    deleteTask,
    getTasksbyUser,
    updateTask
} = require("../controllers/task.controller");

route.post("/", addTask);
route.get("/", getAllTasks)
route.get("/user/", getTasksbyUser)
route.delete("/", deleteTask)
route.put("/", updateTask)

module.exports = route;