const config=require('../utils/config');
const productModel=require('../models/product.js')

const adminController ={

    //To fetch all products
    allProducts:async(req,res)=>{
        try{
            const allTransaction = await productModel.find().exec();
            console.log(allTransaction)
            res.status(200).json(allTransaction)
        }
        catch(err)
        {
            res.json(err)
        }
    },
    
    //To add new Product
    addProduct:async(req,res)=>{
        try{

        }
        catch(err)
        {
            res.json(err)
        }
    },

    //To edit a product    
    editProduct:async(req,res)=>{
        try{

        }
        catch(err)
        {
            res.json(err)
        }
    },

    //To delete a product
    deleteProduct:async(req,res)=>{
        try{

        }
        catch(err)
        {
            res.json(err)
        }
    },
}

module.exports=adminController;