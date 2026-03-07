
//db model
const productSchema = require("../models/ProductModel");

//api
const getAllProducts = async (req, res) => {
  try {
    const allProducts = await productSchema.find();
    res.json({
      message: "all products",
      data: allProducts,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const foundProduct = await productSchema.findById(req.params.id);
    if (foundProduct) {
      res.json({
        message: "product found",
        data: foundProduct,
      });
    } else {
      res.status(404).json({
        message: "product not found",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addProduct = async (req, res) => {
  try {
    const savedProduct = await productSchema.create(req.body);
    res.status(201).json({
      message: "product saved",
      data: savedProduct,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deletedProductObj = await productSchema.findByIdAndDelete(req.params.id);
    if (deletedProductObj) {
      res.status(200).json({
        message: "product deleted",
        data: deletedProductObj,
      });
    } else {
      res.status(404).json({
        message: "product not found to delete",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProduct,
};
