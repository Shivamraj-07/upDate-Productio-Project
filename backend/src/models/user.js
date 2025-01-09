const mongoose = require("mongoose");

const userschema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // corrected 'require' to 'required'
      maxLength: 15
    },

    email: {
      type: String,
      required: true, // corrected 'require' to 'required'
      unique: true,
      lowercase: true,
      trim: true
    },
    
    password: {
      type: String,
      minLength: 8,
      maxLength: 15
    },
    
    WhoIAm: {
      type: String,
      required: true, // corrected 'require' to 'required'
      validate(value) {
        const validRoles = ['jobseeker', 'recruiter'];
        if (!validRoles.includes(value)) {
          throw new Error('Invalid value for WhoIAm. Please choose either "jobseeker" or "recruiter".');
        }
      }
    },
    
    ProfileURL: {
      type: String,
      default: "https://via.placeholder.com/150"
    },

    BgURL: {
      type: String,
      default: "https://via.placeholder.com/150"
    },

    skills: {
      type: [String],
      default: ["html", "css"]
    },

    institution: {
      type: [String],
      default: ["N/A" , "none"]
    },
    degree: {
      type: [String],
      default: ["N/A" , "none"]
    },
    company: {
      type: [String],
      default: ["N/A" , "none"]
    },
    experience_Year: {
      type: String,
      default: "0"
    },
    status: { 
      type: String, 
      default: 'Active' 
    },
    
    banned: { 
      type: Boolean, 
      default: false 
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userschema); // Conventionally, model name is capitalized

module.exports = User;