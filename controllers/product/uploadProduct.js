import uploadProductPermission from '../../helper/permission.js'
import productModel from '../../models/productModel.js'

async function uploadProductController(req,res) {
    try {
        const sessionUserId = req.sessionUserId
        if(!uploadProductPermission(sessionUserId)) {
            throw new Error("Permission denied")
        }
        const uploadProduct = new productModel(req.body)
        const saveProduct = await uploadProduct.save()
        res.status(200).json({
            message : "Product uploaded successfully",
            success : true,
            error : false,
            data : saveProduct
        })
    } catch (error) {
        res.status(400).json({
            message : error.message,
            error : true,
            success : false 
        })
    }
}

export default uploadProductController;