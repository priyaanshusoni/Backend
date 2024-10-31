const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 4000


const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.get("/twitter",(req,res)=>{
    res.send("https://x.com/priyaanshu_555")
})
app.get("/login",(req,res)=>{
    res.send("<h1>login page </h1>")
})


app.listen(PORT , ()=>{
    console.log(`App is listening on ${PORT}`);
    
})