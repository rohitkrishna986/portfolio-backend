async function userLogout (req,res) {
    try {
        res.clearCookie("token")

        res.json({
            message: 'Logged out successfully',
            error : false,
            success : true,
            data: []
        })
    } catch (error) {
        res.status(400).json({
            message : error,
            error : true,
            success : false
        })
    }
} 

export default userLogout;