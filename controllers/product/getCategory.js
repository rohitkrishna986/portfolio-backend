import productModel from "../../models/productModel.js";


const getCategoryProduct = async(req,res) => {
    try {
        const productCatergory = await productModel.distinct('category')
        const productByCategory = []

        for(const category of productCatergory){
            const product = await productModel.findOne({category})
            if(product){
                productByCategory.push(product)
            }
        }

        res.json({
            message : "Category Product",
            data : productByCategory,
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

export default getCategoryProduct;