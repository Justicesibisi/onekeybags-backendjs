const Product = require('../models/Product');

const getProduct = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

const createProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
};

const updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
};

const deleteProduct = async (req, res) => {
  await Product.findByIdAndRemove(req.params.id);
  res.json({ message: 'Product deleted successfully' });
};

module.exports = { getProduct, createProduct, updateProduct, deleteProduct };
