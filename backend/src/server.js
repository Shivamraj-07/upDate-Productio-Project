const express = require("express");
const app = express();


require('dotenv').config();
const cors = require("cors")

//From the database and models
const database = require("./databaseConnection.js/database.js");

const authRouter = require("./Router/auth.js");
const HiringRouter = require("./Router/Hiring.js");
const UserRouter = require("./Router/user.js");
const ChatRouter = require("./Router/chatbot.js");



app.use(cors({
  origin: process.env.CLIENT_URL,
  
  credentials: true, // Allow credentials (like cookies) if needed
}));



app.use(express.json())

app.get("/", (req, res) => {
  res.json({
    message: "hii there",
  });
});


app.use('/',authRouter)
app.use("/",HiringRouter)
app.use("/",UserRouter)
app.use("/",ChatRouter)


database
  .then(() => {
    console.log("databse connecte....");
    const Port = process.env.PORT||5000;
    app.listen(Port, () => {
      console.log("listenign.........."+Port);
    });
  })
  .catch(() => {
    console.error("something happend with database/ check you connection");
  });