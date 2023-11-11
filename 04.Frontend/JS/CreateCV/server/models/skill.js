const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    _id: String,
    title: {
        type: String,
        unique: true
    },
    rate: Number
});

const Skill = mongoose.model("Skill",skillSchema);
module.exports = Skill;