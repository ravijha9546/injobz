const express = require("express");

const app = express();
app.get("/",(req,res)=>{
    res.send("This is injob server");
})

app.listen(7777,(req,res)=>{
    console.log("server is ready");
})