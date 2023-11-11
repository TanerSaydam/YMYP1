const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const todos = [];

app.get("", (req,res)=> {
    res.json({message: "Api çalışıyor!"});
})

app.get("/api/getAll",(req,res)=> {
    res.json(todos);
});

app.post("/api/create", (req,res)=> {
    const body = req.body;
    console.log(body);
    todos.push(body);
    res.json({message: ""});
})

app.listen(3200,()=> console.log("localhost:3200 üzerinden ayakta!"));