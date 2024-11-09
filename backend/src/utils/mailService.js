const nodemailer = require("nodemailer")


const auth = nodemailer.createTransport({
    service: "gmail",
    secure : true,
    port : 465,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
         

    }
});


module.exports=
    auth
    




