import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    productName : String,
    brandName : String,
    category : String,
    productImage : [],
    description : String,
    price : Number,
    selling : Number
},{
    timestamps : true
})

const productModel = mongoose.model("product", productSchema)
export default productModel;