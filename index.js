const express=require("express");
const app=express();
const { connection } = require("./db");
const { jobRouter } = require("./routes/job.routes");
const cors=require("cors");

app.use(express.json());
app.use(cors())

app.get("/",(req,res)=>{
    res.send("homepage")
})

app.use("/jobs",jobRouter)


app.listen(8080,async()=>{
    try{
        await connection;
        console.log("connected to DB")
    }catch(err){
        console.log(err);
        console.log("cannot connected to db")
    }
    console.log("server is running a port 8080")
})