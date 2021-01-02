const { Users } = require("../models/user.model");

const addUser =async (req, res) => {
    const newUser = new Users({name : req.body.name, email :req.body.email})
    newUser.save()
    .then((response)=>{
        console.log("response: ", response)
        res.send(response)
    }).catch(err => {
        res.send(err)
    })
};

const getAllUsers = async (req, res) => {
    Users.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        res.send(err)
    })
}

const deleteUser = async (req, res) => {
    Users.deleteOne({ _id: req.body._id })
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        res.send(err)
    })
}

const updateUser = async (req, res) =>{
    Users.findOneAndUpdate({ _id: req.body._id },
    { $set: {
        name: req.body.name,
        email: req.body.email
    } })
    .then((result)=>{
       res.send("User Updated")
    })
    .catch((err)=>{
        res.send(err)
    })
}

module.exports = {
addUser,
getAllUsers,
deleteUser,
updateUser
};