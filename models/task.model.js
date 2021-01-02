const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const schema = new Schema({
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String
    },
    assignedTo: {
      type: Object,
      required: true,
    }
})

module.exports.Tasks = mongoose.model("tasks", schema);