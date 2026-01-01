 const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = {
  subcategory:
    mongoose.models.subcategory ||
    mongoose.model("subcategory", subcategorySchema)
};
