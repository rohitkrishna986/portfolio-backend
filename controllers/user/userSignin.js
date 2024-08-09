import userModel from "../../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

async function userSignIn(req, res) {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            throw new Error("Please enter all the inputs");
        }

        // Find user
        const user = await userModel.findOne({ email });
        if (!user) {
            throw new Error("User not found");
        }

        // Check password
        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) {
            throw new Error("Invalid password");
        }

        // Create JWT
        const tokenData = {
            _id: user._id,
            email: user.email
        };
        const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '8h' }); // Using string for readability

        // Cookie options
        const cookieOptions = {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Ensure HTTPS in production
            sameSite: 'Strict' // Adjust based on your needs
        };

        // Set cookie and send response
        res.cookie("token", token, cookieOptions).json({
            message: "Logged in successfully",
            data: token,
            success: true,
            error: false
        });

    } catch (error) {
        // Error response
        res.status(400).json({
            message: error.message, // Send the error message
            error: true,
            success: false
        });
    }
}

export default userSignIn;
