import userModel from "../../models/userModel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

async function userSignIn(req,res) {
        try {
            const {email, password} = req.body;

            if (!email || !password) {
                throw new Error("Please enter all the inputs");
            }
            const user = await userModel.findOne({email});

            if(!user) {
                throw new Error("User not found")
            }
            const checkPassword =await bcrypt.compare(password, user.password)
            
            if(checkPassword) {
                const tokenData = {
                    _id : user._id,
                    email : user.email
                }
                const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: 60 * 60 * 8 });

                const tokenOption = {
                    httpOnly : true,
                    secure : true
                }
                res.cookie("token", token, tokenOption).json({
                    message : "Logged in successfully",
                    data : token,
                    success : true,
                    error : false
                })
            } else {
                throw new Error("Please check password")
            }

        } catch (error) {
            res.status(400).json({
                message: error.message, // Send the error message
                error: true,
                success: false
            });
        }
}

export default userSignIn;