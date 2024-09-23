const express = require("express");
const productModel = require("../models/product.model");

const productRoute = express.Router();

productRoute.get("/", async (req, res) => {
  let allProduct = await productModel.find();
  res.json({ allProduct });
});
productRoute.post("/", async (req, res) => {
  const newData = productModel(req.body);
  await newData.save();
  res.json({ newData });
});

productRoute.put("/:id", async (req, res) => {
  let id = req.params.id;

  let updatedProduct = await productModel.findByIdAndUpdate(id , req.body);
  res.status(200).json({msg : "Data update succesfully", updatedProduct })

});

productRoute.delete('/:id' , async (req,res) => {
  let id = req.params.id
  let deletedData  = await productModel.findByIdAndDelete(id)
res.status(200).json({msg : "Data delete succesfully"  , deletedData})
})

module.exports = productRoute;
