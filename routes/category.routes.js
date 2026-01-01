 const {Router}= require("express");
const { create } = require("../controllers/category.controller");

 const croute = Router();


 croute.post("/create",create )
 
 module.exports ={croute};