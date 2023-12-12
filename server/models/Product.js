const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  // 실제 데이터베이스와 동일하게 작업할 공간
  // 여기에 제품 모델의 스키마를 정의합니다.
  name: String,
  price: Number,
  // 기타 필요한 속성들을 추가하세요.
});

const Product = mongoose.model('Product', productSchema, 'product');

module.exports = Product;