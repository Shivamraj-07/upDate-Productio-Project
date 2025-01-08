const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function loginUser(req, res) {
    const { email, password } = req.body;

    try {
        // Step 1: Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Step 2: Validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Step 3: Check if user._id exists (extra validation)
        if (!user || !user._id) {
            return res.status(400).json({ message: "User data is missing or invalid" });
        }

        // Step 4: Generate JWT Token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        
        // Step 5: Send the token to the user
        return res.status(200).json({ token });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { loginUser };
