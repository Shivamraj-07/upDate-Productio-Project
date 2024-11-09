const mongoose = require('mongoose');
require("dotenv").config()



const database=mongoose.connect(`${process.env.MONGO_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
 




module.exports =database

