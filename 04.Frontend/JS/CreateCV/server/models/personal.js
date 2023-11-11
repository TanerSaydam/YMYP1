const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personalSchema = new Schema({
    _id:String,
    name: String,
    title: String,
    phone: String,
    email: String,
    address: String,
    dateOfBirth: Date,
    avatar: String,
    aboutMe: String
});

const Personal = mongoose.model("Personal", personalSchema);
module.exports = Personal;