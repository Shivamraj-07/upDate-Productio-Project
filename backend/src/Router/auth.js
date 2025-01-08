const express = require("express");
const cookieParser = require("cookie-parser");
const User = require("../models/user");
const IsAuthenticated = require("../utils/IsAuthenticated");
const jwt = require("jsonwebtoken");
const auth = require("../utils/mailService");

require("dotenv").config();

const authRouter = express.Router();

authRouter.post("/api/getstarted", async (req, res) => {
  try {
    const { name, email, WhoIAm, password } = req.body;
    const user = await new User({ name, email, password, WhoIAm });
   
    await user.save();
    const receiver= {
      from: process.env.EMAIL,
      to: email,
      subject: "welcome to Updats",
      text:`Welcome to Updats! 
    Hi there,
    
    We are thrilled to have you on board! 🎉 Thank you for registering with us. You are now part of a community where you’ll get access to exclusive content, personalized recommendations, and more.
    To get started, here are a few things you can do right away:
    - Explore your dashboard and customize your profile.
    - Discover new job opportunities tailored just for you.
    - Create opportunities to support young talent in our community.
    - Check out our latest updates at https://updats.com.
    
    
    If you have any questions, feel free to reach out to our support team at updats@gmail.com.
    
    Happy exploring, and welcome once again!
    
    Best,
    
    The Updats Team` ,
    }
        auth.sendMail(receiver
         ,
          (error, emailResponse) => {
            if (error) throw error;
       
            response.end();
          }
        );
   
    res.status(200).send("You Are Registered Successfully...!");
  } catch (error) {
    const {message}=error
    console.log(message)
    res.status(400).send(message);
  }
});

authRouter.use(cookieParser());
authRouter.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    } else {
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
      res.cookie("token", token);

      return res.send("successful login");
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

authRouter.get("/auth/check", IsAuthenticated, (req, res) => {
  try {
    res.json({ Authenticated: true, WhoIAm: req.user.WhoIAm });
  } catch (error) {
    res.json({ message: "token is not valid" });
  }
});

authRouter.post("/api/logout", IsAuthenticated, (req, res) => {
  try {
    res.cookie("token", null, { expires: new Date(Date.now()) });

    return res.json({ message: "logout sucess" });
  } catch (error) {
    return res.json({
      message: "something went wrong",
    });
  }
});

module.exports = authRouter;
