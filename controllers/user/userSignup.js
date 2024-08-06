// controllers/userSignup.js
import userModel from '../../models/userModel.js';
import bcrypt from 'bcryptjs';

async function UserSignUp(req, res) {
    try {
        const { email, password, name } = req.body;

        const user = await userModel.findOne({email})

        if(user){
            throw new Error("User already available")
        }

        if (!email || !password || !name) {
            throw new Error("Please enter all the inputs");
        }

        const salt = await bcrypt.genSalt(10); // Await the genSalt function
        const hashpassword = await bcrypt.hash(password, salt);

        if (!hashpassword) {
            throw new Error("Something is wrong");
        }

        const payload = {
            ...req.body,
            role: "General",
            password: hashpassword
        };

        const userData = new userModel(payload);
        const saveUser = await userData.save(); // Await the save function

        res.status(201).json({
            message: "User Created Successfully",
            data: saveUser,
            success: true,
            error: false
        });

    } catch (error) {
        res.status(400).json({
            message: error.message, // Send the error message
            error: true,
            success: false
        });
    }
}

export default UserSignUp; // Export the function directly
