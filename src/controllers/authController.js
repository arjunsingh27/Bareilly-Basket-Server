// authController.js

const bcrypt = require('bcrypt');
const User = require('../models/User');

// Controller function to handle user registration
exports.register = async (req, res) => {
    try {
        // Extract username and password from request body
        const { username, password } = req.body;

        // Check if username already exists in the database
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            console.log('Username already exists');
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user document
        const newUser = new User({
            username,
            password: hashedPassword
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({username: newUser.username});
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'An error occurred while registering user' });
    }
};

// Controller function to handle user login
exports.login = async (req, res) => {
    try {
        // Extract username and password from request body
        const { username, password } = req.body;

        // Find the user in the database
        const user = await User.findOne({ username });

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the provided password with the hashed password in the database
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        // Password is correct, user is authenticated
        // Here you can generate a JWT token and send it back to the client for authentication

        res.status(200).json({ userId: user._id, username: user.username });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'An error occurred while logging in user' });
    }
};
