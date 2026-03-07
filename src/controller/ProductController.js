
//db model
const productSchema = require("../models/ProductModel");

//api
const getAllProducts = async (req, res) => {
  //db query
  const allProducts = await productSchema.find();
  res.json({
    message: "all products",
    data: allProducts,
  });
};
const getProductById = async (req, res) => {
  //req.params.id
  //const foundProduct = await productSchema.find({_id:req.params.id}) //[]
  const foundProduct = await productSchema.findById(req.params.id); //{}
  if (foundProduct) {
    res.json({
      message: "product found",
      data: foundProduct,
    });
  } else {
    res.json({
      message: "product not found",
    });
  }
};

const addProduct = async (req, res) => {
  //console.log("body...",req.body)
  const savedProduct = await productSchema.create(req.body);
  res.status(201).json({
    message: "product saved",
    data: savedProduct,
  });
};

const deleteProduct = async (req, res) => {
  //delete from products where id = ?
  //db.products.removeOne({_id:?})
  //productSchema.removeOne({_id:req.params.id})
  //productSchema.findByIdAndDelete(req.params.id)

  const deletedProductObj = await productSchema.findByIdAndDelete(
    req.params.id,
  );
  if (deletedProductObj) {
    res.status(200).json({
      message: "product deleted",
      data: deletedProductObj,
    });
  } else {
    res.status(200).json({
      message: "product not found to delete",
    });
  }
};

// PUT /products/:id/color  =>  add a color
const addColor = async (req, res) => {
  // req.params.id  => product id from URL
  // req.body.color => color string to add
  const updatedProduct = await productSchema.findByIdAndUpdate(
    req.params.id,
    { $push: { colors: req.body.color } },
    { new: true },
  );
  if (updatedProduct) {
    res.status(200).json({
      message: "color added",
      data: updatedProduct,
    });
  } else {
    res.status(404).json({
      message: "product not found",
    });
  }
};

// PUT /products/:id/color/remove  =>  remove a color
const removeColor = async (req, res) => {
  // req.params.id  => product id from URL
  // req.body.color => color string to remove
  const updatedProduct = await productSchema.findByIdAndUpdate(
    req.params.id,
    { $pull: { colors: req.body.color } },
    { new: true },
  );
  if (updatedProduct) {
    res.status(200).json({
      message: "color removed",
      data: updatedProduct,
    });
  } else {
    res.status(404).json({
      message: "product not found",
    });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProduct,
  addColor,
  removeColor,
};
