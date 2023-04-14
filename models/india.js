const mongoose = require("mongoose")
const indiaSchema = mongoose.Schema({
    state_name: String,
    state_population: Number,
    state_language: String
})
module.exports = mongoose.model("india",
    indiaSchema)