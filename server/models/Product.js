const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  // 실제 데이터베이스와 동일하게 작업할 공간
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;