const express=require('express')
const router=express.Router();
const adminController = require('../controllers/adminController')

//To fetch all products
router.get('/allProducts',adminController.allProducts);

//Get Product By ID
router.get('/getProductByID/:id',adminController.getProductByID)
//To add new Product
router.post('/addProduct',adminController.addProduct);

//To edit a product
router.put('/editProduct/:id',adminController.editProduct);

//To delete a product
router.delete('/deleteProduct/:id',adminController.deleteProduct);

module.exports=router;