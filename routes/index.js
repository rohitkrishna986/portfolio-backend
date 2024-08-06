import express from "express";

const router = express.Router();
import UserSignup from '../controllers/user/userSignup.js'
import userSignIn from "../controllers/user/userSignin.js";
import authToken from '../middlewares/authToken.js'
import userDetails from "../controllers/user/userDetails.js";
import userLogout from "../controllers/user/userLogout.js";
import allUsers from "../controllers/user/allUsers.js";
import updateUserRole from "../controllers/user/updateUserRole.js";
import uploadProductController from "../controllers/product/uploadProduct.js";
import getProductController from "../controllers/product/getProductController.js";
import updateProductController from '../controllers/product/updateProduct.js'
import getCategoryProduct from "../controllers/product/getCategory.js";
import getCategoryWiseProduct from '../controllers/product/getCategoryWiseProduct.js';
import getproductDetails from '../controllers/product/getProductDetails.js';
import addToCartController from "../controllers/user/addToCartController.js";
import countAddToCart from '../controllers/user/countAddToCart.js';
import addToCartView from '../controllers/user/addToCartView.js';
import updateAddToCart from '../controllers/user/updateAddToCart.js';
import deleteAddToCart from '../controllers/user/deleteAddToCart.js';
import searchProduct from '../controllers/product/searchProduct.js';
import filterProduct from '../controllers/product/filterProduct.js'

router.post("/signup",UserSignup)
router.post("/signin", userSignIn)
router.get("/user-details",authToken, userDetails)
router.get('/userLogout', userLogout)

router.get("/all-user",authToken, allUsers)
router.post("/update-user", authToken, updateUserRole)
router.post('/upload-product',authToken, uploadProductController)
router.get('/get-product', getProductController)
router.post('/update-product',authToken, updateProductController)
router.get('/get-category', getCategoryProduct)
router.post('/category-product', getCategoryWiseProduct)
router.post('/product-detail', getproductDetails)

router.post("/addtocart", authToken, addToCartController)
router.get("/countAddToCart" , authToken, countAddToCart)
router.get('/addToCartView', authToken, addToCartView)
router.post('/updateAddToCart', authToken, updateAddToCart)
router.post('/deleteAddToCart', authToken, deleteAddToCart)
router.get('/searchProduct', searchProduct)
router.post("/filter-Product", filterProduct)
export default router;