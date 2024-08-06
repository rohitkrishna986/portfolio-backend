import cartModel from '../../models/cartProduct.js'

const addToCartView  = async(req,res) => {
    try {
        const currentUser = req.userId;

        const allProduct = await cartModel.find({
            userId : currentUser
        }).populate("productId")

        res.json({
            data : allProduct,
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

export default addToCartView;