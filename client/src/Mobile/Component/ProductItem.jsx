import React from 'react';
import { Icon } from '@iconify/react';
import './ProductItem.css';

const ProductItem = (props) => {
  const product = [
    {
      title : '제목',
      img : '이미지',
      price : '가격',
      discountRate : '할인율',
      discountedPrices : '할인 가격',
      reviewCount : '후기'
    }
  ]
  return (
    <div className='product-item'>
      <div className="img-box">
        <img src={product.img} alt={product.title} />
        <Icon icon="icon-park-outline:like" />
      </div>
      <div className="cart-btn-box">
        <Icon icon="tdesign:cart" />
        <p>담기</p>
      </div>
      <p className="product-title">{product.title}</p>
      <p className='price'>{product.price}</p>
      <div className="discounted-prices">
        <p>{product.discountRate}</p>
        <p>{product.discountedPrices}</p>
      </div>
      <p className='review-count'>후기 <span>{product.reviewCount}</span>개</p>
    </div>
  );
};

export default ProductItem;