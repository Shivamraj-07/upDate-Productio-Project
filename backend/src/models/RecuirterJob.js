const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  vacancyTitle: { type: String, required: true },
  location: { type: String, required: true },
  lastDate: { type: Date, required: true },
  totalCandidates: { type: String, required: false },
  skillRequired: { type: String, required: false },
  workType: { type: String, required: false },
  jobType: { type: String, required: false },
  experienceLevel: { type: String, required: false },
  experienceRequirement: { type: String, required: false },
  googleFormLink: { type: String, required: false }, // Added for Google Form Link
  salary: { type: String, required: false }, // Added for Salary
  email: { type: String, required: false }, // Added for Salary
  
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
