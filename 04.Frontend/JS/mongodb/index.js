const uri = "mongodb+srv://test:1@testdb.qrdkma9.mongodb.net/";

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const response = require("./services/response");
const Schema = mongoose.Schema;

app.use(cors());
app.use(express.json());

mongoose.connect(uri).then(res=> {
    console.log("Connection is successful")
});

const todoSchema = new Schema({
    _id: String,
    work: {
        type: String,
        required: true,
        unique: true
    },
    isCompleted: Boolean
    //name: String
});

const Todo = mongoose.model("Todo",todoSchema);

app.get("/api/getall", async(req,res)=> {
    response(res, async()=> {
        const result = await Todo.find({}); //select * from Todos where Id=1
        res.json(result);
    });

    // try {
    //     const result = await Todo.find({}); //select * from Todos where Id=1
    //     res.json(result);
    // } catch (error) {
    //     res.status(500).json({message: error})
    // }
});

app.get("/api/add", async(req,res)=> {
    response(res, async()=> {
        // const body = new Todo(req.body);
        // await body.save();
        const todo = new Todo();
        todo._id = "3";        
        todo.work = "Deneme";
        todo.isCompleted = true

        await todo.save();
        res.json({message: "Create is successfull"})
    });

    // try {
    //     const todo = new Todo();
    //     todo._id = "1";        
    //     todo.work = "Deneme";
    //     todo.isCompleted = true

    //     await todo.save();
    //     res.json({message: "Create is successfull"})

    // } catch (error) {
    //     res.status(500).json(error)
    // }
})

app.get("/api/removeById", async(req,res)=> {
    response(res, async()=> {
        await Todo.findByIdAndRemove("1");
        res.json({message: "Remove is successfull"});
    });
    // try {
    //     await Todo.findByIdAndRemove("1");
    //     res.json({message: "Remove is successfull"});
    // } catch (error) {
    //     res.status(500).json(error)
    // }
})

app.listen("5000", ()=> console.log("http://localhost:5000 port üzerinde ayakta"));