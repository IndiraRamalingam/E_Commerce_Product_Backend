const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rate:{
        type:String,
        required:true
    },
    count:{
        type:String,
        required:true
    },
    stock: {
        type: String,
        required: true
    },
    Brand: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Product', productSchema, 'products');