import productModel from '../../models/productModel.js' 
 
 const getproductDetails = async(req,res) => {
    try {
        const {productId} = req.body;

        const product = await productModel.findById(productId) 

        res.json({
            message:"Product detail",
            data : product,
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

 export default getproductDetails;