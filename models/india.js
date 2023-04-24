const mongoose = require("mongoose")
const indiaSchema = mongoose.Schema({
    state_name: {
        type: String,
        required: true,
        unique: true,
        minLength: [3, "Name of the State is not valid"],
      },
    state_population:  {
        type: Number,
        required: true,
        min: [5000, "Population of the State is not valid"],
      },
    state_language: {
        type: String,
        required: true,
        minLength: [2, "Language of the State is not valid"],
      },
})
module.exports = mongoose.model("india",
    indiaSchema)