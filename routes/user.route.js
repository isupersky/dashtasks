const route = require("express").Router();
const {
  addUser,
  getAllUsers,
  deleteUser,
  updateUser
} = require("../controllers/user.controller");

route.post("/", addUser);
route.get("/", getAllUsers)
route.delete("/", deleteUser)
route.put("/", updateUser)

module.exports = route;