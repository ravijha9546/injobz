const express = require("express");
const connectdb=require("../config/dbconnect")

const app = express();

connectdb()
.then(()=>{
    console.log("Database is ready ");
    app.listen(7777,(req,res)=>{
        console.log("server is ready");
    })
})
.catch((err)=>{
    console.log("some issue occured");
})


app.get("/",(req,res)=>{
    res.send("This is injob server");
});


