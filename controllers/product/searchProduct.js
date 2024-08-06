import productModel from '../../models/productModel.js'

const searchProduct = async(req,res)=> {
    try {
        const query = req.query.q;

        const regex = new RegExp(query,'i','g')

        const product = await productModel.find({
            "$or" : [
                {
                    productName : regex 
                },
                {
                    category : regex
                }
            ]
        })

        res.json({
            data : product,
            message : "Search product list",
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

export default searchProduct;