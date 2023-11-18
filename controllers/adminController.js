const config=require('../utils/config');
const productModel=require('../models/product.js')

const adminController ={

    //To fetch all products
    allProducts:async(req,res)=>{
        try{
            const allTransaction = await productModel.find().exec();
          //  console.log(allTransaction)
            res.status(200).json(allTransaction)
        }
        catch(err)
        {
            res.json(err)
        }
    },
    
    //get Product By ID 
    getProductByID:async(req,res)=>{
        try{
            const allTransaction = await productModel.findById(req.params.id).exec();
          //  console.log(allTransaction)
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
            const{id,title,price,description,category,image,rate,count,stock,brand} = req.body;
            console.log(id,title,price,description,category,image,rate,count,stock,brand)
            //check if product exists
        
            //create new Patient
            const newProduct = new productModel({
                                id: id,
                                title: title,
                                price: Math.round(price),
                                description: description,
                                category: category,
                                image: image,
                                rate:rate,
                                count:count,
                                stock:stock,
                                Brand:brand
            });

             await newProduct.save();
        
            res.status(201).json({message:"Product added successfully"})
        }
        catch(err)
        {
            res.json(err)
        }
    },

    //To edit a product    
    editProduct:async(req,res)=>{
        try{
            const product=await productModel.findByIdAndUpdate(req.params.id).exec();
                
            product.set(req.body)
            const result=await product.save();
            res.status(200).json({result})
        }
        catch(err)
        {
            res.json(err)
        }
    },

    //To delete a product
    deleteProduct:async(req,res)=>{
        try{
            const product=await productModel.findByIdAndDelete(req.params.id).exec();
            res.status(200).json({message:"Deleted Successfully"})
        }
        catch(err)
        {
            res.json(err)
        }
    },
}

module.exports=adminController;