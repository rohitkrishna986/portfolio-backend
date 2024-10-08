import productModel from '../../models/productModel.js'
import uploadProductPermission from '../../helper/permission.js'

async function updateProductController (req,res) {
    try {
        if(!uploadProductPermission(req.userId)) {
            throw new Error("Permission denied")
        }
        const { _id, ...resBody} = req.body
        const updateProduct = await productModel.findByIdAndUpdate(_id, resBody)

        res.json({
            message : 'Products updated successfully',
            data: updateProduct,
            success : true,
            error : false
        })

        
    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: true,
            success: false
        });
    }
}

export default updateProductController;