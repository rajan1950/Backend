
//db model
const productSchema = require("../models/ProductModel");

//api
// GET /prod/products/search?name=phone&category=electronics&minPrice=100&maxPrice=500
const searchProducts = async (req, res) => {
  try {
    const { name, category, minPrice, maxPrice } = req.query;

    const filter = {};

    if (name) {
      filter.name = { $regex: name, $options: "i" }; // case-insensitive
    }
    if (category) {
      filter.category = { $regex: category, $options: "i" };
    }
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const products = await productSchema.find(filter);
    res.json({
      message: "search results",
      count: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await productSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (updatedProduct) {
      res.status(200).json({
        message: "product updated",
        data: updatedProduct,
      });
    } else {
      res.status(404).json({ message: "product not found to update" });
    }
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
  searchProducts,
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
