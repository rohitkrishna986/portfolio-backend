import cartProduct from '../../models/cartProduct.js'

const deleteAddToCart = async(req,res) => {
    try {
        const currentUserId = req.userId;
        const cartProductId = req.body._id;

        const deleteProduct = await cartProduct.deleteOne({_id : cartProductId})

        res.json({
            message : "Product List Updated",
            data : deleteProduct,
            success: true,
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

export default deleteAddToCart;