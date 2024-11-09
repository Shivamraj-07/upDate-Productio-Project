const mongoose=require("mongoose")



const ApplySchema=mongoose.Schema({
    jobID:{
        type:String,
        required:true

    },
    UID:{
        type:String,
        required:true
    },
    UserName:{
        type:String,
        required:true

    },
    jobTitle:{

        type:String,
        required:true
    },
   
   

    
}, { timestamps: true })

const ApplyForJob=mongoose.model("ApplyForJob",ApplySchema);
module.exports=ApplyForJob;