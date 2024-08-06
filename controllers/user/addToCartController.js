import cartModel from '../../models/cartProduct.js'
const addToCartController = async(req,res) => {
    try {
        const {productId} = req.body;
        const currentUser = req.userId;

        const isProductAvailable = await cartModel.findOne({productId})

        if(isProductAvailable){
            return res.json({
                message : "Already Exists in cart",
                error : false,
                success : true
            })
        }

        const payload = {
            productId : productId,
            quantity : 1,
            userId : currentUser,
        }

        const newAddToCart = new cartModel(payload)
        const saveProduct = await newAddToCart.save();


        res.json({
            message: "Product added",
            data: saveProduct,
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

export default addToCartController;