const express=require('express')
const router=express.Router();
const productController = require('../controllers/productController')

//Create an API to list the all transactions
router.get('/all_products',productController.allProducts);

//create an API to sort products based on rating limit upto 7
router.get('/sort_productsByRating',productController.sortProductsByRating);

//create an API to sort products in alphabetical order
router.get('/sort_productsByA_Z',productController.sortProductsByA_Z);
router.get('/sort_productsByZ_A',productController.sortProductsByZ_A);

//create an API to sort products based on Price
router.get('/sort_productsByPriceLow',productController.sortProductsByPriceLow);
router.get('/sort_productsByPriceHigh',productController.sortProductsByPriceHigh);



module.exports=router;