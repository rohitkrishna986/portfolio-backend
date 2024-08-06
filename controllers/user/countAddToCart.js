import cartModel from '../../models/cartProduct.js'

const countAddToCart = async(req,res) => {
    try {
        const userId = req.userId;
        const count = await cartModel.countDocuments({
            userId : userId
        })

        res.json({
            data : {
                count : count
            },
            message : "OK",
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

export default countAddToCart;