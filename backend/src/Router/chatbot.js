const express = require("express");

const ChatRouter=express.Router()


const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables

const app = express();


app.use(cors());
app.use(express.json());

// Predefined questions and answers
 const qaPairs = {
  "help":"there are services we are providing  "+
  "Ai mock interview"+"  you can Apply for jobs click on find jobs",
    "welcome": "welcome aboard!",
  "how's it going?": "everything's going great, thanks!",
  "what's up?": "not much, just here to help!",
  "have a nice day": "you too, enjoy your day!",
  "see you later": "catch you later!",
  "take care": "you take care as well!",
  "happy to help": "always here for you!",
  "good luck": "wishing you all the best!","welcome": "welcome aboard!",
  "how's it going?": "everything's going great, thanks!",
  "what's up?": "not much, just here to help!",
  "have a nice day": "you too, enjoy your day!",
  "see you later": "catch you later!",
  "take care": "you take care as well!",
  "happy to help": "always here for you!",
  "good luck": "wishing you all the best!",
   "hi": "hello ! How Can I help You",
  "good morning": "good morning, have a great day",
  "how are you?": "I'm doing well, thank you!",
  "good evening": "good evening, hope you're well",
  "thank you": "you're welcome!",
    "name": "I am a job seeker assistant.",
    "apply": "You can apply for a job by visiting our careers page.",
    "skills": "The required skills vary by job, but generally, good communication and teamwork are important.",
    "interview": "The interview process typically includes a phone screening followed by one or more in-person interviews.",
    "resume": "Absolutely! I can provide tips and examples for creating a great resume.",
    "JOB": "Yes Ovbiously Go to our market Section And Apply."
  };
  
  // Setup nodemailer transporter with Elastic Email
  const transporter = nodemailer.createTransport({
    host: 'smtp.elasticemail.com',
    port: 2525,
    secure: false,
    auth: {
      user: "bobychs66@gmail.com", 
      pass: "0DB60BB7D11B3C96AE8BC8E66DA1B1CBDD35" 
    }
  });
  
  // Chat endpoint

ChatRouter.post('/chat', async (req, res) => {
    console.log('Received question:', req.body.question); 
  
    const userQuestion = req.body.question?.toLowerCase();
    if (!userQuestion) {
      return res.status(400).json({ answer: "No question provided." });
    }
  
    let answer = "I'm sorry, I don't have an answer for that question.";
    let isMatched = false;
  
    for (const keyword in qaPairs) {
      if (userQuestion.includes(keyword)) {
        answer = qaPairs[keyword];
        isMatched = true;
        break;
      }
    }
  
    if (!isMatched) {
      const mailOptions = {
        from: 'bobychs66@gmail.com', 
        to: 'bobychs66@gmail.com',
        subject: 'New Question from User',
        text: `A user asked: "${req.body.question}"`
      };
  
      try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent');
      } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ answer: "There was an error processing your question." });
      }
      answer = "We have received your question, and our team will respond shortly.";
    }
  
    res.json({ answer });
  });
module.exports=ChatRouter