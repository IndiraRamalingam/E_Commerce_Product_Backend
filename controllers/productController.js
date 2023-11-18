const config=require('../utils/config');
const productModel=require('../models/product.js')

const productController = {

      //Create an API to list the all products
      allProducts: async (req, res) => {
        try {
            const allTransaction = await productModel.find().exec();
            console.log(allTransaction)
            res.status(200).json(allTransaction)
        } catch (err) {
            res.json(err);
        }
    },

         //Create an API to sort the products based on rating and limit upto 7
         sortProductsByRating: async (req, res) => {
            try {
                const allTransaction = await productModel.find().sort({rate: -1}).limit(7).exec();
                res.status(200).json({allTransaction})
            } catch (err) {
                res.json(err);
            }
        },

     //Create an API to sort the products based on A-Z
     sortProductsByA_Z: async (req, res) => {
        try {
            const allTransaction = await productModel.find().sort({title: 1}).exec();
            res.status(200).json({allTransaction})
        } catch (err) {
            res.json(err);
        }
    },

        //Create an API to sort the products based on Z-A
        sortProductsByZ_A: async (req, res) => {
            try {
                const allTransaction = await productModel.find().sort({title: -1}).exec();
                res.status(200).json({allTransaction})
            } catch (err) {
                res.json(err);
            }
        },

        //Create an API to sort the products based on Price Low to High
            sortProductsByPriceLow: async (req, res) => {
                try {
                    const allTransaction = await productModel.find().sort({price: 1}).exec();
                    res.status(200).json({allTransaction})
                } catch (err) {
                    res.json(err);
                }
            },

        //Create an API to sort the products based on Price High to Low
        sortProductsByPriceHigh: async (req, res) => {
            try {
                const allTransaction = await productModel.find().sort({price: -1}).exec();
                res.status(200).json({allTransaction})
            } catch (err) {
                res.json(err);
            }
        },

}

module.exports=productController