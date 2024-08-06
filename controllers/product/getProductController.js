import productModel from '../../models/productModel.js';

const getProductController = async (req, res) => {
    try {
        const allProducts = await productModel.find().sort({ createdAt: -1 });

        res.json({
            data: allProducts,
            message: "All products",
            success: true,
            error: false
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: true,
            success: false
        });
    }
};

export default getProductController;
