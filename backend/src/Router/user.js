const bodyParser = require("body-parser");
const ApplyForJob = require("../models/Applied");
const job = require("../models/jobs");
const User = require("../models/user");
const IsAuthenticated = require("../utils/IsAuthenticated");
const express = require("express");

const { loginUser } = require('../controllers/userController');


require("dotenv").config();

const UserRouter = express.Router();

UserRouter.get("/Profile/", IsAuthenticated, (req, res) => {
  try {
    const { _id, name, ProfileURL, BgURL, WhoIAm, skills, email } = req.user;
    res.json({ _id, name, skills, ProfileURL, WhoIAm, BgURL, email });
  } catch (error) {
    res.send("something wne t wrong");
  }
});



UserRouter.get("/MarketPlace", IsAuthenticated, async (req, res) => {
   const limit=req.query.limit||10;
   const page=req.query.page||1
   const skip =(page-1)*limit ;
  try {
    const jobs = await job.find().skip(skip).limit(limit);
    return res.send(jobs);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error fetching jobs");
  }
});

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req._id = decoded._id;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};


UserRouter.put("/Profile/edit",IsAuthenticated ,async(req, res) => {
  try {
    const userUpdates = req.body;
    // const allowedUpdates = ["name", "skills", "ProfileURL", "BgURL","Education", "Experince"];
 
  
    // Check if all keys in the update are allowed
    // const isAllowed = Object.keys(userUpdates).every(key => allowedUpdates.includes(key));
    // if (!isAllowed) {
    //   return res.status(400).json({ message: "Invalid update keys provided." });
    // }
  
    // Check if ProfileURL or BgURL size exceeds the allowed limit
  
    const updatedUser = await User.findByIdAndUpdate(
      { _id: req.user._id },
      userUpdates,
      {
        new: true, // Return the updated document
        runValidators: true,
      }
    );
    return res.status(200).json({ message: 'Request was successful'})
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "An error occurred while updating the profile." });
  }
  
  
    });
  


UserRouter.get("/job/:jobid", IsAuthenticated, async (req, res) => {
  try {
    const jobid = req.params.jobid;
    const jobdetails = await job.findOne({ _id: jobid });

    res.send(jobdetails);
  } catch (error) {
    res.status(400).send("seems like your jobid is not exist");
  }
});

// Backend route to get recruiters
UserRouter.get('/recruiters', async (req, res) => {
  try {
    const recruiters = await User.find({ WhoIAm: 'recruiter' });
    res.status(200).json(recruiters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching recruiters' });
  }
});

// Toggle Ban/Unban Route
// Assuming you're using Express.js
UserRouter.patch('/recruiters/:email/ban', async (req, res) => {
  try {
    const { email } = req.params; // Extract the recruiter's email from the URL
    const { status } = req.body; // Extract the status from the request body

    // Log email and status for debugging
    console.log('Received Request:');
    console.log('Email:', email);
    console.log('Status:', status);

    if (!['Active', 'Banned'].includes(status)) {
      console.log('Invalid status received:', status);
      return res.status(400).json({ message: 'Invalid status. Use "Active" or "Banned".' });
    }

    // Find the recruiter by email
    const recruiter = await User.findOne({ email });

    if (!recruiter) {
      console.log('Recruiter not found for email:', email);
      return res.status(404).json({ message: 'Recruiter not found.' });
    }

    // Update status and banned flag
    recruiter.status = status;
    recruiter.banned = status === 'Banned';

    await recruiter.save(); // Save the changes

    console.log('Updated Recruiter:', {
      email: recruiter.email,
      status: recruiter.status,
      banned: recruiter.banned,
    });

    return res.status(200).json({
      message: `Recruiter status updated to ${status}.`,
      recruiter,
    });
  } catch (error) {
    console.error('Error in /recruiters/:email/ban route:', error);
    return res.status(500).json({ message: 'Error updating recruiter status.', error: error.message });
  }
});



UserRouter.post('/login', loginUser);


module.exports = UserRouter;
