import React from 'react';
import { Icon } from '@iconify/react';
import './ProductItem.css';

const ProductItem = (props) => {
  return (
    <div className='product-item'>
      <div className="img-box">
        <img src={props.img} alt={props.title} />
        <Icon icon="icon-park-outline:like" />
      </div>
      <div className="cart-btn-box">
        <Icon icon="tdesign:cart" />
        <p>담기</p>
      </div>
      <p className="product-title">{props.title}</p>
      <p className='price'>{props.price}</p>
      <div className="discounted-prices">
        <p>{props.discountRate}</p>
        <p>{props.discountedPrices}</p>
      </div>
      <p className='review-count'>후기 <span>{props.reviewCount}</span>개</p>
    </div>
  );
};

export default ProductItem;