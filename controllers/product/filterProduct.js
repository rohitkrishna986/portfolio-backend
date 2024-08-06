import productModel from '../../models/productModel.js'

const filterProduct = async(req,res) => {
    try {
        const categoryList = req?.body?.category || []

        const product = await productModel.find({
            category : {
                "$in" : categoryList
            }
        })

        res.json({
            data : product,
            message : 'Category list of product',
            error : false,
            success : true
        })

    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: true,
            success: false
        });
    }
}

export default filterProduct;