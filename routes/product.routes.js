const { Router } = require("express");
const { create, data, update, remove, home } =
    require("../controllers/product.controller");

const proute = Router();

proute.get("/", home);
proute.get("/product", data);
proute.post("/create", create);
proute.patch("/update/:id", update);
proute.delete("/delete/:id", remove);

module.exports = {proute};