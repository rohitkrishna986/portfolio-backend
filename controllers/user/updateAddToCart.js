import cartProduct from '../../models/cartProduct.js'

const updateAddToCart = async(req,res) => {
    try {
        const currentUserId = req.userId;
        const addToCartProductId = req.body._id;

        const qty = req.body.quantity;

        const updateProduct = await cartProduct.updateOne({_id : addToCartProductId}, {
            ...(qty && {quantity : qty})
        })

        res.json({
            message : 'Updated',
            data : updateProduct,
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

export default updateAddToCart;