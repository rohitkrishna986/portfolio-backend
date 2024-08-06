import userModel from "../../models/userModel.js";

async function userDetails (req, res) {
    try {
        const user = await userModel.findById(req.userId);

        res.status(200).json({
            data : user,
            error: false,
            success: true,
            message : "User details"
        })
    } catch (error) {
        res.status(400).json({
            message : error.message,
            error : true,
            success : false 
        })
    }
}

export default userDetails;