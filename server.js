const config = require('./utils/config');
const mongoose = require('mongoose');
const app = require('./app');
const productModel=require('./models/product')
const product_data=require('./Data')

//connect with DB
mongoose.connect(config.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(config.PORT, () => {
            console.log(`Server running on PORT ${config.PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB', error);
    });

//Fetching data and save it to collection
//  product_data.map((p)=>{
//     (async ()=>{
//         const document = await productModel.findOne({ id: p.id }).exec();
//         if (!document) {
//             const products_Model = new productModel({
//                 id: p.id,
//                 title: p.title,
//                 price: Math.round(p.price),
//                 description: p.description,
//                 category: p.category,
//                 image: p.image,
//                 rate:p.rate,
//                 count:p.count,
//                 stock:p.Stock,
//                 Brand:p.Brand,
//             })
//             products_Model.save();
//         } 
//     })();
//    
//  })
