const{Router}=require("express")
const { create } = require("../controllers/subcategory.controller")

const sroute= Router()

sroute.post("/create",create)
module.exports={sroute}