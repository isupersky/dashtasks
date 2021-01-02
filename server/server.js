const express = require("express")
const mongoose = require("mongoose")
const bodyParser= require("body-parser")
const cors = require("cors")
// const {Users} = require("../models/user.model")

const app = express()
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true}
,()=>{console.log("mongo is connected")})

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", require("../routes/user.route"));
app.use("/task", require("../routes/task.route"));


app.listen(8081, ()=>{
    console.log("App is listening")
})



