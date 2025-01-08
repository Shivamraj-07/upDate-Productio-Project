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
    
    Education: {
      type: [String]
    },
    
    status: { 
      type: String, 
      default: 'Active' 
    },
    
    banned: { 
      type: Boolean, 
      default: false 
    },
    
    Experience: {
      type: [String]
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userschema); // Conventionally, model name is capitalized

module.exports = User;
