import userModel from "../models/userModel.js";

const uploadProductPermission = async (userId) => {
    try {
        const user = await userModel.findById(userId);

        // Check if user exists
        if (!user) {
            return false; // Or handle the case where user is not found
        }

        // Check if user is an admin
        if (user.role === 'ADMIN') {
            return true; // User is admin
        } else {
            return false; // User is not admin
        }
    } catch (error) {
        console.error("Error in uploadProductPermission:", error);
        return false; // Return false or handle error appropriately
    }
};

export default uploadProductPermission;
