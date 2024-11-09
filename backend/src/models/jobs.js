const mongoose=require("mongoose")


const jobschema=mongoose.Schema({

    title:{
        type:String,
        required:true,
        maxLength:40,
    },
    CompanyName:{
        type:String,
        minLength:10,
        maxLength:30,
        required:true

    },
    Mode:{
        type:String,
        required:true,
        validate(value){
            if(!["remote","onsite","hybrid"].includes(value)){
                throw new Error("select a valid mode type")
            }
        }
    },
    Type:{
type:String,
required:true,
validate(value){
    if(!["Internship","fullTime","PartTime"].includes(value)){
        throw new Error("please select the corerct type")
    }
}
    },
    NumberOfOpenings:{
        type:String,
        min:5,
        
    },
    perks:{
        type:String,
        minLength:50,
        required:true

    },
    SkillRequired: {
        type: [String],
        required: true,
        validate: {
            validator: (arr) => arr.length >= 2 && arr.length <= 20, // For example, min of 2 skills, max of 10
            message: "SkillRequired should have between 2 and 10 skills"
        }
    },
    
    description:{
        type:String,
        required:true,
        minLength:50,
        maxLength:500
        
    },
    experience:{
      type:String,
      required:true,
     
    },
    salary:{
        type:String,
        required:true
    },
    lastDate:{
        type:String,
        required:true
    },
    googleForm:{
        type:String,
        required:true
    }


})
const job=mongoose.model("job",jobschema);
module.exports=job;