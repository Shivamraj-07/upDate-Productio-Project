const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const app = express();

// Import database connection
const database = require("./databaseConnection.js/database.js");

// Import Routers
const authRouter = require("./Router/auth.js");

const UserRouter = require("./Router/user.js");
const ChatRouter = require("./Router/chatbot.js");
const payment = require("./Router/Payment.js");
const jobRoutes = require("./Router/jobRoutes.js"); // Import the Job Routes
const courseRoutes = require("./Router/courses");


// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true, // Allow credentials (like cookies) if needed
}));
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));

// Default Route
app.get("/", (req, res) => {
  res.json({
    message: "hii there",
  });
});

// Use Routers
app.use("/", authRouter);

app.use("/", UserRouter);
app.use("/", ChatRouter);
app.use("/", payment);
app.use("/api/jobs", jobRoutes); // Job Routes
app.use('/api', jobRoutes); 

const adminCredentials = {
  username: "admin",   // Set admin username here
  password: "Admin123" // Set admin password here
};

app.post("/auth/login", (req, res) => {
  const { username, password } = req.body;

  if (username === adminCredentials.username && password === adminCredentials.password) {
    const token = jwt.sign({ username, role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

app.get("/auth/validate", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token is valid:", decoded);
    res.status(200).json({ valid: true, role: decoded.role });
  } catch (error) {
    console.error("Invalid token:", error.message);
    res.status(403).json({ message: "Invalid token" });
  }
});



// Use routes
app.use("/api/courses", courseRoutes);






// Database Connection
database
  .then(() => {
    console.log("Database connected....");
    const Port = process.env.PORT || 5000;
    app.listen(Port, () => {
      console.log("Listening on port " + Port);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
