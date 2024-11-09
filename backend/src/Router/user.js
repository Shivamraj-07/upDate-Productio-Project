const bodyParser = require("body-parser");
const ApplyForJob = require("../models/Applied");
const job = require("../models/jobs");
const User = require("../models/user");
const IsAuthenticated = require("../utils/IsAuthenticated");
const express = require("express");

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

// UserRouter.post("/api/apply/:jobId",IsAuthenticated,async(req,res)=>{
//     try {

//       const Job_ID=req.params.jobId;
//        const u_id=req.user._id
//     const user=req.user;
//     const jobdetails=await job.findOne({_id:Job_ID})

//        const appliedJob = new ApplyForJob({jobID:Job_ID ,UID:u_id,UserName:user.name,jobTitle:jobdetails.title})

//        if(appliedJob){
//          await appliedJob.save()
//      return  res.send( u_id +"applyeid "+Job_ID)
//        }
//        res.json({
//         message:"try again later"
//        })

//     } catch (error) {
//       return res.json({
//         message:"something went wrong"
//       })
//     }
//   })

UserRouter.get("/MarketPlace", IsAuthenticated, async (req, res) => {
  try {
    const jobs = await job.find();
    return res.send(jobs);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error fetching jobs");
  }
});

//   try {
//     const userUpdates = req.body;
//     const allowedUpdates = ["name", "skills", "ProfileURL", "BgURL"];
//     const isAllowed = Object.keys(userUpdates).every(key => allowedUpdates.includes(key));
//     const MaxSize=process.env.MAX_NAME_LENGTH

//     // Check if all keys in the update are allowed
//     if (!isAllowed) {
//       return res.status(400).json({ message: "Invalid update keys provided." });
//     }

//     // Validate the name length
//     if (userUpdates.name && userUpdates.name.length > MaxSize) {
//       return res.status(400).json({ message: `Name should be a maximum of ${MaxSize} characters.` });
//     }

//     // Validate ProfileURL format and size (assuming ProfileURL is a URL to an image)
//     if (
//       userUpdates.ProfileURL &&
//       (!/^https?:\/\/.*$/.test(userUpdates.ProfileURL) || Buffer.byteLength(userUpdates.ProfileURL, 'utf8') > process.env.MAX_IMAGE_SIZE)
//     ) {
//       return res.status(400).json({ message: "ProfileURL must be a valid URL and image size should be under 2MB." });
//     }

//     // Validate BgURL format and size (assuming BgURL is also a URL to an image)
//     if (
//       userUpdates.BgURL &&
//       (!/^https?:\/\/.*$/.test(userUpdates.BgURL) || Buffer.byteLength(userUpdates.BgURL, 'utf8') >process.env.MAX_IMAGE_SIZE)
//     ) {
//       return res.status(400).json({ message: "BgURL must be a valid URL and image size should be under 2MB." });
//     }

//     // Update the user in the database if all validations pass
//     const updatedUser = await User.findByIdAndUpdate(
//       { _id: req.user._id },
//       userUpdates,
//       {
//         new: true, // Return the updated document
//         runValidators: true,
//       }
//     );

//     res.json({ message: "Update successful", user: updatedUser });
//   } catch (error) {
//     console.error("Error updating profile:", error);
//     res.status(500).json({ message: "An error occurred while updating the profile." });
//   }
// });
UserRouter.patch("/Profile/edit", (req, res) => {
  try {
    const { name, skills, ProfileURL, BgURL } = req.body;

   
    if (!name || !skills || !ProfileURL || !BgURL) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (typeof name !== "string" || !Array.isArray(skills)) {
      return res.status(400).json({ message: "Invalid data format." });
    }


    res.status(200).json({ message: "Profile updated successfully." });
  } catch (error) {
    const {message}=error
    res.send(message)
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

module.exports = UserRouter;
