const express = require("express");
const Job = require("../models/RecuirterJob.js");


const router = express.Router();

// Add a job
router.post("/", async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json({ message: "Job added successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add job" });
  }
});

// Get all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

router.delete('/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      return res.status(404).send({ message: 'Job not found' });
    }
    res.status(200).send({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error deleting job', error });
  }
});

module.exports = router;
