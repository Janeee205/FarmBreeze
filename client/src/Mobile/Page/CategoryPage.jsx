import React from 'react';
import { Icon } from '@iconify/react';
import './CategoryPage.css';
import { Link } from 'react-router-dom';
// import TabBar from 'components/TabBar';

const CategoryPage = () => {
  return (
    <div>
      <div className='Category-header'>
        <h5>전체 목록</h5>
        <Icon icon="grommet-icons:cart" color="white" />
      </div>
      {/* <TabBar/> */}
      {/* <Link to="/">
        <img src={logoImg} alt="Codethat Logo" />
      </Link> */}
    </div>
  );
};

export default CategoryPage;