const express=require("express");
const { JobModel } = require("../models/job.model");

const jobRouter=express.Router();

jobRouter.post("/create",async(req,res)=>{
    try{
        const job=new JobModel(req.body);
        await job.save();
        res.send({"msg":"job is added"})
    }
    catch(err){
        res.send(err);
    }
})

jobRouter.get("/",async(req,res)=>{
    try{
        const job=await JobModel.find();
        res.send(job);
    }
    catch(err){
        res.send(err);
    }
})

module.exports={jobRouter};