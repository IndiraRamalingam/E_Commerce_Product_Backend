const express=require('express')
const router=express.Router();
const adminController = require('../controllers/adminController')

//To fetch all products
router.get('/allProducts',adminController.allProducts);

//To add new Product
router.post('/addProduct',adminController.addProduct);

//To edit a product
router.put('/editProduct',adminController.editProduct);

//To delete a product
router.delete('/deleteProduct',adminController.deleteProduct);

module.exports=router;