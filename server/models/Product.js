const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  categoryLarge: { type: String, required: true },
  categoryMedium: { type: String, required: true },
  productName: { type: String, required: true },
  unit: { type: String, required: true },
  sellerName: { type: String, required: true },
  discountRate: { type: Number, required: true },
  salePrice: { type: String, required: true },
  discountedPrice: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema, 'FarmBreeze.product');

module.exports = Product;
