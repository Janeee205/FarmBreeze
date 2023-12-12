import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Header from '../Component/Header.jsx';
import TabBar from '../Component/TabBar.jsx';

const CartPage = () => {
  return (
    <div>
      <Header title='장바구니' />
      <Link to="/Search" style={{ position: 'absolute', right: '3rem', top: '2rem' }}>
        <Icon className='cart-search-icon' icon="material-symbols:search" color="#5e9fc3" height='2rem' />
      </Link>
      <TabBar/>
    </div>
  );
};

export default CartPage;