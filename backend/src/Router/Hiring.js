const bodyParser = require("body-parser");
const IsAuthenticated = require("../utils/IsAuthenticated")
const express=require("express");
const job = require("../models/jobs");

const HiringRouter=express.Router()

// HiringRouter.use(bodyParser.json())




HiringRouter.post("/api/add/job", IsAuthenticated, async (req, res) => {
  if (req.user.WhoIAm !== "recruiter") {
    return res.status(403).json({ message: "Access denied. Only recruiters can add jobs." });
  }

  try {
    const {
      title,
      CompanyName,
      Mode,
      Type,
      NumberOfOpenings,
      perks,
      SkillRequired,
      description,
      experience,
      salary,
      lastDate,
      googleForm
    } = req.body;


    const newJob = new job({
      title,
      CompanyName,
      Mode,
      Type,
      NumberOfOpenings,
      perks,
      SkillRequired,
      description,
      experience,
      salary,
      lastDate,
      googleForm
    });

    // Save the job to the database
    await newJob.save();
    return res.status(201).json({ message: "Job added successfully", data: newJob });

  } catch (error) {
    
    return res.status(500).json({ message: "An error occurred while adding the job." });
  }
});

module.exports = HiringRouter;


  module.exports=HiringRouter