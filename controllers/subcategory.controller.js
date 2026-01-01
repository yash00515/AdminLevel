const {subcat} = require("../models/subcategorySchema")

let create = async(req,res)=>{
   let result = await subcat.create(req.body);
   res.send(result);
}

let getsubCategory = async(req,res)=>{
   let result = await subcat.find();
   res.send(result);
}

module.exports={create, getsubCategory}