const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const educationSchema = new Schema({
    _id: String,
    title: String,
    section: String,
    date: String,
    description: String
});

const Education = mongoose.model("Education",educationSchema);
module.exports = Education;