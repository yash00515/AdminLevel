 const {category} = require("../models/category.schema")

const create = async(req,res) =>{
   let result =  await category.create(req.body);
   res.send(result);
}

const update = async(req,res) =>
{
   let {id} = req.params;
   let {subId} = req.body;

   let result = await category.findById(id);

   result.subcategoryId = subId;
   result.save();

   res.send(result);
}

const getCategory =async (req,res) =>{
   let result = await category.find().populate("subcategoryId");
   res.send(result);
}

module.exports = {create, update, getCategory};