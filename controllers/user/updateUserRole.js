import userModel from "../../models/userModel.js"

async function updateUserRole (req, res) {
    try {
        const sessionUser = req.userId

        const {userId, name, email, role} = req.body

        const payload = {
            ...(email && {email : email}),
            ...(name && {name : name}),
            ...(role && {role : role}),
        }
        const user = await userModel.findById(sessionUser)
        console.log(user.role);

        const updateUser = await userModel.findByIdAndUpdate(userId, payload)
        
        res.json({
            data : updateUser,
            message : "User updated",
            error : false,
            success : true
        })
    } catch (error) {
        res.status(400).json({
            message : error.message,
            error : true,
            success : false 
        })
    }
}

export default updateUserRole;