const {product} = require("../models/productSchema")

const create = async (req,res) =>{
   let data = req.body;
    let result = await product.create(data);
    res.send(result);
}

const data = async(req,res) =>{
    let result = await product.find();
    res.send(result);
}

const update = async(req,res) => {
    let data = req.body;
    let {id} = req.params;

   let result = await product.findByIdAndUpdate(id, data);
   res.send("Update Done...");
}

const remove = async(req,res) => {
    let {id} = req.params;

   let result = await product.findByIdAndDelete(id);
   res.send("Deleted...");
}

const home = (req,res)=>{
    res.render("product");
}



module.exports = {create, data, update, remove, home};