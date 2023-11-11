const mongoose = require("mongoose");
const uri = "mongodb+srv://test:1@testdb.qrdkma9.mongodb.net/";

function connect(){
    mongoose.connect(uri).then(res=> {
        console.log("Mongodb bağlantısı başarılı");
    });
}

module.exports = connect;


