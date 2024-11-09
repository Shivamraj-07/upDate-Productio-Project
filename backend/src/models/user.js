const mongoose = require("mongoose");

const userschema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      maxLength:15
    },

    email: {
      type: String,
      require: true,
      unique: true,
      lowercase:true,
      trim:true
      
    },
    password: {
      type: String,
      minLength:8,
      maxLength:15
    },
    WhoIAm: {
      type: String,
      require: true,
      validate(value) {
        if (value==="jobseeker" || value ==="recruiter") {
  console.log("good");
  
         
        }
        else{
          throw new Error("error with who i am please choose correclty")
        }
      },
     
    },
    ProfileURL:{
      type:String,
      default:"https://via.placeholder.com/150"
    },
    BgURL:{
        type:String,
              default:"https://via.placeholder.com/150"
        
    },

    skills:{
        type:[String],
        default:["html","css"]


    }

  },
  { timestamps: true }
);

const User = mongoose.model("user", userschema);

module.exports = User;
