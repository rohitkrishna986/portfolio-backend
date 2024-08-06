import userModel from "../../models/userModel.js";

async function allUsers(req, res) {
    try {

        const allUser = await userModel.find() 
        res.json({
            message : "All users",
            data : allUser,
            success : true,
            error : false
        })
    } catch (error) {
        res.status(400).json({
            message : error.message,
            error : true,
            success : false 
        })
    }
}

export default allUsers;