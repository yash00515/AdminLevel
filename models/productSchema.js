const mongoose = require("mongoose");

const productSchema =  mongoose.Schema({

    title: {
        type: String
    },
    price: {
        type: Number
    },
    description :{
        type: String
    },
    img: {
        type: String
    }
})

const product = mongoose.model("product", productSchema)
module.exports = {product};