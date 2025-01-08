const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

async function IsAuthenticated(req, res, next) {
    try {
        const cookies = req.cookies;
        const { token } = cookies;

        if (!token) {
            return res.status(401).json({ message: "Please login" });
        }

        // Verifying the JWT token
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);

        // Extracting the user id from the decoded token
        const { _id } = decoded;

        // Fetch the user from the database
        const user = await User.findById(_id);

        if (!user) {
            return res.status(401).json({ message: "Invalid token" });
        }

        if (user.banned) {
            return res.status(403).json({ message: "Your account is banned. Please contact support." });
        }

        // Attach the user to the request object
        req.user = user;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.error(error);

        // Handle token expiration
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: "Token has expired. Please log in again." });
        }

        // Handle other errors
        return res.status(500).json({ message: "Something went wrong" });
    }
}

module.exports = IsAuthenticated;
