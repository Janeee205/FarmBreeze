import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Header from '../Component/Header.jsx';
import TabBar from '../Component/TabBar.jsx';

const LikePage = () => {
  return (
    <div>
      <Header title='좋아요' />
      <Link to="/Search" style={{ position: 'absolute', right: '4rem', top: '2rem' }}>
        <Icon className='like-search-icon' icon="material-symbols:search" color="#5e9fc3" height='2rem' />
      </Link>
      <Link to="/Cart" style={{ position: 'absolute', right: '1rem', top: '2rem' }}>
        <Icon className='like-cart' icon="ion:cart-outline" color="#005792" height='2rem' />
      </Link>
      <TabBar/>
    </div>
  );
};

export default LikePage;